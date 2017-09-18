!function(e){function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={};n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="build/",n(n.s=0)}([function(e,n,r){"use strict";function t(e){performance.measure(e,"start-"+e,"end-"+e);var n=performance.getEntriesByType("measure").filter(function(n){return n.name===e});return n[n.length-1].duration}var a=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a),d=r(2),u=r(3),i=r(4);d.mainThreadButton.addEventListener("click",function(){performance.mark("start-mainThread"),(0,d.renderLoader)(),setTimeout(function(){(0,o.default)(1e8),performance.mark("end-mainThread"),setTimeout(function(){return(0,d.removeLoader)()}),(0,d.renderResult)({type:"mainThread",duration:t("mainThread")})},100)}),d.mainThreadInlineButton.addEventListener("click",function(){performance.mark("start-mainThreadInline"),(0,d.renderLoader)(),setTimeout(function(){(0,o.default)(1e8),performance.mark("end-mainThreadInline"),setTimeout(function(){return(0,d.removeLoader)()}),(0,d.renderResult)({type:"mainThreadInline",duration:t("mainThreadInline")},100)})}),d.workerButton.addEventListener("click",function(){var e=u();e.onmessage=function(n){performance.mark("end-webpackWorker"),(0,d.removeLoader)(),(0,d.renderResult)({type:"webpackWorker",duration:t("webpackWorker")}),e.terminate()},(0,d.renderLoader)(),performance.mark("start-webpackWorker"),e.postMessage(1e8)}),d.standaloneWorkerButton.addEventListener("click",function(){var e=new Worker(i);e.onmessage=function(n){performance.mark("end-standaloneWorker"),(0,d.removeLoader)(),(0,d.renderResult)({type:"standaloneWorker",duration:t("standaloneWorker")}),e.terminate()},(0,d.renderLoader)(),performance.mark("start-standaloneWorker"),e.postMessage(1e8)})},function(e,n,r){"use strict";function t(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,n=[],r=0;r<e;r++){var t=r*Math.sqrt(n.length);n.length>1e6&&(n.length=2e5),n.push({val:t})}return n}Object.defineProperty(n,"__esModule",{value:!0}),n.default=t},function(e,n,r){"use strict";function t(e){var n=e.type,r=e.duration,t=document.createElement("p");t.textContent="Type: "+n+", Time taken: "+r,m.appendChild(t),t.scrollIntoView()}function a(){if(!document.querySelector(".loader")){var e=document.createElement("loader");e.classList.add("loader"),e.textContent="running computations, be patient...",document.body.appendChild(e)}}function o(){var e=document.querySelector(".loader");e&&e.parentNode.removeChild(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.renderResult=t,n.renderLoader=a,n.removeLoader=o;var d=document.querySelector("input"),u=document.getElementById("mainThread"),i=document.getElementById("mainThreadInline"),c=document.getElementById("webpackWorker"),l=document.getElementById("standaloneWorker"),m=document.getElementById("results");n.mainThreadButton=u,n.mainThreadInlineButton=i,n.workerButton=c,n.standaloneWorkerButton=l,n.input=d},function(e,n,r){"use strict";e.exports=function(){return new Worker(r.p+"6fd5e9faf842a61e9dfa.worker.js")}},function(e,n,r){e.exports=r.p+"a9a76ff1437a292aaa66e5ddf2dfe39b.js"}]);