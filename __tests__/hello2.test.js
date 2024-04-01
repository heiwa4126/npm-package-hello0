const { Hello } = require("../lib/hello2");

test('hello method should return "hello, value"', () => {
  const helloInstance = new Hello("value");
  expect(helloInstance.hello()).toBe("hello, value");
});
