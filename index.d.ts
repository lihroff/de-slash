declare namespace DeSlash {
  interface Options {
    schemes?: string[];
    backslash?: boolean;
  }
}

declare function deSlash(url: string, opt?: DeSlash.Options): String;

export = deSlash;
