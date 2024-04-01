const { hello } = require("../lib/hello");

test('hello function should return "hello"', () => {
  expect(hello()).toBe("hello");
});
