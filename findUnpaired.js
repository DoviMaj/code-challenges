function findUnpaired(A) {
  // let all = [];
  // let paired = [];
  // A.forEach(i => {
  //   if (!all.includes(i)) {
  //     all.push(i);
  //   } else {
  //     paired.push(i);
  //   }
  // });
  // let unpaired = all.filter(i => !paired.includes(i))[0];
  // return unpaired;
  let s = new Set();
  A.forEach((i) => s.delete(i) || s.add(i));
  return s.values().next().value;
}

// console.log(findUnpaired([9, 3, 9, 3, 9, 7, 9]));
