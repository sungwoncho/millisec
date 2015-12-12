var utils = require('./utils');
var pluralize = require('pluralize');

/**
 * @constructor
 * Contains information about the given millisecond and responsible for
 * formatting it to a string
 * @param {Number} ms - millisecond to format
 */
var Time = function (ms) {
  this._ms = ms;

  this.seconds = utils.getSecondsFromMs(ms);
  this.minutes = utils.getMinutesFromMs(ms);
  this.hours = utils.getHoursFromMs(ms);
  this.days = utils.getDaysFromMs(ms);
};

Time.prototype.getSeconds = function () {
  return this.seconds;
};

Time.prototype.getMinutes = function () {
  return this.minutes;
};

Time.prototype.getHours = function () {
  return this.hours;
};

Time.prototype.getDays = function () {
  return this.days;
};

/**
 * Formats the millisecond into a string given a format
 * @param {String} fmt - The desired format for the output
 * @return {String} - The formatted version of the millisecond using `fmt`
 */
Time.prototype.format = function (fmt) {
  return fmt.replace("dd", this.days)
     .replace("hh", this.hours)
     .replace("mm", this.minutes)
     .replace("ss", this.seconds)
     .replace("DD", pluralize('day', this.days, true))
     .replace("HH", pluralize('hour', this.hours, true))
     .replace("MM", pluralize('minute', this.minutes, true))
     .replace("SS", pluralize('second', this.seconds, true));
};

module.exports = Time;
