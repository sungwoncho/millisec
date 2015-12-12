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

module.exports = utils;
