export const getArgs = (args) => {
  const res = {};
  const [_ex, _file, ...restArgs] = args;

  restArgs.forEach((arg, i, self) => {
    if (arg.startsWith('-')) {
      if (i === self.length - 1) {
        res[arg.substring(1)] = true
      } else if (self[i + 1].charAt(0) !== '-') {
        res[arg.substring(1)] = self[i + 1]
      } else {
        res[arg.substring(1)] = true
      }
    }
  });

  return res;
}
