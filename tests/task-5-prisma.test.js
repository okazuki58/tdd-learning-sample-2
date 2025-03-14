const { PrismaClient } = require("@prisma/client");
const { registerUser, getUser } = require("../src/user");

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.user.deleteMany(); //テスト用にDBを初期化
});

afterAll(async () => {
  await prisma.$disconnect();
});

test("Prisma経由で新規ユーザーを登録・取得できる", async () => {
  const result = await registerUser("dbuser", "pass123");
  expect(result).toBe(true);

  const user = await getUser("newuser");
  expect(user).not.toBeNull();
  expect(user.username).toBe("newuser");
});
