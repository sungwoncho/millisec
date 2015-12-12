var utils = {};

/**
 * Gets the seconds part from the millisecond
 * e.g. Returns 0 for one minute. Returns 1 for one minute and one second.
 * @param {Number} ms - millisecond
 * @return {Number}
 */
utils.getSecondsFromMs = function (ms) {
  return parseInt((ms/1000) % 60);
};

/**
 * Gets the minutes part from the millisecond
 * @param {Number} ms - millisecond
 * @return {Number}
 */
utils.getMinutesFromMs = function (ms) {
  return parseInt((ms/(1000*60) % 60));
};

/**
 * Gets the hours part from the millisecond
 * @param {Number} ms - millisecond
 * @return {Number}
 */
utils.getHoursFromMs = function (ms) {
  return parseInt(ms/(1000*60*60) % 24);
};

/**
 * Gets the days part from the millisecond
 * @param {Number} ms - millisecond
 * @return {Number}
 */
utils.getDaysFromMs = function (ms) {
  return parseInt(ms/(1000*60*60*24));
};

/**
 * Turns milliseconds into seconds
 * @param {Number} ms - millisecond
 * @return {Number}
 */
utils.turnMsToSeconds = function (ms) {
  return parseInt(ms/1000);
};

/**
 * Turns milliseconds into minutes
 * @param {Number} ms - millisecond
 * @return {Number}
 */
utils.turnMsToMinutes = function (ms) {
  return parseInt(ms/(1000 * 60));
};

/**
 * Turns milliseconds into hours
 * @param {Number} ms - millisecond
 * @return {Number}
 */
utils.turnMsToHours = function (ms) {
  return parseInt(ms/(1000 * 60 * 60));
};

/**
 * Turns milliseconds into days
 * @param {Number} ms - millisecond
 * @return {Number}
 */
utils.turnMsToDays = function (ms) {
  return parseInt(ms/(1000 * 60 * 60 * 24));
};

module.exports = utils;
