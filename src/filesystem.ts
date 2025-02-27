import { html as connectMd } from "./markdown/connect.md"
import { html as aboutMd } from "./markdown/about.md"
import { html as gleamGraphqlMd } from "./markdown/gleam-graphql.md"
import { html as forkdMd } from "./markdown/forkd.md"
import mime from "mime";

export class File {
  createdAt: Date;
  mimeType?: string;
  constructor(
    public name: string,
    public contents: string,
    public hidden: boolean = false,
  ) {
    this.createdAt = new Date();
    this.mimeType = mime.getType(name) || undefined;
  }
}

export class Directory {
  createdAt: Date;
  constructor(
    public name: string,
    public parent?: Directory,
    public hidden: boolean = false,
    public files: Map<string, File> = new Map(),
    public directories: Map<string, Directory> = new Map(),
  ) {
    this.createdAt = new Date();
  }

  touch(path: string, contents: string, hidden = false): Directory {
    const segments = path.split("/");
    const name = segments.at(-1);
    if (!name) {
      // TODO: Better error handling
      throw new Error("Bad path");
    }
    const file = new File(name, contents, hidden);
    if (segments.length > 1) {
      this.mkdir(path, hidden, [file]);
    } else {
      this.files.set(path, file);
    }
    return this;
  }

  mkdir(path: string, hidden = false, files?: File[]): Directory {
    const segments = path.split("/");
    let dir: Directory = this;
    for (let [index, segment] of segments.entries()) {
      dir = new Directory(
        segment,
        dir,
        hidden,
        index === segments.length - 1
          ? files?.reduce<Map<string, File>>((acc, curr) => {
            acc.set(curr.name, curr);
            return acc;
          }, new Map())
          : undefined,
      );
      if (index === 0) {
        this.directories.set(segment, dir);
      }
    }
    return this;
  }

  private recursiveGet(initPath: string): Directory {
    let path = initPath.startsWith("/") ? initPath.slice(1) : initPath;
    path = path.endsWith("/") ? path : path + "/";
    const [head, ...tail] = path.split("/").filter(Boolean);
    if (!head) {
      return this;
    }
    const dir = this.directories.get(head);
    if (!dir) {
      throw new Error("Invalid path");
    }
    if (tail.length > 0) {
      return dir.recursiveGet(tail.join("/"));
    }
    return dir;
  }

  pwd(): string {
    if (this.parent) {
      return `${this.parent.pwd()}${this.name}/`;
    }
    return `/${this.name}`;
  }

  cd(path: string): Directory {
    if (path.startsWith("/")) {
      return this.recursiveGet(path);
    } else {
      if (/^\.\.\/?/.test(path)) {
        if (!this.parent) {
          throw new Error("Cannot cd ../ on directory with no parent");
        }
        const newPath = path.replace(/\.\.\/?/, "");
        return this.parent.cd(newPath);
      }
      const dir = this.recursiveGet(path);
      return dir;
    }
  }
}
export const root = new Directory("")
  .touch("about.md", aboutMd, false)
  .touch("resume.pdf", "/resume.pdf", false)
  .touch("connect.md", connectMd, false)
  .mkdir("projects", false, [
    new File("forkd.md", forkdMd, false),
    new File("gleam-graphql.md", gleamGraphqlMd, false),
  ]);
