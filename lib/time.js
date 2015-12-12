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

  this._days = utils.getDaysFromMs(ms);
  this._hours = utils.getHoursFromMs(ms);
  this._minutes = utils.getMinutesFromMs(ms);
  this._seconds = utils.getSecondsFromMs(ms);

  this._hoursEquivalent = utils.turnMsToHours(ms);
  this._minutesEquivalent = utils.turnMsToMinutes(ms);
  this._secondsEquivalent = utils.turnMsToSeconds(ms);
};

Time.prototype.getSeconds = function () {
  return this._seconds;
};

Time.prototype.getMinutes = function () {
  return this._minutes;
};

Time.prototype.getHours = function () {
  return this._hours;
};

Time.prototype.getDays = function () {
  return this._days;
};

/**
 * Formats the millisecond into a string given a format
 * @param {String} fmt - The desired format for the output
 * @return {String} - The formatted version of the millisecond using `fmt`
 */
Time.prototype.format = function (fmt) {
  return fmt
    .replace('hhh', this._hoursEquivalent)
    .replace('mmm', this._minutesEquivalent)
    .replace('sss', this._secondsEquivalent)

    .replace('HHH', pluralize('hour', this._hoursEquivalent, true))
    .replace('MMM', pluralize('minute', this._minutesEquivalent, true))
    .replace('SSS', pluralize('second', this._secondsEquivalent, true))

    .replace('dd', this._days)
    .replace('hh', this._hours)
    .replace('mm', this._minutes)
    .replace('ss', this._seconds)

    .replace('DD', pluralize('day', this._days, true))
    .replace('HH', pluralize('hour', this._hours, true))
    .replace('MM', pluralize('minute', this._minutes, true))
    .replace('SS', pluralize('second', this._seconds, true));
};

module.exports = Time;
