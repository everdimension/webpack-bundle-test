!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="build/",t(t.s=0)}([function(e,t,n){"use strict";var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);self.onmessage=function(e){console.log("Will run "+e.data+" iterations in a webpack-bundled worker");var t=(0,o.default)(e.data);console.log("webpack worker done"),postMessage(t)}},function(e,t,n){"use strict";function r(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,t=[],n=0;n<e;n++){var r=n*Math.sqrt(t.length);t.length>1e6&&(t.length=2e5),t.push({val:r})}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}]);