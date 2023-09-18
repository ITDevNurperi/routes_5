/*! For license information please see 292.843192e4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkrouter=self.webpackChunkrouter||[]).push([[292],{995:function(t,r,e){var n=e(236),o=e(165),i=e(861),a=e(152),u=e(791);function c(t,r){return"SEND"===r.type?{data:null,error:null,status:"pending"}:"SUCCESS"===r.type?{data:r.responseData,error:null,status:"completed"}:"ERROR"===r.type?{data:null,error:r.errorMessage,status:"completed"}:t}r.Z=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=(0,u.useReducer)(c,{status:r?"pending":null,data:null,error:null}),s=(0,a.Z)(e,2),f=s[0],l=s[1],h=(0,u.useCallback)(function(){var r=(0,i.Z)((0,o.Z)().mark((function r(e){var n;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l({type:"SEND"}),r.prev=1,r.next=4,t(e);case 4:n=r.sent,l({type:"SUCCESS",responseData:n}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),l({type:"ERROR",errorMessage:r.t0.message||"Something went wrong!"});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}(),[t]);return(0,n.Z)({sendRequest:h},f)}},853:function(t,r,e){e.d(r,{Ir:function(){return p},KP:function(){return l},Lf:function(){return u},h_:function(){return d},jR:function(){return s}});var n=e(165),o=e(236),i=e(861),a="https://quotesh-8318c-default-rtdb.asia-southeast1.firebasedatabase.app";function u(){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)((0,n.Z)().mark((function t(){var r,e,i,u,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes.json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(e=t.sent,r.ok){t.next=8;break}throw new Error(e.message||"Could not fetch quotes.");case 8:for(u in i=[],e)c=(0,o.Z)({id:u},e[u]),i.push(c);return t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)((0,n.Z)().mark((function t(r){var e,i,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes/").concat(r,".json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(i=t.sent,e.ok){t.next=8;break}throw new Error(i.message||"Could not fetch quote.");case 8:return u=(0,o.Z)({id:r},i),t.abrupt("return",u);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes.json"),{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:if(o=t.sent,e.ok){t.next=8;break}throw new Error(o.message||"Could not create quote.");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/comments/").concat(r.quotedId,".json"),{method:"POST",body:JSON.stringify(r.commentData),headers:{"Content-Type":"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:if(o=t.sent,console.log(e.quotedId,"DIIIIIOOOONNNNNNNAAAAAAAAAAAAAA"),e.ok){t.next=9;break}throw new Error(o.message||"Could not add comment dudududu.");case 9:return t.abrupt("return",{commentId:o.name});case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)((0,n.Z)().mark((function t(r){var e,i,u,c,s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/comments/").concat(r,".json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(i=t.sent,e.ok){t.next=8;break}throw new Error(i.message||"Could not get comments.");case 8:for(c in u=[],i)s=(0,o.Z)({id:c},i[c]),u.push(s);return t.abrupt("return",u);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},861:function(t,r,e){function n(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void e(s)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}e.d(r,{Z:function(){return o}})},236:function(t,r,e){e.d(r,{Z:function(){return a}});var n=e(2);function o(t){var r=function(t,r){if("object"!==(0,n.Z)(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,r||"default");if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===(0,n.Z)(r)?r:String(r)}function i(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){var n,i,a;n=t,i=r,a=e[r],(i=o(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}},165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(2);function o(){o=function(){return r};var t,r={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof b?r:b,i=Object.create(o.prototype),u=new _(n||[]);return a(i,"_invoke",{value:L(t,e,u)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",d="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function x(){}var O={};l(O,c,(function(){return this}));var j=Object.getPrototypeOf,E=j&&j(j(C([])));E&&E!==e&&i.call(E,c)&&(O=E);var S=x.prototype=b.prototype=Object.create(O);function Z(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,a,u,c){var s=p(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==(0,n.Z)(l)&&i.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,u,c)}),(function(t){e("throw",t,u,c)})):r.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return e("throw",t,u,c)}))}c(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function L(r,e,n){var o=y;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=P(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?m:d,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,P(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function A(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function C(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError((0,n.Z)(r)+" is not iterable")}return w.prototype=x,a(S,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=l(x,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,f,"GeneratorFunction")),t.prototype=Object.create(S),t},r.awrap=function(t){return{__await:t}},Z(k.prototype),l(k.prototype,s,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(S),l(S,f,"Generator"),l(S,c,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=C,_.prototype={constructor:_,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return u.type="throw",u.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:C(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}},152:function(t,r,e){function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,r)||function(t,r){if(t){if("string"===typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(r,{Z:function(){return o}})},2:function(t,r,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}e.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=292.843192e4.chunk.js.map