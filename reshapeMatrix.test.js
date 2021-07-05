const reshape = require("./reshapeMatrix");

test("Reshape case 1", () => {
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

test("Reshape case 2", () => {
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

test("Reshape case 3", () => {
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
