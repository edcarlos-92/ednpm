# @edcartech/ednpm

[![npm (scoped)](https://img.shields.io/npm/v/@edcartech/ednpm.svg)](https://www.npmjs.com/package/@edcartech/ednpm)
[![npm bundle size (minified)](https://img.shields.io/badge/minified%20version-254B-blue)](https://www.npmjs.com/package/@edcartech/ednpm)

React Private Project Library
Removes all spaces from a string.

## Install

```
$ npm install @edcartech/ednpm
```

## Usage

```js
//Cloding the Space of a string
const closeStringSpace = require('@edcartech/ednpm');

closeStringSpace('So much space!');
//=> "Somuchspace!"

closeStringSpace(1337);
//=> Uncaught TypeError: closeStringSpace wants a string!
//    at closeStringSpace (<anonymous>:2:41)
//    at <anonymous>:1:1
```
