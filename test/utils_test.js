var expect = require('chai').expect;
var utils = require('../lib/utils');

// 1 day 2 hours 3 minutes 11.334 seconds
var TEST_INPUT = 93791334;

describe("utils", function() {
  describe("#getSecondsFromMs", function() {
    it("gets seconds part from milliseconds", function() {
      var seconds = utils.getSecondsFromMs(TEST_INPUT);
      expect(seconds).to.equal(11);
    });

    it("returns 0 for an exact minute", function() {
      var ONE_MINUTE = 60000;
      expect(utils.getSecondsFromMs(ONE_MINUTE)).to.equal(0);
    });
  });

  describe("#getMinutesFromMs", function() {
    it("gets minutes part from milliseconds", function() {
      var minutes = utils.getMinutesFromMs(TEST_INPUT);
      expect(minutes).to.equal(3);
    });

    it("returns 0 for an exact hour", function() {
      var TWO_HOURS = 7200000;
      var minutes = utils.getMinutesFromMs(TWO_HOURS);
      expect(minutes).to.equal(0);
    });
  });

  describe("#getHoursFromMs", function() {
    it("gets hours part from milliseconds", function() {
      var hours = utils.getHoursFromMs(TEST_INPUT);
      expect(hours).to.equal(2);
    });

    it("returns 0 for an exact day", function() {
      var TWO_DAYS = 172800000;
      var days = utils.getHoursFromMs(TWO_DAYS);
      expect(days).to.equal(0);
    });
  });

  describe("#getDaysFromMs", function() {
    it("gets days part from milliseconds", function() {
      var days = utils.getDaysFromMs(TEST_INPUT);
      expect(days).to.equal(1);
    });
  });
});
