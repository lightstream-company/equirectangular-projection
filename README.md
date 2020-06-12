# equirectangular-projection

project coordinates into pixel for equirectagular map

## Install

```
  npm install equirectangular-projection
```

## API

```js
//@arguments (Lng <Number>, Lat <Number>, viewPortWidth <Number>
//@return {top: <Number>, left: <Number>}

var project = require('equirectangular-projection').project;
var position = project(145.5664, 30.345, 300);

console.log(position);
// => { top: 135.65266666666668, left: 200.575 }
```
