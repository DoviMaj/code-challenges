function findMax(S, C) {
  let elementsArr = [];
  const tablesArr = S.split("\n");
  const table = tablesArr.map((i) => {
    return i.split(",");
  });
  const sumIndex = table[0]
    .map((i, index) => {
      if (i === C) {
        return index;
      }
    })
    .filter((i) => i !== undefined)[0];
  table.forEach((i, index) => {
    if (index !== 0) {
      elementsArr.push(Number(i[sumIndex]));
    }
  });
  return Math.max(...elementsArr);
}

const str = "id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7";

// console.log(findMax(str, 'age'));
