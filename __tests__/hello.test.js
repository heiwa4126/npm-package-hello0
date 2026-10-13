const assert = require("node:assert/strict");
const { test } = require("node:test");
const { hello } = require("../lib/hello");

test('hello function should return "hello"', () => {
	assert.equal(hello(), "hello");
});
