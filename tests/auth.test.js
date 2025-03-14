const { authenticateUser } = require("../src/auth");

test("正しいユーザー名とパスワードで認証成功", () => {
  expect(authenticateUser("user", "pass")).toBe(true);
});

test("間違ったユーザー名またはパスワードで認証失敗", () => {
  expect(authenticateUser("wrong", "info")).toBe(false);
});
