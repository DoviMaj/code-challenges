const reshape = require("./reshapeMatrix");

test("Case 1", () => {
  expect(
    reshape(
      [
        [1, 2],
        [3, 4],
      ],
      1,
      4
    )
  ).toStrictEqual([[1, 2, 3, 4]]);
});

test("Case 2", () => {
  expect(
    reshape(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      2,
      2
    )
  ).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
  ]);
});

test("Case 3", () => {
  expect(
    reshape(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      3,
      2
    )
  ).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});
