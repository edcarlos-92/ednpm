# @edcartech/ednpm

<a href="https://github.com/edcarlos-92/ednpm"><img alt="Package" src="https://img.shields.io/badge/npm-v1.0.0-blue"></a>
</br>
<a href="https://github.com/edcarlos-92/ednpm"><img alt="Description" src="https://img.shields.io/badge/minified%20version-254B-blue"></a>
</br>

React Private Project Library

# @edcartech/ednpm

[![npm (scoped)](https://img.shields.io/npm/v/@edcartech/ednpm.svg)](https://www.npmjs.com/package/@edcartech/ednpm)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@edcartech/ednpm.svg)](https://www.npmjs.com/package/@edcartech/ednpm)

Removes all spaces from a string.

## Install

```
$ npm install @edcartech/ednpm
```

## Usage

```js
const ednpm = require('@edcartech/ednpm');

ednpm('So much space!');
//=> "Somuchspace!"

ednpm(1337);
//=> Uncaught TypeError: ednpm wants a string!
//    at ednpm (<anonymous>:2:41)
//    at <anonymous>:1:1
```
