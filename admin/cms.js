!function(t){var n={};function e(o){if(n[o])return n[o].exports;var u=n[o]={i:o,l:!1,exports:{}};return t[o].call(u.exports,u,u.exports,e),u.l=!0,u.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)e.d(o,u,function(n){return t[n]}.bind(null,u));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,n,e){e(2),t.exports=e(4)},function(t,n,e){"use strict";var o=e(0),u=o(e(3)),r=o(e(6));window.___emitter=r.default,window.___loader={enqueue:function(){},hovering:function(){}},u.default.init(),u.default.registerPreviewStyle("cms.css")},function(t,n){t.exports=NetlifyCmsApp},function(t,n,e){"use strict";var o=e(0)(e(5));window.netlifyIdentity=o.default;var u=function(){return o.default.on("login",(function(){document.location.href="/blog/admin/"}))};o.default.on("init",(function(t){t?o.default.on("logout",(function(){u()})):u()})),o.default.init()},function(t,n){t.exports=netlifyIdentity},function(t,n,e){"use strict";e.r(n);const o=function(t){return t=t||Object.create(null),{on:function(n,e){(t[n]||(t[n]=[])).push(e)},off:function(n,e){t[n]&&t[n].splice(t[n].indexOf(e)>>>0,1)},emit:function(n,e){(t[n]||[]).slice().map((function(t){t(e)})),(t["*"]||[]).slice().map((function(t){t(n,e)}))}}}();n.default=o}]);
//# sourceMappingURL=cms.js.map