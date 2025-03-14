const { registerUser, getUser } = require("../src/user");

test("新規ユーザーの登録に成功する", () => {
  expect(registerUser("newuser", "password123")).toBe(true);
  expect(getUser("newuser")).not.toBeNull();
});

test("既存ユーザー名は登録に失敗する", () => {
  registerUser("existinguser", "password123");
  expect(registerUser("newuser", "password123")).toBe(false);
});
