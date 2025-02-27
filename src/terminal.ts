import "xterminal/dist/xterminal.css";
import XTerminal from "xterminal";
import { root, Directory } from "./filesystem"

const asciiWelcom = `
888       888        888
888   o   888        888
888  d8b  888        888
888 d888b 888 .d88b. 888 .d8888b .d88b. 88888b.d88b.  .d88b.
888d88888b888d8P  Y8b888d88P"   d88""88b888 "888 "88bd8P  Y8b
88888P Y8888888888888888888     888  888888  888  88888888888
8888P   Y8888Y8b.    888Y88b.   Y88..88P888  888  888Y8b.
888P     Y888 "Y8888 888 "Y8888P "Y88P" 888  888  888 "Y8888
`

const helpText = `Here are the supported commands:

- help: display this message
- ls: list files and directories at the current directory
- cd: change directory to a specified path
- clear: clears the screen
- pwd: get the current directory
- cat: display the contents of a file at the specified path
`

class Shell {
  currentDir: Directory;
  viMode: boolean = false;
  private term: XTerminal;
  constructor(
    public name: string,
    public prompt: string = "[/] $: ",
  ) {
    this.name;
    this.term = new XTerminal();
    this.term.mount(`#${name}`);
    this.term.setCompleter((input) => {
      const matcher = this.term.history.filter(c => c.startsWith(input));
      if (matcher.length > 0) {
        return matcher.pop() ?? ""
      }
      if (input.startsWith("cat ") || input.startsWith("cd")) {
        const [cmd, variable] = input.split(" ", 2)
        const arg = this.listDirsAndFiles().reduce((acc, [name]) => {
          if (name.startsWith(variable) && name !== variable) {
            acc.push(name)
          }
          return acc;
        }, [] as string[]).pop() ?? ""
        return `${cmd} ${arg}`
      }
      return ["help", "ls", "cd", "clear", "pwd", "cat"].filter(c => c.startsWith(input)).pop() ?? ""
    })
    this.term.writeln(asciiWelcom)
    this.term.writeln(helpText)
    this.term.write(this.prompt);
    this.term.on("data", this.runCmd.bind(this));
    this.currentDir = root;
  }

  private async write(input: string): Promise<void> {
    return new Promise((res) => {
      this.term.write(input, () => {
        res()
      })
    })
  }

  private async writeln(input: string): Promise<void> {
    return new Promise((res) => {
      this.term.writeln(input, () => {
        res()
      })
    })
  }

  async runCmd(input: string): Promise<void> {
    const [cmd, ...args] = input.split(" ")
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
        break
      case "pwd":
        await this.writeln(this.currentDir.pwd());
        break;
      case "help":
        await this.writeln(helpText)
        break;
      default:
        this.writeln(`Unknown command: ${input.split(" ")[0]}`);
    }
    await this.write(this.prompt);
    // This is a really hacky workaround...
    setTimeout(() => {
      const xt = Array.from(document.querySelector(".xt-stdout")?.children ?? []).at(-4);
      const output = Array.from(xt?.children ?? []).at(-2);
      output?.scrollIntoView()
    }, 15)
  }

  private listDirsAndFiles() {
    const directories = Array.from(this.currentDir.directories.values())
      .map(({ name, hidden }) => [`${name}/` as string, hidden] as const);
    const files = Array.from(this.currentDir.files.values())
      .map(({ name, hidden }) => [name, hidden] as const);
    return directories.concat(files);
  }

  private ls(args: string[]) {
    const results = this.listDirsAndFiles()
      .filter(
        ([_, hidden]) => !hidden || args.includes("-a") || args.includes("--all"),
      ).map(([name]) => name)
    return this.writeln(results.join(" "));
  }

  private cd(args: string[]) {
    if (args.length > 1) {
      return this.writeln(`Too many positional params. Expected: 1, Got: ${args.length}`);
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

  private cat(args: string[]) {
    if (args.length > 1) {
      return this.writeln(`Too many positional params. Expected: 1, Got: ${args.length}`);
    }
    const filepath = args[0];
    if (!filepath) {
      return this.writeln('Must include a "path" positional param');
    }
    const pathSegments = filepath.split("/")
    const filename = pathSegments.pop() ?? ""
    try {
      const dir = this.currentDir.cd(pathSegments.join("/"))
      const file = dir.files.get(filename)
      if (!!file) {
        switch (file.mimeType) {
          case 'image/jpeg':
          case 'image/png':
          case 'image/gif':
            break;
          case 'application/pdf':
            return this.writeln(`<object class="pdf" data="${file.contents}"></object>`)
          default:
            return this.writeln(file.contents)
        }
      } else {
        return this.writeln(`${filepath} not found`)
      }
    } catch (err) {
      return this.writeln(`${filepath} not found`)
    }
  }
}

function main() {
  new Shell("app");
}

main();
