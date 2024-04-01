// lib/hello2.js
class Hello {
  constructor(v) {
    this.value = v;
  }
  hello() {
    return "hello, " + this.value;
  }
}
module.exports = { Hello };
