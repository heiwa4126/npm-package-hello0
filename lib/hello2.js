/**
 * Represents a Hello object.
 */
class Hello {
  /**
   * Represents a Hello2 object.
   * @constructor
   * @param {any} v - The value for the Hello2 object.
   */
  constructor(v) {
    this.value = v;
  }

  /**
   * Returns a greeting message.
   * @returns {string} The greeting message.
   */
  hello() {
    return "hello, " + this.value;
  }
}
module.exports = { Hello };
