// 修复第三方库中的ts bug

declare namespace uri {
  interface URIStatic {
    parseQuery(url: string): any;
  }
}
