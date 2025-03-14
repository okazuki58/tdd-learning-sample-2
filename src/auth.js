// 認証関数（課題：ここを実装する）
function authenticateUser(username, password) {
  if (username === "user" && password === "pass") return true;
  return false;
}

module.exports = { authenticateUser };
