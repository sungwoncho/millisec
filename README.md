# millisec

[![Build Status](https://travis-ci.org/sungwoncho/millisec.svg?branch=master)](https://travis-ci.org/sungwoncho/millisec)

Turn milliseconds into a human readable and customizable format.

## Installation

    npm install --save millisec

## Usage

```js
var millisec = require('millisec');
var ms = 93791334; // 1 day 2 hours 3 minutes 11.334 seconds

millisec(ms).format('DD - HH - MM - SS');
// => '1 day - 2 hours - 3 minutes - 11 seconds'

millisec(ms).format('hh : mm : ss');
// => '2 : 3 : 11'
```

## Documentation

Require the module and call it with the millisecond you wish to format. It will
return an object that contains the following methods.

### format(output)

Output a human readable string representation of the milliseconds with the
given format.

`output` is a required argument.

* `dd` - raw days (e.g. 1, 2, ...)
* `hh` - raw hours (e.g. 2, 14, ...)
* `mm` - raw minutes (e.g. 3, 30, ...)
* `ss` - raw seconds (e.g. 1, 15, ...)
* `DD` - days followed by a count noun (e.g. 0 days, 1 day, 2 days, ...)
* `HH` - hours followed by a count noun (e.g. 0 hours, 1 hour, 2 hours, ...)
* `MM` - minutes followed by a count noun (e.g. 0 minutes, 1 minute, 2 minutes,
  ...)
* `SS` - seconds followed by a count noun (e.g. 0 seconds, 1 second, 2 seconds,
  ...)

```js
var millisec = require('millisec');
var ms = 93791334; // 1 day 2 hours 3 minutes 11.334 seconds

millisec(ms).format('HH MM SS');
// => '2 hours 3 minutes 11 seconds'
millisec(ms).format('DAY (dd) HOURS (hh) MINUTES (mm)');
// => 'DAY (1) HOURS (2) MINUTES (3)'
```

### getDays

Get the day component of the millisecond. The returned value is `Number`, not
a `String`. Returns `0` if the millisecond is less than one day.

```js
var millisec = require('millisec');
var ms = 93791334; // 1 day 2 hours 3 minutes 11.334 seconds

millisec(ms).getDays();
// => 1
```

### getHours

Get the hour component of the millisecond. The returned value is `Number`, not
a `String`. If the millisecond is less than one hour, returns `0`.

```js
var millisec = require('millisec');
var ms = 93791334; // 1 day 2 hours 3 minutes 11.334 seconds

millisec(ms).getHours();
// => 2
```

### getMinutes

Get the minute component of the millisecond. The returned value is `Number`, not
a `String`. If the millisecond is less than one minute, returns `0`.

```js
var millisec = require('millisec');
var ms = 93791334; // 1 day 2 hours 3 minutes 11.334 seconds

millisec(ms).getMinutes();
// => 3
```

### getSeconds

Get the second component of the millisecond. The returned value is `Number`, not
a `String`. The decimals are ignored.

```js
var millisec = require('millisec');
var ms = 93791334; // 1 day 2 hours 3 minutes 11.334 seconds

millisec(ms).getSeconds();
// => 11
```

## Contributing

Run `npm test` to run tests locally.

## License

MIT
