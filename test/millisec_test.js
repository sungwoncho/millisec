var expect = require('chai').expect;
var millisec = require('../lib/millisec');

// 1 day 2 hours 3 minutes 11.334 seconds
var TEST_INPUT = 93791334;

describe("millisec", function() {
  describe("#format", function() {
    it("can output raw days", function() {
      var output = millisec(TEST_INPUT).format('dd');
      expect(output).to.equal('1');
    });

    it("can output raw hours", function() {
      var output = millisec(TEST_INPUT).format('hh');
      expect(output).to.equal('2');
    });

    it("can output raw minutes", function() {
      var output = millisec(TEST_INPUT).format('mm');
      expect(output).to.equal('3');
    });

    it("can output raw seconds", function() {
      var output = millisec(TEST_INPUT).format('ss');
      expect(output).to.equal('11');
    });

    it("can output singularized days", function() {
      var output = millisec(TEST_INPUT).format('DD');
      expect(output).to.equal('1 day');
    });

    it("can output pluralized days", function() {
      var TWO_DAYS = 172800000;
      var output = millisec(TWO_DAYS).format('DD');
      expect(output).to.equal('2 days');
    });

    it("can output singularized hours", function() {
      var ONE_HOUR = 3600000;
      var output = millisec(ONE_HOUR).format('HH');
      expect(output).to.equal('1 hour');
    });

    it("can output pluralized hours", function() {
      var output = millisec(TEST_INPUT).format('HH');
      expect(output).to.equal('2 hours');
    });

    it("can output singularized minutes", function() {
      var ONE_MINUTE = 60000;
      var output = millisec(ONE_MINUTE).format('MM');
      expect(output).to.equal('1 minute');
    });

    it("can output pluralized minutes", function() {
      var output = millisec(TEST_INPUT).format('MM');
      expect(output).to.equal('3 minutes');
    });

    it("can output singularized seconds", function() {
      var ONE_SECOND = 1000;
      var output = millisec(ONE_SECOND).format('SS');
      expect(output).to.equal('1 second');
    });

    it("can output pluralized seconds", function() {
      var output = millisec(TEST_INPUT).format('SS');
      expect(output).to.equal('11 seconds');
    });

    it("can output the hour equivalent", function() {
      var output = millisec(TEST_INPUT).format('hhh');
      expect(output).to.equal('26');
    });

    it("can output the minute equivalent", function() {
      var output = millisec(TEST_INPUT).format('mmm');
      expect(output).to.equal('1563');
    });

    it("can output the seconds equivalent", function() {
      var output = millisec(TEST_INPUT).format('sss');
      expect(output).to.equal('93791');
    });

    it("can output the hour equivalent with pluralized hours", function() {
      var output = millisec(TEST_INPUT).format('HHH');
      expect(output).to.equal('26 hours');
    });

    it("can output the hour equivalent with singularized hours", function() {
      var ONE_HOUR = 3600000;
      var output = millisec(ONE_HOUR).format('HHH');
      expect(output).to.equal('1 hour');
    });

    it("can output the minute equivalent with pluralized minutes", function() {
      var output = millisec(TEST_INPUT).format('MMM');
      expect(output).to.equal('1563 minutes');
    });

    it("can output the minute equivalent with singularized minutes", function() {
      var ONE_MINUTE = 60000;
      var output = millisec(ONE_MINUTE).format('MMM');
      expect(output).to.equal('1 minute');
    });

    it("can output the second equivalent with pluralized seconds", function() {
      var output = millisec(TEST_INPUT).format('SSS');
      expect(output).to.equal('93791 seconds');
    });

    it("can output the second equivalent with singularized seconds", function() {
      var ONE_SECOND = 1000;
      var output = millisec(ONE_SECOND).format('SSS');
      expect(output).to.equal('1 second');
    });

    it("can output combination of formats", function() {
      var format = 'dd - HH MM SS';
      var output = millisec(TEST_INPUT).format(format);
      expect(output).to.equal('1 - 2 hours 3 minutes 11 seconds');
    });
  });
});
