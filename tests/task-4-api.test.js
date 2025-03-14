const { fetchWeatherData } = require("../src/api");
const axios = require("axios");

jest.mock("axios");

test("外部APIからデータを取得できる", async () => {
  const mockData = { data: { weather: "晴れ", temp: 25 } };
  axios.get.mockResolvedValue(mockData);

  const result = await fetchWeatherData();
  expect(result).toEqual(mockData.data);
  expect(axios.get).toHaveBeenCalledTimes(1);
});
