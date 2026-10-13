const h1 = require("../src"); // node はこれで../src/index.js を読む
//const h1 = require("@heiwa4126/hello0");

console.log(h1.hello.hello());
// helloメソッド（hello.js内）

const h = new h1.hello2.Hello("test");
console.log(h.hello());
// hello2.Helloクラス（hello2.js内）
