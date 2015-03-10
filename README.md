# betterer

[![Build Status](https://travis-ci.org/javiercejudo/betterer.svg)](https://travis-ci.org/javiercejudo/betterer)

Proof of concept for tests that read better(er)

## Install

    npm i betterer

## Basic usage

```js
var better = require('./betterer.js').better;
var yourTests = require('./yourTests.js'); // must export a doTheRightThing function

var o_o = describe;

o_o('using your thing', function() { var o_O = yourTests;
  o_o('the right way', better('do the right thing', o_O));
});
```

## See more

- [spec](test/spec.js)
