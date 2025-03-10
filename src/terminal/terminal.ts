import "../../node_modules/xterminal/dist/xterminal.css";
import XTerminal from "xterminal";
import { root, Directory } from "./filesystem";
import welcome from "./welcome.txt?raw";
import welcomeSmall from "./welcome-small.txt?raw";
import { marked } from "marked";

const helpText = `Here are the supported commands:
- welcome: display the welcome message
- help: display this message
- ls: list files and directories at the current directory
- cd: change directory to a specified path
- clear: clears the screen
- pwd: get the current directory
- cat: display the contents of a file at the specified path
- exit: return to the main page`;

const welcomeText = window.innerWidth >= 800 ? welcome : welcomeSmall;

export class Shell {
  currentDir: Directory;
  viMode: boolean = false;
  private term: XTerminal;
  constructor(
    public name: string,
    private dialog: HTMLDialogElement | null,
    public prompt: string = "[/] $: ",
  ) {
    console.log(dialog);
    this.name;
    this.term = new XTerminal();
    this.term.mount(`#${name}`);
    this.term.setCompleter((input) => {
      const matcher = this.term.history.filter((c) => c.startsWith(input));
      if (matcher.length > 0) {
        return matcher.pop() ?? "";
      }
      if (input.startsWith("cat ") || input.startsWith("cd")) {
        const [cmd, variable] = input.split(" ", 2);
        const arg =
          this.listDirsAndFiles()
            .reduce((acc, [name]) => {
              if (name.startsWith(variable) && name !== variable) {
                acc.push(name);
              }
              return acc;
            }, [] as string[])
            .pop() ?? "";
        return `${cmd} ${arg}`;
      }
      return (
        ["help", "welcome", "ls", "cd", "clear", "pwd", "cat", "exit"]
          .filter((c) => c.startsWith(input))
          .pop() ?? ""
      );
    });
    this.currentDir = root;
    this.greet();
  }

  private async greet() {
    this.term.on("data", this.runCmd.bind(this));
    this.term.write("Loading...");
    setTimeout(() => {
      this.term.clearLast();
      this.write(welcomeText);
      this.term.write("Loading...");
    }, 500);
    setTimeout(() => {
      this.term.clearLast();
      this.writeln(helpText);
      this.term.write("Loading...");
      this.term.clearLast();
      this.write(this.prompt);
      this.term.focus();
    }, 1300);
  }

  private async write(input: string): Promise<void> {
    return new Promise((res) => {
      this.term.write(input, () => {
        res();
      });
    });
  }

  private async writeln(input: string): Promise<void> {
    return new Promise((res) => {
      this.term.writeln(input, () => {
        res();
      });
    });
  }

  async runCmd(input: string): Promise<void> {
    const [cmd, ...args] = input.split(" ");
    switch (cmd) {
      case "clear":
        this.term.clear();
        break;
      case "ls":
        await this.ls(args);
        break;
      case "cd":
        await this.cd(args);
        break;
      case "cat":
        await this.cat(args);
        break;
      case "pwd":
        await this.writeln(this.currentDir.pwd());
        break;
      case "help":
        await this.writeln(helpText);
        break;
      case "welcome":
        await this.writeln(welcomeText);
        break;
      case "exit":
        console.log(this.dialog);
        this.dialog?.close();
        this.term.dispose();
        break;
      default:
        this.writeln(`Unknown command: ${input.split(" ")[0]}`);
    }
    await this.write(this.prompt);
    // This is a really hacky workaround...
    setTimeout(() => {
      const xt = Array.from(
        document.querySelector(".xt-stdout")?.children ?? [],
      ).at(-4);
      const output = Array.from(xt?.children ?? []).at(-2);
      output?.scrollIntoView();
    }, 15);
  }

  private listDirsAndFiles() {
    const directories = Array.from(this.currentDir.directories.values()).map(
      ({ name, hidden }) => [`${name}/` as string, hidden] as const,
    );
    const files = Array.from(this.currentDir.files.values()).map(
      ({ name, hidden }) => [name, hidden] as const,
    );
    return directories.concat(files);
  }

  private ls(args: string[]) {
    const results = this.listDirsAndFiles()
      .filter(
        ([_, hidden]) =>
          !hidden || args.includes("-a") || args.includes("--all"),
      )
      .map(([name]) => name);
    return this.writeln(results.join(" "));
  }

  private cd(args: string[]) {
    if (args.length > 1) {
      return this.writeln(
        `Too many positional params. Expected: 1, Got: ${args.length}`,
      );
    }
    const path = args[0];
    if (!path) {
      return this.writeln('Must include a "path" positional param');
    }
    try {
      this.currentDir = this.currentDir.cd(path);
      this.prompt = `[${this.currentDir.pwd()}] $: `;
      return Promise.resolve();
    } catch (err) {
      return this.writeln(`${err}`);
    }
  }

  private async cat(args: string[]) {
    if (args.length > 1) {
      return this.writeln(
        `Too many positional params. Expected: 1, Got: ${args.length}`,
      );
    }
    const filepath = args[0];
    if (!filepath) {
      return this.writeln('Must include a "path" positional param');
    }
    const pathSegments = filepath.split("/");
    const filename = pathSegments.pop() ?? "";
    try {
      const dir = this.currentDir.cd(pathSegments.join("/"));
      const file = dir.files.get(filename);
      if (!!file) {
        switch (file.mimeType) {
          case "image/jpeg":
          case "image/png":
          case "image/gif":
            break;
          case "application/pdf":
            return this.writeln(
              `<object class="pdf" data="${file.contents}"></object>`,
            );
          case "text/markdown":
            return this.write(
              `<div class="markdown">${(await marked(file.contents)).replaceAll("\n", "")}</div>`,
            );
          default:
            return this.writeln(file.contents);
        }
      } else {
        return this.writeln(`${filepath} not found`);
      }
    } catch (err) {
      return this.writeln(`${filepath} not found`);
    }
  }

  unmount() {
    this.term.dispose();
  }
}
