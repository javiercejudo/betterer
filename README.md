# betterer

[![Build Status](https://travis-ci.org/javiercejudo/betterer.svg)](https://travis-ci.org/javiercejudo/betterer)

Proof of concept for tests that read better(er)

## Install

    npm i betterer

## Basic usage

```js
var better = require('./betterer.js').better;

// must export a doTheRightThing function, typically with at least one `it`
var yourTests = require('./yourTests.js');

var o_o = describe;

o_o('using your thing', function() { var o_O = yourTests;
  o_o('the right way', better('do the right thing', o_O));
});
```

The string 'do the right thing' is mapped to the `doTheRightThing`
function exported by `yourTests.js`.

## See more

- [spec](test/spec.js)
