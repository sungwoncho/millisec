var Time = require('./time');

/**
 * Initializes a new instance of Time
 * @param {Number} ms - millisecond to be formatted
 * @return {Object} time
 */
module.exports = function (ms) {
  return new Time(ms);
};
