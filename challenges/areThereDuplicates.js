function areThereDuplicates() {
  // 1.
  return new Set(arguments).size !== arguments.length;

  // 2.
  // for (let arg of arguments) {
  //   if (set.has(arg)) return true;
  //   set.add(arg);
  // }
  // return false;

  // 3.
  //   let lookup = {};
  //   for (let arg of arguments) {
  //     if (lookup[arg]) return true;
  //     lookup[arg] = 1;
  //   }
  //   return false;
}

console.log(areThereDuplicates("a", "b", "b"));
