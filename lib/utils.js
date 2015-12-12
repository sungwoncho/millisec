var utils = {};

utils.getSecondsFromMs = function (ms) {
  return parseInt((ms/1000) % 60);
};

utils.getMinutesFromMs = function (ms) {
  return parseInt((ms/(1000*60) % 60));
};

utils.getHoursFromMs = function (ms) {
  return parseInt(ms/(1000*60*60) % 24);
};

utils.getDaysFromMs = function (ms) {
  return parseInt(ms/(1000*60*60*24));
};

module.exports = utils;
