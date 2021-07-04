function caclBalance(A, D) {
  let transactions = [];
  let income = 0;
  D.forEach((i, index) => {
    transactions.push({ month: `${i[5]}${i[6]}` });
  });
  A.forEach((i, index) => {
    transactions[index].amount = i;
    income += i;
  });

  // count transactions per month
  let monthsWithFeePayed = 12;
  for (let i = 0; i <= 12; i++) {
    let amount = 0;
    transactions.forEach((j) => {
      if (j.amount > 0) {
        return;
      }
      if (i == Number(j.month)) {
        amount = amount + j.amount;
      }
      if (amount <= -100) {
        monthsWithFeePayed = monthsWithFeePayed - 1;
      }
    });
  }
  console.log(5 * monthsWithFeePayed - income);
  return income - 5 * monthsWithFeePayed;
}

// let A = [100, 100, -10, -20, -30];
// let D = ['2020−01−01', '2020−02−01', '2020−02−11', '2020−02−05', '2020−02−08'];
// the function should return 80.

// let A = [100, 100, 100];
// let D = ['2020−12−31', '2020−12−22', '2020−12−03'];
//the function should return 240. Total income was equal to 100 + 100 + 100 = 300 and the fee was paid every month, so 300 - (5 * 12) = 240.

// caclBalance(
//   [1, -1, 0, -105, 1],
//   ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12']
// );
// WRONG ANSWER (got -159 expected -164)
// console.log(caclBalance(A, D));
