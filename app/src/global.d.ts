declare namespace  global {
  interface String {
    replaceJSX(
      find: string | RegExp,
      replace: React.ReactNode
    ): React.ReactNode[]
  }
}

String.prototype.replaceJSX = function (
  find: string | RegExp,
  replace: React.ReactNode
): React.ReactNode[] {
  return this.split(find)
    .flatMap((item) => [item, replace])
    .slice(0, -1)
}