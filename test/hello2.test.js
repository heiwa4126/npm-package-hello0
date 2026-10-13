const assert = require("node:assert/strict");
const { test } = require("node:test");
const { Hello } = require("../src/hello2");

test('hello method should return "hello, value"', () => {
	const helloInstance = new Hello("value");
	assert.equal(helloInstance.hello(), "hello, value");
});
