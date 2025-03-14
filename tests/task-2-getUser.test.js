const { getUser } = require("../src/user");

test("存在するユーザーの情報が取得できる", () => {
  expect(getUser("Alice")).toEqual({ username: "Alice", age: 25 });
});

test("存在しないユーザーの場合はnullを返す", () => {
  expect(getUser("unknown")).toBeNull();
});
