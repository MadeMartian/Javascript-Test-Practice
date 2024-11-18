const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {

      // Setup
      const expected = 'cock-a-doodle-doo!';
      // Excercise
      const actual = Rooster.announceDawn();
      // Verify
      assert.equal(expected, actual);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // Setup
      const inputNumber = 13
      const expected = '13'
      // Excercise
      const actual = Rooster.timeAtDawn(inputNumber);
      // Verify
      assert.strictEqual(expected, actual)
    })
    it ('throws an error if passed a number less than 0', () => {

      // Setup
      const inputNumber = -2;
      const expected = RangeError;
      // Verify
      assert.throws( () => {
        Rooster.timeAtDawn(inputNumber)
      }, expected)
    });
    it('throws an error if passed a number greater than 23', () => {

      // Setup
      const inputNumber = 26
      const expected = RangeError

      // Verify
      assert.throws( () => {
        Rooster.timeAtDawn(inputNumber)
      }, expected)
    })

  })
});


