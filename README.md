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

* `dd` - raw days (e.g. 0, 1, 2, ...)
* `hh` - raw hours with a maximum value `23`. (e.g. 0, 1, 2, ..., 23)
* `mm` - raw minutes with a maximum value `59`. (e.g. 0, 1, 2, ..., 59)
* `ss` - raw seconds with maximum value `59`. (e.g. 0, 1, 2, ..., 59)

* `DD` - days followed by a count noun (e.g. 0 days, 1 day, 2 days, ...)
* `HH` - hours followed by a count noun. The maximum value is `23`.
 (e.g. 0 hours, 1 hour, 2 hours, ...,  23 hours)
* `MM` - minutes followed by a count noun. The maximum value is `59`.
 (e.g. 0 minutes, 1 minute, 2 minutes, ..., 59 minutes)
* `SS` - seconds followed by a count noun. The maximum value is `59`.
(e.g. 0 seconds, 1 second, 2 seconds, ..., 59 seconds)

* `hhh` - the hours equivalent of the millisecond
(e.g. 0, 1, 2, 24, ..., 48, ...)
* `mmm` - the minutes equivalent of the millisecond (e.g. 0, 1, 2, ...,
   100, ...)
* `sss` - the seconds equivalent of the millisecond (e.g. 0, 1, 2, ...,
  3500, ...)

* `HHH` - the hours equivalent of the millisecond, followed by a count noun
(e.g. 0 hours, 1 hour, 2 hours, ...,  24 hours, ..., 48 hours)
* `MMM` - the minutes equivalent of the millisecond, followed by a count noun
 (e.g. 0 minutes, 1 minute, 2 minutes, ..., 100 minutes)
* `SSS` - the seconds equivalent of the millisecond, followed by a count noun
(e.g. 0 seconds, 1 second, 2 seconds, ..., 3500 seconds)

```js
var millisec = require('millisec');
var ms = 93791334; // 1 day 2 hours 3 minutes 11.334 seconds

millisec(ms).format('HH MM SS');
// => '2 hours 3 minutes 11 seconds'
millisec(ms).format('DAY (dd) HOURS (hh) MINUTES (mm)');
// => 'DAY (1) HOURS (2) MINUTES (3)'
millisec(ms).format('MMM');
// => '1563 minutes'
millisec(ms).format('Seconds left: sss');
// => 'Seconds left: 93791'
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
