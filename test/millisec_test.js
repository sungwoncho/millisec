var expect = require('chai').expect;
var millisec = require('../lib/millisec');

// 1 day 2 hours 3 minutes 11.334 seconds
var TEST_INPUT = 93791334;

describe("millisec", function() {
  describe("#format", function() {
    it("can ouput days", function() {
      var output = millisec(TEST_INPUT).format('DD');
      expect(output).to.equal('1');
    });

    it("can output hours", function() {
      var output = millisec(TEST_INPUT).format('HH');
      expect(output).to.equal('2');
    });

    it("can output minutes", function() {
      var output = millisec(TEST_INPUT).format('MM');
      expect(output).to.equal('3');
    });

    it("can output seconds", function() {
      var output = millisec(TEST_INPUT).format('SS');
      expect(output).to.equal('11');
    });

    it("can output combination of formats", function() {
      var format = 'DD day - HH hours MM minutes and SS seconds';
      var output = millisec(TEST_INPUT).format(format);
      expect(output).to.equal('1 day - 2 hours 3 minutes and 11 seconds');
    });
  });
});
