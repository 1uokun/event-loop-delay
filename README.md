# event-loop-delay

[![npm version](https://img.shields.io/npm/v/@react-sextant/event-loop-delay.svg)](https://www.npmjs.com/package/@react-sextant/event-loop-delay)
[![Downloads/month](https://img.shields.io/npm/dm/@react-sextant/event-loop-delay.svg)](http://www.npmtrends.com/@react-sextant/event-loop-delay)
[![Build Status](https://travis-ci.org/1uokun/event-loop-delay.svg?branch=master)](https://travis-ci.org/1uokun/event-loop-delay)
[![Coverage Status](https://codecov.io/gh/1uokun/event-loop-delay/branch/master/graph/badge.svg)](https://codecov.io/gh/1uokun/event-loop-delay)
[![Dependency Status](https://david-dm.org/1uokun/event-loop-delay.svg)](https://david-dm.org/1uokun/event-loop-delay)


Call at constant intervals in event-loop

## 💿 Installation

Use [npm](https://www.npmjs.com/) to install then use a bundler.

```
npm install @react-sextant/event-loop-delay
```

Or download from [`dist` directory](./dist).

- [dist/event-loop-delay.mjs](dist/event-loop-delay.mjs) ... ES modules version.
- [dist/event-loop-delay.js](dist/event-loop-delay.js) ... Common JS version.
- [dist/event-loop-delay.umd.js](dist/event-loop-delay.umd.js) ... UMD (Universal Module Definition) version. This is transpiled by [Babel](https://babeljs.io/) for IE 11.


# 📖 Usage

```javascript 1.5
import {Delay} from '@react-sextant/event-loop-delay'

let delay = new Delay(500); // Call at interval 500ms

delay(function(){
  //...
})
```

# 🔧 Contribution

before `npm run build` need `npm run regenerator` to make a `Delay-es5.js` for UMD version
