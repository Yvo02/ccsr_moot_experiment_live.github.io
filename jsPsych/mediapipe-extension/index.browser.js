var jsPsychExtensionMediapipeFacemesh = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	(function(){/*

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	var v;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
	function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof commonjsGlobal&&commonjsGlobal];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var G=ca(this);function J(a,b){if(b)a:{var c=G;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e];}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b});}}
	J("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+e++,g)}function c(g,f){this.g=g;ba(this,"description",{configurable:!0,writable:!0,value:f});}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
	J("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=G[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}});}return a});function da(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
	function K(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function L(a){if(!(a instanceof Array)){a=K(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c;}return a}var ea="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},fa;
	if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else {var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1;}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;}var ka=fa;
	function M(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d);}else a[c]=b[c];a.ea=b.prototype;}function ma(){this.l=!1;this.i=null;this.h=void 0;this.g=1;this.s=this.m=0;this.j=null;}function na(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0;}ma.prototype.o=function(a){this.h=a;};
	function oa(a,b){a.j={U:b,V:!0};a.g=a.m||a.s;}ma.prototype.return=function(a){this.j={return:a};this.g=this.s;};function N(a,b,c){a.g=c;return {value:b}}function pa(a){this.g=new ma;this.h=a;}function qa(a,b){na(a.g);var c=a.g.i;if(c)return ra(a,"return"in c?c["return"]:function(d){return {value:d,done:!0}},b,a.g.return);a.g.return(b);return sa(a)}
	function ra(a,b,c,d){try{var e=b.call(a.g.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.l=!1,e;var g=e.value;}catch(f){return a.g.i=null,oa(a.g,f),sa(a)}a.g.i=null;d.call(a.g,g);return sa(a)}function sa(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.l=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,oa(a.g,c);}a.g.l=!1;if(a.g.j){b=a.g.j;a.g.j=null;if(b.V)throw b.U;return {value:b.return,done:!0}}return {value:void 0,done:!0}}
	function ta(a){this.next=function(b){na(a.g);a.g.i?b=ra(a,a.g.i.next,b,a.g.o):(a.g.o(b),b=sa(a));return b};this.throw=function(b){na(a.g);a.g.i?b=ra(a,a.g.i["throw"],b,a.g.o):(oa(a.g,b),b=sa(a));return b};this.return=function(b){return qa(a,b)};this[Symbol.iterator]=function(){return this};}function O(a,b){b=new ta(new pa(b));ka&&a.prototype&&ka(b,a.prototype);return b}
	function ua(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var g=c++;return {value:b(g,a[g]),done:!1}}d=!0;return {done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}var va="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e]);}return a};J("Object.assign",function(a){return a||va});
	J("Promise",function(a){function b(f){this.h=0;this.i=void 0;this.g=[];this.o=!1;var h=this.j();try{f(h.resolve,h.reject);}catch(k){h.reject(k);}}function c(){this.g=null;}function d(f){return f instanceof b?f:new b(function(h){h(f);})}if(a)return a;c.prototype.h=function(f){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l();});}this.g.push(f);};var e=G.setTimeout;c.prototype.i=function(f){e(f,0);};c.prototype.l=function(){for(;this.g&&this.g.length;){var f=this.g;this.g=[];for(var h=0;h<f.length;++h){var k=
	f[h];f[h]=null;try{k();}catch(l){this.j(l);}}}this.g=null;};c.prototype.j=function(f){this.i(function(){throw f;});};b.prototype.j=function(){function f(l){return function(n){k||(k=!0,l.call(h,n));}}var h=this,k=!1;return {resolve:f(this.C),reject:f(this.l)}};b.prototype.C=function(f){if(f===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.F(f);else {a:switch(typeof f){case "object":var h=null!=f;break a;case "function":h=!0;break a;default:h=!1;}h?this.u(f):this.m(f);}};
	b.prototype.u=function(f){var h=void 0;try{h=f.then;}catch(k){this.l(k);return}"function"==typeof h?this.G(h,f):this.m(f);};b.prototype.l=function(f){this.s(2,f);};b.prototype.m=function(f){this.s(1,f);};b.prototype.s=function(f,h){if(0!=this.h)throw Error("Cannot settle("+f+", "+h+"): Promise already settled in state"+this.h);this.h=f;this.i=h;2===this.h&&this.D();this.A();};b.prototype.D=function(){var f=this;e(function(){if(f.B()){var h=G.console;"undefined"!==typeof h&&h.error(f.i);}},1);};b.prototype.B=
	function(){if(this.o)return !1;var f=G.CustomEvent,h=G.Event,k=G.dispatchEvent;if("undefined"===typeof k)return !0;"function"===typeof f?f=new f("unhandledrejection",{cancelable:!0}):"function"===typeof h?f=new h("unhandledrejection",{cancelable:!0}):(f=G.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.i;return k(f)};b.prototype.A=function(){if(null!=this.g){for(var f=0;f<this.g.length;++f)g.h(this.g[f]);this.g=null;}};var g=new c;b.prototype.F=
	function(f){var h=this.j();f.J(h.resolve,h.reject);};b.prototype.G=function(f,h){var k=this.j();try{f.call(h,k.resolve,k.reject);}catch(l){k.reject(l);}};b.prototype.then=function(f,h){function k(w,r){return "function"==typeof w?function(y){try{l(w(y));}catch(m){n(m);}}:r}var l,n,u=new b(function(w,r){l=w;n=r;});this.J(k(f,l),k(h,n));return u};b.prototype.catch=function(f){return this.then(void 0,f)};b.prototype.J=function(f,h){function k(){switch(l.h){case 1:f(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+
	l.h);}}var l=this;null==this.g?g.h(k):this.g.push(k);this.o=!0;};b.resolve=d;b.reject=function(f){return new b(function(h,k){k(f);})};b.race=function(f){return new b(function(h,k){for(var l=K(f),n=l.next();!n.done;n=l.next())d(n.value).J(h,k);})};b.all=function(f){var h=K(f),k=h.next();return k.done?d([]):new b(function(l,n){function u(y){return function(m){w[y]=m;r--;0==r&&l(w);}}var w=[],r=0;do w.push(void 0),r++,d(k.value).J(u(w.length-1),n),k=h.next();while(!k.done)})};return b});
	J("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});J("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var g=d[c];if(g===b||Object.is(g,b))return !0}return !1}});
	J("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return -1!==this.indexOf(b,c||0)}});J("Array.prototype.keys",function(a){return a?a:function(){return ua(this,function(b){return b})}});var wa=this||self;
	function P(a,b){a=a.split(".");var c=wa;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b;}function xa(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}var ya,za="undefined"!==typeof TextDecoder,Aa,Ba="undefined"!==typeof TextEncoder;
	function Ca(a){if(Ba)a=(Aa||(Aa=new TextEncoder)).encode(a);else {var b=void 0;b=void 0===b?!1:b;for(var c=0,d=new Uint8Array(3*a.length),e=0;e<a.length;e++){var g=a.charCodeAt(e);if(128>g)d[c++]=g;else {if(2048>g)d[c++]=g>>6|192;else {if(55296<=g&&57343>=g){if(56319>=g&&e<a.length){var f=a.charCodeAt(++e);if(56320<=f&&57343>=f){g=1024*(g-55296)+f-56320+65536;d[c++]=g>>18|240;d[c++]=g>>12&63|128;d[c++]=g>>6&63|128;d[c++]=g&63|128;continue}else e--;}if(b)throw Error("Found an unpaired surrogate");g=65533;}d[c++]=
	g>>12|224;d[c++]=g>>6&63|128;}d[c++]=g&63|128;}}a=d.subarray(0,c);}return a}var Da={},Ea=null;function Fa(a,b){void 0===b&&(b=0);Ga();b=Da[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,g=0;e<a.length-2;e+=3){var f=a[e],h=a[e+1],k=a[e+2],l=b[f>>2];f=b[(f&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[g++]=l+f+h+k;}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[g]=b[a>>2]+b[(a&3)<<4|l>>4]+k+d;}return c.join("")}
	function Ha(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ia(a,function(g){d[e++]=g;});return d.subarray(0,e)}
	function Ia(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Ea[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}Ga();for(var d=0;;){var e=c(-1),g=c(0),f=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|g>>4);64!=f&&(b(g<<4&240|f>>2),64!=h&&b(f<<6&192|h));}}
	function Ga(){if(!Ea){Ea={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Da[c]=d;for(var e=0;e<d.length;e++){var g=d[e];void 0===Ea[g]&&(Ea[g]=e);}}}}var Ja="function"===typeof Uint8Array.prototype.slice,Ka;function La(a,b,c){return b===c?Ka||(Ka=new Uint8Array(0)):Ja?a.slice(b,c):new Uint8Array(a.subarray(b,c))}var Q=0,R=0;function Ma(a,b){b=void 0===b?{}:b;b=void 0===b.v?!1:b.v;this.h=null;this.g=this.j=this.l=0;this.m=!1;this.v=b;a&&Na(this,a);}function Na(a,b){b=b.constructor===Uint8Array?b:b.constructor===ArrayBuffer?new Uint8Array(b):b.constructor===Array?new Uint8Array(b):b.constructor===String?Ha(b):b instanceof Uint8Array?new Uint8Array(b.buffer,b.byteOffset,b.byteLength):new Uint8Array(0);a.h=b;a.l=0;a.j=a.h.length;a.g=a.l;}Ma.prototype.reset=function(){this.g=this.l;};
	function Oa(a){for(var b=128,c=0,d=0,e=0;4>e&&128<=b;e++)b=a.h[a.g++],c|=(b&127)<<7*e;128<=b&&(b=a.h[a.g++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(e=0;5>e&&128<=b;e++)b=a.h[a.g++],d|=(b&127)<<7*e+3;if(128>b){a=c>>>0;b=d>>>0;if(d=b&2147483648)a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0);a=4294967296*b+(a>>>0);return d?-a:a}a.m=!0;}
	Ma.prototype.i=function(){var a=this.h,b=a[this.g],c=b&127;if(128>b)return this.g+=1,c;b=a[this.g+1];c|=(b&127)<<7;if(128>b)return this.g+=2,c;b=a[this.g+2];c|=(b&127)<<14;if(128>b)return this.g+=3,c;b=a[this.g+3];c|=(b&127)<<21;if(128>b)return this.g+=4,c;b=a[this.g+4];c|=(b&15)<<28;if(128>b)return this.g+=5,c>>>0;this.g+=5;128<=a[this.g++]&&128<=a[this.g++]&&128<=a[this.g++]&&128<=a[this.g++]&&this.g++;return c};
	Ma.prototype.o=function(){var a=this.h[this.g],b=this.h[this.g+1];var c=this.h[this.g+2];var d=this.h[this.g+3];this.g+=4;c=(a<<0|b<<8|c<<16|d<<24)>>>0;a=2*(c>>31)+1;b=c>>>23&255;c&=8388607;return 255==b?c?NaN:Infinity*a:0==b?a*Math.pow(2,-149)*c:a*Math.pow(2,b-150)*(c+Math.pow(2,23))};var Pa=[];function Qa(){this.g=new Uint8Array(64);this.h=0;}Qa.prototype.push=function(a){if(!(this.h+1<this.g.length)){var b=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length));this.g.set(b);}this.g[this.h++]=a;};Qa.prototype.length=function(){return this.h};Qa.prototype.end=function(){var a=this.g,b=this.h;this.h=0;return La(a,0,b)};function Ra(a,b){for(;127<b;)a.push(b&127|128),b>>>=7;a.push(b);}function Sa(a){var b={},c=void 0===b.N?!1:b.N;this.o={v:void 0===b.v?!1:b.v};this.N=c;b=this.o;Pa.length?(c=Pa.pop(),b&&(c.v=b.v),a&&Na(c,a),a=c):a=new Ma(a,b);this.g=a;this.m=this.g.g;this.h=this.i=this.l=-1;this.j=!1;}Sa.prototype.reset=function(){this.g.reset();this.h=this.l=-1;};function S(a){var b=a.g;(b=b.g==b.j)||(b=a.j)||(b=a.g,b=b.m||0>b.g||b.g>b.j);if(b)return !1;a.m=a.g.g;b=a.g.i();var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.j=!0,!1;a.i=b;a.l=b>>>3;a.h=c;return !0}
	function Ta(a){switch(a.h){case 0:if(0!=a.h)Ta(a);else {for(a=a.g;a.h[a.g]&128;)a.g++;a.g++;}break;case 1:1!=a.h?Ta(a):(a=a.g,a.g+=8);break;case 2:if(2!=a.h)Ta(a);else {var b=a.g.i();a=a.g;a.g+=b;}break;case 5:5!=a.h?Ta(a):(a=a.g,a.g+=4);break;case 3:b=a.l;do{if(!S(a)){a.j=!0;break}if(4==a.h){a.l!=b&&(a.j=!0);break}Ta(a);}while(1);break;default:a.j=!0;}}
	function Ua(a,b,c){var d=a.g.j,e=a.g.i(),g=a.g.g+e;a.g.j=g;c(b,a);c=g-a.g.g;if(0!==c)throw Error("Message parsing ended unexpectedly. Expected to read "+e+" bytes, instead read "+(e-c)+" bytes, either the data ended unexpectedly or the message misreported its own length");a.g.g=g;a.g.j=d;return b}function T(a){return a.g.o()}
	function Va(a){var b=a.g.i();a=a.g;var c=a.g;a.g+=b;a=a.h;var d;if(za)(d=ya)||(d=ya=new TextDecoder("utf-8",{fatal:!1})),d=d.decode(a.subarray(c,c+b));else {b=c+b;for(var e=[],g=null,f,h,k;c<b;)f=a[c++],128>f?e.push(f):224>f?c>=b?e.push(65533):(h=a[c++],194>f||128!==(h&192)?(c--,e.push(65533)):e.push((f&31)<<6|h&63)):240>f?c>=b-1?e.push(65533):(h=a[c++],128!==(h&192)||224===f&&160>h||237===f&&160<=h||128!==((d=a[c++])&192)?(c--,e.push(65533)):e.push((f&15)<<12|(h&63)<<6|d&63)):244>=f?c>=b-2?e.push(65533):
	(h=a[c++],128!==(h&192)||0!==(f<<28)+(h-144)>>30||128!==((d=a[c++])&192)||128!==((k=a[c++])&192)?(c--,e.push(65533)):(f=(f&7)<<18|(h&63)<<12|(d&63)<<6|k&63,f-=65536,e.push((f>>10&1023)+55296,(f&1023)+56320))):e.push(65533),8192<=e.length&&(g=xa(g,e),e.length=0);d=xa(g,e);}return d}function Wa(a,b,c){var d=a.g.i();for(d=a.g.g+d;a.g.g<d;)c.push(b.call(a.g));}function Xa(a,b){2==a.h?Wa(a,Ma.prototype.o,b):b.push(T(a));}function Ya(){this.h=[];this.i=0;this.g=new Qa;}function Za(a,b){0!==b.length&&(a.h.push(b),a.i+=b.length);}function $a(a){var b=a.i+a.g.length();if(0===b)return new Uint8Array(0);b=new Uint8Array(b);for(var c=a.h,d=c.length,e=0,g=0;g<d;g++){var f=c[g];0!==f.length&&(b.set(f,e),e+=f.length);}c=a.g;d=c.h;0!==d&&(b.set(c.g.subarray(0,d),e),c.h=0);a.h=[b];return b}
	function U(a,b,c){if(null!=c){Ra(a.g,8*b+5);a=a.g;var d=c;d=(c=0>d?1:0)?-d:d;0===d?0<1/d?Q=R=0:(R=0,Q=2147483648):isNaN(d)?(R=0,Q=2147483647):3.4028234663852886E38<d?(R=0,Q=(c<<31|2139095040)>>>0):1.1754943508222875E-38>d?(d=Math.round(d/Math.pow(2,-149)),R=0,Q=(c<<31|d)>>>0):(b=Math.floor(Math.log(d)/Math.LN2),d*=Math.pow(2,-b),d=Math.round(8388608*d),16777216<=d&&++b,R=0,Q=(c<<31|b+127<<23|d&8388607)>>>0);c=Q;a.push(c>>>0&255);a.push(c>>>8&255);a.push(c>>>16&255);a.push(c>>>24&255);}}var ab="function"===typeof Uint8Array;function bb(a,b,c){if(null!=a)return "object"===typeof a?ab&&a instanceof Uint8Array?c(a):cb(a,b,c):b(a)}function cb(a,b,c){if(Array.isArray(a)){for(var d=Array(a.length),e=0;e<a.length;e++)d[e]=bb(a[e],b,c);Array.isArray(a)&&a.W&&db(d);return d}d={};for(e in a)d[e]=bb(a[e],b,c);return d}function eb(a){return "number"===typeof a?isFinite(a)?a:String(a):a}var fb={W:{value:!0,configurable:!0}};
	function db(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,fb);return a}var gb;function V(a,b,c){var d=gb;gb=null;a||(a=d);d=this.constructor.ca;a||(a=d?[d]:[]);this.j=d?0:-1;this.m=this.g=null;this.h=a;a:{d=this.h.length;a=d-1;if(d&&(d=this.h[a],!(null===d||"object"!=typeof d||Array.isArray(d)||ab&&d instanceof Uint8Array))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE;}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.h[a])?db(d):this.h[a]=hb):(ib(this),(d=this.i[a])?db(d):this.i[a]=hb);}
	var hb=Object.freeze(db([]));function ib(a){var b=a.l+a.j;a.h[b]||(a.i=a.h[b]={});}function W(a,b,c){return -1===b?null:(void 0===c?0:c)||b>=a.l?a.i?a.i[b]:void 0:a.h[b+a.j]}function jb(a,b){var c=void 0===c?!1:c;var d=W(a,b,c);null==d&&(d=hb);d===hb&&(d=db([]),X(a,b,d,c));return d}function kb(a){var b=jb(a,3);a.m||(a.m={});if(!a.m[3]){for(var c=0;c<b.length;c++)b[c]=+b[c];a.m[3]=!0;}return b}function lb(a,b,c){a=W(a,b);return null==a?c:a}
	function Y(a,b,c){a=W(a,b);a=null==a?a:+a;return null==a?void 0===c?0:c:a}function X(a,b,c,d){(void 0===d?0:d)||b>=a.l?(ib(a),a.i[b]=c):a.h[b+a.j]=c;}function mb(a,b,c){if(-1===c)return null;a.g||(a.g={});if(!a.g[c]){var d=W(a,c,!1);d&&(a.g[c]=new b(d));}return a.g[c]}function nb(a,b){a.g||(a.g={});var c=a.g[1];if(!c){var d=jb(a,1);c=[];for(var e=0;e<d.length;e++)c[e]=new b(d[e]);a.g[1]=c;}return c}function ob(a,b,c){var d=void 0===d?!1:d;a.g||(a.g={});var e=c?pb(c):c;a.g[b]=c;X(a,b,e,d);}
	function qb(a,b,c,d){var e=nb(a,c);b=b?b:new c;a=jb(a,1);void 0!=d?(e.splice(d,0,b),a.splice(d,0,pb(b))):(e.push(b),a.push(pb(b)));}V.prototype.toJSON=function(){var a=pb(this);return cb(a,eb,Fa)};function pb(a,b){if(a.g)for(var c in a.g){var d=a.g[c];if(Array.isArray(d))for(var e=0;e<d.length;e++)d[e]&&pb(d[e]);else d&&pb(d);}return a.h}V.prototype.toString=function(){return pb(this).toString()};function rb(a,b){if(a=a.o){Za(b,b.g.end());for(var c=0;c<a.length;c++)Za(b,a[c]);}}function sb(a,b){if(4==b.h)return !1;var c=b.m;Ta(b);b.N||(b=La(b.g.h,c,b.g.g),(c=a.o)?c.push(b):a.o=[b]);return !0}function tb(a){V.call(this,a,-1,ub);}M(tb,V);tb.prototype.getRows=function(){return W(this,1)};tb.prototype.getCols=function(){return W(this,2)};tb.prototype.getPackedDataList=function(){return kb(this)};tb.prototype.getLayout=function(){return lb(this,4,0)};function vb(a,b){for(;S(b);)switch(b.i){case 8:var c=b.g.i();X(a,1,c);break;case 16:c=b.g.i();X(a,2,c);break;case 29:case 26:Xa(b,a.getPackedDataList());break;case 32:c=Oa(b.g);X(a,4,c);break;default:if(!sb(a,b))return a}return a}var ub=[3];function Z(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function g(k){try{h(b.next(k));}catch(l){e(l);}}function f(k){try{h(b["throw"](k));}catch(l){e(l);}}function h(k){k.done?d(k.value):(new c(function(l){l(k.value);})).then(g,f);}h((b=b.apply(a,void 0)).next());})}function wb(a){V.call(this,a);}M(wb,V);function xb(a,b){for(;S(b);)switch(b.i){case 8:var c=b.g.i();X(a,1,c);break;case 21:c=T(b);X(a,2,c);break;case 26:c=Va(b);X(a,3,c);break;case 34:c=Va(b);X(a,4,c);break;default:if(!sb(a,b))return a}return a}function yb(a){V.call(this,a,-1,zb);}M(yb,V);yb.prototype.addClassification=function(a,b){qb(this,a,wb,b);return this};var zb=[1];function Ab(a){V.call(this,a);}M(Ab,V);function Bb(a,b){for(;S(b);)switch(b.i){case 13:var c=T(b);X(a,1,c);break;case 21:c=T(b);X(a,2,c);break;case 29:c=T(b);X(a,3,c);break;case 37:c=T(b);X(a,4,c);break;case 45:c=T(b);X(a,5,c);break;default:if(!sb(a,b))return a}return a}function Cb(a){V.call(this,a,-1,Db);}M(Cb,V);function Eb(a){a:{var b=new Cb;for(a=new Sa(a);S(a);)switch(a.i){case 10:var c=Ua(a,new Ab,Bb);qb(b,c,Ab,void 0);break;default:if(!sb(b,a))break a}}return b}var Db=[1];function Fb(a){V.call(this,a);}M(Fb,V);function Gb(a){V.call(this,a,-1,Hb);}M(Gb,V);Gb.prototype.getVertexType=function(){return lb(this,1,0)};Gb.prototype.getPrimitiveType=function(){return lb(this,2,0)};Gb.prototype.getVertexBufferList=function(){return kb(this)};Gb.prototype.getIndexBufferList=function(){return jb(this,4)};
	function Ib(a,b){for(;S(b);)switch(b.i){case 8:var c=Oa(b.g);X(a,1,c);break;case 16:c=Oa(b.g);X(a,2,c);break;case 29:case 26:Xa(b,a.getVertexBufferList());break;case 32:case 34:c=b;var d=a.getIndexBufferList();2==c.h?Wa(c,Ma.prototype.i,d):d.push(c.g.i());break;default:if(!sb(a,b))return a}return a}var Hb=[3,4];function Jb(a){V.call(this,a);}M(Jb,V);Jb.prototype.getMesh=function(){return mb(this,Gb,1)};Jb.prototype.getPoseTransformMatrix=function(){return mb(this,tb,2)};function Kb(a){a:{var b=new Jb;for(a=new Sa(a);S(a);)switch(a.i){case 10:var c=Ua(a,new Gb,Ib);ob(b,1,c);break;case 18:c=Ua(a,new tb,vb);ob(b,2,c);break;default:if(!sb(b,a))break a}}return b}function Lb(a,b,c){c=a.createShader(0===c?a.VERTEX_SHADER:a.FRAGMENT_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+a.getShaderInfoLog(c));return c}function Mb(a){return nb(a,wb).map(function(b){return {index:lb(b,1,0),Y:Y(b,2),label:null!=W(b,3)?lb(b,3,""):void 0,displayName:null!=W(b,4)?lb(b,4,""):void 0}})}function Nb(a){return {x:Y(a,1),y:Y(a,2),z:Y(a,3),visibility:null!=W(a,4)?Y(a,4):void 0}}function Ob(a,b){this.h=a;this.g=b;this.l=0;}
	function Pb(a,b,c){Qb(a,b);if("function"===typeof a.g.canvas.transferToImageBitmap)return Promise.resolve(a.g.canvas.transferToImageBitmap());if(c)return Promise.resolve(a.g.canvas);if("function"===typeof createImageBitmap)return createImageBitmap(a.g.canvas);void 0===a.i&&(a.i=document.createElement("canvas"));return new Promise(function(d){a.i.height=a.g.canvas.height;a.i.width=a.g.canvas.width;a.i.getContext("2d",{}).drawImage(a.g.canvas,0,0,a.g.canvas.width,a.g.canvas.height);d(a.i);})}
	function Qb(a,b){var c=a.g;if(void 0===a.m){var d=Lb(c,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),e=Lb(c,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),g=c.createProgram();c.attachShader(g,d);c.attachShader(g,e);c.linkProgram(g);if(!c.getProgramParameter(g,c.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+
	c.getProgramInfoLog(g));d=a.m=g;c.useProgram(d);e=c.getUniformLocation(d,"sampler0");a.j={I:c.getAttribLocation(d,"aVertex"),H:c.getAttribLocation(d,"aTex"),da:e};a.s=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.s);c.enableVertexAttribArray(a.j.I);c.vertexAttribPointer(a.j.I,2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);a.o=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.o);c.enableVertexAttribArray(a.j.H);c.vertexAttribPointer(a.j.H,
	2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);c.uniform1i(e,0);}d=a.j;c.useProgram(a.m);c.canvas.width=b.width;c.canvas.height=b.height;c.viewport(0,0,b.width,b.height);c.activeTexture(c.TEXTURE0);a.h.bindTexture2d(b.glName);c.enableVertexAttribArray(d.I);c.bindBuffer(c.ARRAY_BUFFER,a.s);c.vertexAttribPointer(d.I,2,c.FLOAT,!1,0,0);c.enableVertexAttribArray(d.H);c.bindBuffer(c.ARRAY_BUFFER,a.o);c.vertexAttribPointer(d.H,
	2,c.FLOAT,!1,0,0);c.bindFramebuffer(c.DRAW_FRAMEBUFFER?c.DRAW_FRAMEBUFFER:c.FRAMEBUFFER,null);c.clearColor(0,0,0,0);c.clear(c.COLOR_BUFFER_BIT);c.colorMask(!0,!0,!0,!0);c.drawArrays(c.TRIANGLE_FAN,0,4);c.disableVertexAttribArray(d.I);c.disableVertexAttribArray(d.H);c.bindBuffer(c.ARRAY_BUFFER,null);a.h.bindTexture2d(0);}function Rb(a){this.g=a;}var Sb=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Tb(a,b){return b+a}function Ub(a,b){window[a]=b;}function Vb(a){var b=document.createElement("script");b.setAttribute("src",a);b.setAttribute("crossorigin","anonymous");return new Promise(function(c){b.addEventListener("load",function(){c();},!1);b.addEventListener("error",function(){c();},!1);document.body.appendChild(b);})}
	function Wb(){return Z(this,function b(){return O(b,function(c){switch(c.g){case 1:return c.m=2,N(c,WebAssembly.instantiate(Sb),4);case 4:c.g=3;c.m=0;break;case 2:return c.m=0,c.j=null,c.return(!1);case 3:return c.return(!0)}})})}
	function Xb(a){this.g=a;this.listeners={};this.j={};this.F={};this.m={};this.s={};this.G=this.o=this.R=!0;this.C=Promise.resolve();this.P="";this.B={};this.locateFile=a&&a.locateFile||Tb;if("object"===typeof window)var b=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if("undefined"!==typeof location)b=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");
	this.S=b;if(a.options){b=K(Object.keys(a.options));for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=a.options[c].default;void 0!==d&&(this.j[c]="function"===typeof d?d():d);}}}v=Xb.prototype;v.close=function(){this.i&&this.i.delete();return Promise.resolve()};function Yb(a,b){return void 0===a.g.files?[]:"function"===typeof a.g.files?a.g.files(b):a.g.files}
	function Zb(a){return Z(a,function c(){var d=this,e,g,f,h,k,l,n,u,w,r,y;return O(c,function(m){switch(m.g){case 1:e=d;if(!d.R)return m.return();g=Yb(d,d.j);return N(m,Wb(),2);case 2:f=m.h;if("object"===typeof window)return Ub("createMediapipeSolutionsWasm",{locateFile:d.locateFile}),Ub("createMediapipeSolutionsPackedAssets",{locateFile:d.locateFile}),l=g.filter(function(t){return void 0!==t.data}),n=g.filter(function(t){return void 0===t.data}),u=Promise.all(l.map(function(t){var x=$b(e,t.url);if(void 0!==
	t.path){var z=t.path;x=x.then(function(E){e.overrideFile(z,E);return Promise.resolve(E)});}return x})),w=Promise.all(n.map(function(t){return void 0===t.simd||t.simd&&f||!t.simd&&!f?Vb(e.locateFile(t.url,e.S)):Promise.resolve()})).then(function(){return Z(e,function x(){var z,E,F=this;return O(x,function(I){if(1==I.g)return z=window.createMediapipeSolutionsWasm,E=window.createMediapipeSolutionsPackedAssets,N(I,z(E),2);F.h=I.h;I.g=0;})})}),r=function(){return Z(e,function x(){var z=this;return O(x,function(E){z.g.graph&&
	z.g.graph.url?E=N(E,$b(z,z.g.graph.url),0):(E.g=0,E=void 0);return E})})}(),N(m,Promise.all([w,u,r]),7);if("function"!==typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");h=g.filter(function(t){return void 0===t.simd||t.simd&&f||!t.simd&&!f}).map(function(t){return e.locateFile(t.url,e.S)});importScripts.apply(null,L(h));return N(m,createMediapipeSolutionsWasm(Module),6);case 6:d.h=m.h;d.l=new OffscreenCanvas(1,1);d.h.canvas=d.l;k=d.h.GL.createContext(d.l,
	{antialias:!1,alpha:!1,ba:"undefined"!==typeof WebGL2RenderingContext?2:1});d.h.GL.makeContextCurrent(k);m.g=4;break;case 7:d.l=document.createElement("canvas");y=d.l.getContext("webgl2",{});if(!y&&(y=d.l.getContext("webgl",{}),!y))return alert("Failed to create WebGL canvas context when passing video frame."),m.return();d.D=y;d.h.canvas=d.l;d.h.createContext(d.l,!0,!0,{});case 4:d.i=new d.h.SolutionWasm,d.R=!1,m.g=0;}})})}
	function ac(a){return Z(a,function c(){var d=this,e,g,f,h,k,l,n,u;return O(c,function(w){if(1==w.g){if(d.g.graph&&d.g.graph.url&&d.P===d.g.graph.url)return w.return();d.o=!0;if(!d.g.graph||!d.g.graph.url){w.g=2;return}d.P=d.g.graph.url;return N(w,$b(d,d.g.graph.url),3)}2!=w.g&&(e=w.h,d.i.loadGraph(e));g=K(Object.keys(d.B));for(f=g.next();!f.done;f=g.next())h=f.value,d.i.overrideFile(h,d.B[h]);d.B={};if(d.g.listeners)for(k=K(d.g.listeners),l=k.next();!l.done;l=k.next())n=l.value,bc(d,n);u=d.j;d.j=
	{};d.setOptions(u);w.g=0;})})}v.reset=function(){return Z(this,function b(){var c=this;return O(b,function(d){c.i&&(c.i.reset(),c.m={},c.s={});d.g=0;})})};
	v.setOptions=function(a,b){var c=this;if(b=b||this.g.options){for(var d=[],e=[],g={},f=K(Object.keys(a)),h=f.next();!h.done;g={K:g.K,L:g.L},h=f.next()){var k=h.value;k in this.j&&this.j[k]===a[k]||(this.j[k]=a[k],h=b[k],void 0!==h&&(h.onChange&&(g.K=h.onChange,g.L=a[k],d.push(function(l){return function(){return Z(c,function u(){var w,r=this;return O(u,function(y){if(1==y.g)return N(y,l.K(l.L),2);w=y.h;!0===w&&(r.o=!0);y.g=0;})})}}(g))),h.graphOptionXref&&(k={valueNumber:1===h.type?a[k]:0,valueBoolean:0===
	h.type?a[k]:!1,valueString:2===h.type?a[k]:""},h=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),h.graphOptionXref),k),e.push(h))));}if(0!==d.length||0!==e.length)this.o=!0,this.A=(void 0===this.A?[]:this.A).concat(e),this.u=(void 0===this.u?[]:this.u).concat(d);}};
	function cc(a){return Z(a,function c(){var d=this,e,g,f,h,k,l,n;return O(c,function(u){switch(u.g){case 1:if(!d.o)return u.return();if(!d.u){u.g=2;break}e=K(d.u);g=e.next();case 3:if(g.done){u.g=5;break}f=g.value;return N(u,f(),4);case 4:g=e.next();u.g=3;break;case 5:d.u=void 0;case 2:if(d.A){h=new d.h.GraphOptionChangeRequestList;k=K(d.A);for(l=k.next();!l.done;l=k.next())n=l.value,h.push_back(n);d.i.changeOptions(h);h.delete();d.A=void 0;}d.o=!1;u.g=0;}})})}
	v.initialize=function(){return Z(this,function b(){var c=this;return O(b,function(d){return 1==d.g?N(d,Zb(c),2):3!=d.g?N(d,ac(c),3):N(d,cc(c),0)})})};function $b(a,b){return Z(a,function d(){var e=this,g,f;return O(d,function(h){if(b in e.F)return h.return(e.F[b]);g=e.locateFile(b,"");f=fetch(g).then(function(k){return k.arrayBuffer()});e.F[b]=f;return h.return(f)})})}v.overrideFile=function(a,b){this.i?this.i.overrideFile(a,b):this.B[a]=b;};v.clearOverriddenFiles=function(){this.B={};this.i&&this.i.clearOverriddenFiles();};
	v.send=function(a,b){return Z(this,function d(){var e=this,g,f,h,k,l,n,u,w,r;return O(d,function(y){switch(y.g){case 1:if(!e.g.inputs)return y.return();g=1E3*(void 0===b||null===b?performance.now():b);return N(y,e.C,2);case 2:return N(y,e.initialize(),3);case 3:f=new e.h.PacketDataList;h=K(Object.keys(a));for(k=h.next();!k.done;k=h.next())if(l=k.value,n=e.g.inputs[l]){a:{var m=e;var t=a[l];switch(n.type){case "video":var x=m.m[n.stream];x||(x=new Ob(m.h,m.D),m.m[n.stream]=x);m=x;0===m.l&&(m.l=m.h.createTexture());
	if("undefined"!==typeof HTMLVideoElement&&t instanceof HTMLVideoElement){var z=t.videoWidth;x=t.videoHeight;}else "undefined"!==typeof HTMLImageElement&&t instanceof HTMLImageElement?(z=t.naturalWidth,x=t.naturalHeight):(z=t.width,x=t.height);x={glName:m.l,width:z,height:x};z=m.g;z.canvas.width=x.width;z.canvas.height=x.height;z.activeTexture(z.TEXTURE0);m.h.bindTexture2d(m.l);z.texImage2D(z.TEXTURE_2D,0,z.RGBA,z.RGBA,z.UNSIGNED_BYTE,t);m.h.bindTexture2d(0);m=x;break a;case "detections":x=m.m[n.stream];
	x||(x=new Rb(m.h),m.m[n.stream]=x);m=x;m.data||(m.data=new m.g.DetectionListData);m.data.reset(t.length);for(x=0;x<t.length;++x){z=t[x];var E=m.data,F=E.setBoundingBox,I=x;var H=z.T;var p=new Fb;X(p,1,H.Z);X(p,2,H.$);X(p,3,H.height);X(p,4,H.width);X(p,5,H.rotation);X(p,6,H.X);var A=H=new Ya;U(A,1,W(p,1));U(A,2,W(p,2));U(A,3,W(p,3));U(A,4,W(p,4));U(A,5,W(p,5));var C=W(p,6);if(null!=C&&null!=C){Ra(A.g,48);var q=A.g,B=C;C=0>B;B=Math.abs(B);var D=B>>>0;B=Math.floor((B-D)/4294967296);B>>>=0;C&&(B=~B>>>
	0,D=(~D>>>0)+1,4294967295<D&&(D=0,B++,4294967295<B&&(B=0)));Q=D;R=B;C=Q;for(D=R;0<D||127<C;)q.push(C&127|128),C=(C>>>7|D<<25)>>>0,D>>>=7;q.push(C);}rb(p,A);H=$a(H);F.call(E,I,H);if(z.O)for(E=0;E<z.O.length;++E)p=z.O[E],A=p.visibility?!0:!1,F=m.data,I=F.addNormalizedLandmark,H=x,p=Object.assign(Object.assign({},p),{visibility:A?p.visibility:0}),A=new Ab,X(A,1,p.x),X(A,2,p.y),X(A,3,p.z),p.visibility&&X(A,4,p.visibility),q=p=new Ya,U(q,1,W(A,1)),U(q,2,W(A,2)),U(q,3,W(A,3)),U(q,4,W(A,4)),U(q,5,W(A,5)),
	rb(A,q),p=$a(p),I.call(F,H,p);if(z.M)for(E=0;E<z.M.length;++E){F=m.data;I=F.addClassification;H=x;p=z.M[E];A=new wb;X(A,2,p.Y);p.index&&X(A,1,p.index);p.label&&X(A,3,p.label);p.displayName&&X(A,4,p.displayName);q=p=new Ya;D=W(A,1);if(null!=D&&null!=D)if(Ra(q.g,8),C=q.g,0<=D)Ra(C,D);else {for(B=0;9>B;B++)C.push(D&127|128),D>>=7;C.push(1);}U(q,2,W(A,2));C=W(A,3);null!=C&&(C=Ca(C),Ra(q.g,26),Ra(q.g,C.length),Za(q,q.g.end()),Za(q,C));C=W(A,4);null!=C&&(C=Ca(C),Ra(q.g,34),Ra(q.g,C.length),Za(q,q.g.end()),
	Za(q,C));rb(A,q);p=$a(p);I.call(F,H,p);}}m=m.data;break a;default:m={};}}u=m;w=n.stream;switch(n.type){case "video":f.pushTexture2d(Object.assign(Object.assign({},u),{stream:w,timestamp:g}));break;case "detections":r=u;r.stream=w;r.timestamp=g;f.pushDetectionList(r);break;default:throw Error("Unknown input config type: '"+n.type+"'");}}e.i.send(f);return N(y,e.C,4);case 4:f.delete(),y.g=0;}})})};
	function dc(a,b,c){return Z(a,function e(){var g,f,h,k,l,n,u=this,w,r,y,m,t,x,z,E;return O(e,function(F){switch(F.g){case 1:if(!c)return F.return(b);g={};f=0;h=K(Object.keys(c));for(k=h.next();!k.done;k=h.next())l=k.value,n=c[l],"string"!==typeof n&&"texture"===n.type&&void 0!==b[n.stream]&&++f;1<f&&(u.G=!1);w=K(Object.keys(c));k=w.next();case 2:if(k.done){F.g=4;break}r=k.value;y=c[r];if("string"===typeof y)return z=g,E=r,N(F,ec(u,r,b[y]),14);m=b[y.stream];if("detection_list"===y.type){if(m){var I=
	m.getRectList();for(var H=m.getLandmarksList(),p=m.getClassificationsList(),A=[],C=0;C<I.size();++C){var q=I.get(C);a:{var B=new Fb;for(q=new Sa(q);S(q);)switch(q.i){case 13:var D=T(q);X(B,1,D);break;case 21:D=T(q);X(B,2,D);break;case 29:D=T(q);X(B,3,D);break;case 37:D=T(q);X(B,4,D);break;case 45:D=T(q);X(B,5,D);break;case 48:D=Oa(q.g);X(B,6,D);break;default:if(!sb(B,q))break a}}B={Z:Y(B,1),$:Y(B,2),height:Y(B,3),width:Y(B,4),rotation:Y(B,5,0),X:lb(B,6,0)};q=nb(Eb(H.get(C)),Ab).map(Nb);var la=p.get(C);
	a:for(D=new yb,la=new Sa(la);S(la);)switch(la.i){case 10:D.addClassification(Ua(la,new wb,xb));break;default:if(!sb(D,la))break a}B={T:B,O:q,M:Mb(D)};A.push(B);}I=A;}else I=[];g[r]=I;F.g=7;break}if("proto_list"===y.type){if(m){I=Array(m.size());for(H=0;H<m.size();H++)I[H]=m.get(H);m.delete();}else I=[];g[r]=I;F.g=7;break}if(void 0===m){F.g=3;break}if("float_list"===y.type){g[r]=m;F.g=7;break}if("proto"===y.type){g[r]=m;F.g=7;break}if("texture"!==y.type)throw Error("Unknown output config type: '"+y.type+
	"'");t=u.s[r];t||(t=new Ob(u.h,u.D),u.s[r]=t);return N(F,Pb(t,m,u.G),13);case 13:x=F.h,g[r]=x;case 7:y.transform&&g[r]&&(g[r]=y.transform(g[r]));F.g=3;break;case 14:z[E]=F.h;case 3:k=w.next();F.g=2;break;case 4:return F.return(g)}})})}
	function ec(a,b,c){return Z(a,function e(){var g=this,f;return O(e,function(h){return "number"===typeof c||c instanceof Uint8Array||c instanceof g.h.Uint8BlobList?h.return(c):c instanceof g.h.Texture2dDataOut?(f=g.s[b],f||(f=new Ob(g.h,g.D),g.s[b]=f),h.return(Pb(f,c,g.G))):h.return(void 0)})})}
	function bc(a,b){for(var c=b.name||"$",d=[].concat(L(b.wants)),e=new a.h.StringList,g=K(b.wants),f=g.next();!f.done;f=g.next())e.push_back(f.value);g=a.h.PacketListener.implement({onResults:function(h){for(var k={},l=0;l<b.wants.length;++l)k[d[l]]=h.get(l);var n=a.listeners[c];n&&(a.C=dc(a,k,b.outs).then(function(u){u=n(u);for(var w=0;w<b.wants.length;++w){var r=k[d[w]];"object"===typeof r&&r.hasOwnProperty&&r.hasOwnProperty("delete")&&r.delete();}u&&(a.C=u);}));}});a.i.attachMultiListener(e,g);e.delete();}
	v.onResults=function(a,b){this.listeners[b||"$"]=a;};P("Solution",Xb);P("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function fc(a){a=Kb(a);var b=a.getMesh();if(!b)return a;var c=new Float32Array(b.getVertexBufferList());b.getVertexBufferList=function(){return c};var d=new Uint32Array(b.getIndexBufferList());b.getIndexBufferList=function(){return d};return a}var gc={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(a){return a.map(fc)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(a){return a.map(function(b){return nb(Eb(b),
	Ab).map(Nb)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",
	fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,
	graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",
	fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}};var hc=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],ic=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,
	385],[385,384],[384,398],[398,362]],jc=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],kc=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],lc=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],mc=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],
	[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],nc=[].concat(L(hc),L(ic),L(jc),L(kc),L(lc),L(mc));function oc(a){a=a||{};a=Object.assign(Object.assign({},gc),a);this.g=new Xb(a);}v=oc.prototype;v.close=function(){this.g.close();return Promise.resolve()};v.onResults=function(a){this.g.onResults(a);};v.initialize=function(){return Z(this,function b(){var c=this;return O(b,function(d){return N(d,c.g.initialize(),0)})})};v.reset=function(){this.g.reset();};v.send=function(a){return Z(this,function c(){var d=this;return O(c,function(e){return N(e,d.g.send(a),0)})})};v.setOptions=function(a){this.g.setOptions(a);};
	P("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1E4}});P("FaceMesh",oc);P("FACEMESH_LIPS",hc);P("FACEMESH_LEFT_EYE",ic);P("FACEMESH_LEFT_EYEBROW",jc);P("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]);P("FACEMESH_RIGHT_EYE",kc);P("FACEMESH_RIGHT_EYEBROW",lc);
	P("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]);P("FACEMESH_FACE_OVAL",mc);P("FACEMESH_CONTOURS",nc);
	P("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,
	214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,
	40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,
	140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,
	36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,
	149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],
	[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,
	111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],
	[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],
	[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,
	24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],
	[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,
	297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,
	416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],
	[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,
	349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,
	328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],
	[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,
	419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,
	455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],
	[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],
	[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,
	262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],
	[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,
	383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,
	120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],
	[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,
	247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],
	[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,
	157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],
	[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,
	115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,
	52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],
	[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,
	186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],
	[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],
	[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,
	431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,
	18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,
	256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],
	[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,
	366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],
	[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],
	[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,
	248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,
	429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],
	[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,
	341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],
	[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]);P("matrixDataToMatrix",function(a){for(var b=a.getCols(),c=a.getRows(),d=a.getPackedDataList(),e=[],g=0;g<c;g++)e.push(Array(b));for(g=0;g<c;g++)for(var f=0;f<b;f++){var h=1===a.getLayout()?g*b+f:f*c+g;e[g][f]=d[h];}return e});P("VERSION","0.4.1633559619");}).call(commonjsGlobal);

	var t="undefined"!=typeof self?self:{};function e(){throw Error("Invalid UTF8")}function n(t,e){return e=String.fromCharCode.apply(null,e),null==t?e:t+e}let r,i;const s="undefined"!=typeof TextDecoder;let o;const a="undefined"!=typeof TextEncoder;function c(t){if(a)t=(o||=new TextEncoder).encode(t);else {let n=0;const r=new Uint8Array(3*t.length);for(let i=0;i<t.length;i++){var e=t.charCodeAt(i);if(e<128)r[n++]=e;else {if(e<2048)r[n++]=e>>6|192;else {if(e>=55296&&e<=57343){if(e<=56319&&i<t.length){const s=t.charCodeAt(++i);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,r[n++]=e>>18|240,r[n++]=e>>12&63|128,r[n++]=e>>6&63|128,r[n++]=63&e|128;continue}i--;}e=65533;}r[n++]=e>>12|224,r[n++]=e>>6&63|128;}r[n++]=63&e|128;}}t=n===r.length?r:r.subarray(0,n);}return t}var h,u;t:{for(var l=["CLOSURE_FLAGS"],d=t,f=0;f<l.length;f++)if(null==(d=d[l[f]])){u=null;break t}u=d;}var p,g=u&&u[610401301];h=null!=g&&g;const m=t.navigator;function y(t){return !!h&&(!!p&&p.brands.some((({brand:e})=>e&&-1!=e.indexOf(t))))}function _(e){var n;return (n=t.navigator)&&(n=n.userAgent)||(n=""),-1!=n.indexOf(e)}function v(){return !!h&&(!!p&&p.brands.length>0)}function E(){return v()?y("Chromium"):(_("Chrome")||_("CriOS"))&&!(!v()&&_("Edge"))||_("Silk")}function w(t){return w[" "](t),t}p=m&&m.userAgentData||null,w[" "]=function(){};var T=!v()&&(_("Trident")||_("MSIE"));!_("Android")||E(),E(),_("Safari")&&(E()||!v()&&_("Coast")||!v()&&_("Opera")||!v()&&_("Edge")||(v()?y("Microsoft Edge"):_("Edg/"))||v()&&y("Opera"));var A={},b=null;function k(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):-1!="=.".indexOf(t[e-1])&&(n=-1!="=.".indexOf(t[e-2])?n-2:n-1);const r=new Uint8Array(n);let i=0;return function(t,e){function n(e){for(;r<t.length;){const e=t.charAt(r++),n=b[e];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(e))throw Error("Unknown base64 encoding at char: "+e)}return e}S();let r=0;for(;;){const t=n(-1),r=n(0),i=n(64),s=n(64);if(64===s&&-1===t)break;e(t<<2|r>>4),64!=i&&(e(r<<4&240|i>>2),64!=s&&e(i<<6&192|s));}}(t,(function(t){r[i++]=t;})),i!==n?r.subarray(0,i):r}function S(){if(!b){b={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const r=t.concat(e[n].split(""));A[n]=r;for(let t=0;t<r.length;t++){const e=r[t];void 0===b[e]&&(b[e]=t);}}}}var x="undefined"!=typeof Uint8Array,L=!T&&"function"==typeof btoa;function R(t){if(!L){var e;void 0===e&&(e=0),S(),e=A[e];var n=Array(Math.floor(t.length/3)),r=e[64]||"";let c=0,h=0;for(;c<t.length-2;c+=3){var i=t[c],s=t[c+1],o=t[c+2],a=e[i>>2];i=e[(3&i)<<4|s>>4],s=e[(15&s)<<2|o>>6],o=e[63&o],n[h++]=a+i+s+o;}switch(a=0,o=r,t.length-c){case 2:o=e[(15&(a=t[c+1]))<<2]||r;case 1:t=t[c],n[h]=e[t>>2]+e[(3&t)<<4|a>>4]+o+r;}return n.join("")}for(e="",n=0,r=t.length-10240;n<r;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const F=/[-_.]/g,I={"-":"+",_:"/",".":"="};function M(t){return I[t]||""}function P(t){if(!L)return k(t);F.test(t)&&(t=t.replace(F,M)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function C(t){return x&&null!=t&&t instanceof Uint8Array}var O={};function U(){return B||=new N(null,O)}function D(t){j(O);var e=t.g;return null==(e=null==e||C(e)?e:"string"==typeof e?P(e):null)?e:t.g=e}var N=class{h(){return new Uint8Array(D(this)||0)}constructor(t,e){if(j(e),this.g=t,null!=t&&0===t.length)throw Error("ByteString should be constructed with non-empty values")}};let B,G;function j(t){if(t!==O)throw Error("illegal external caller")}function V(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e;}function X(t){return V(t=Error(t),"warning"),t}function H(e){if(null!=e){var n=G??={},r=n[e]||0;r>=5||(n[e]=r+1,V(e=Error(),"incident"),function(e){t.setTimeout((()=>{throw e}),0);}(e));}}var W="function"==typeof Symbol&&"symbol"==typeof Symbol();function z(t,e,n=!1){return "function"==typeof Symbol&&"symbol"==typeof Symbol()?n&&Symbol.for&&t?Symbol.for(t):null!=t?Symbol(t):Symbol():e}var K=z("jas",void 0,!0),Y=z(void 0,"0di"),$=z(void 0,"1oa"),q=z(void 0,Symbol()),J=z(void 0,"0actk"),Z=z(void 0,"8utk");const Q=W?K:"Ea",tt={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},et=Object.defineProperties;function nt(t,e){W||Q in t||et(t,tt),t[Q]|=e;}function rt(t,e){W||Q in t||et(t,tt),t[Q]=e;}function it(t){return nt(t,34),t}function st(t,e){rt(e,-15615&(0|t));}function ot(t,e){rt(e,-15581&(34|t));}function at(){return "function"==typeof BigInt}function ct(t){return Array.prototype.slice.call(t)}var ht,ut={};function lt(t){return null!==t&&"object"==typeof t&&!Array.isArray(t)&&t.constructor===Object}function dt(t,e){if(null!=t)if("string"==typeof t)t=t?new N(t,O):U();else if(t.constructor!==N)if(C(t))t=t.length?new N(new Uint8Array(t),O):U();else {if(!e)throw Error();t=void 0;}return t}const ft=[];function pt(t){if(2&t)throw Error()}rt(ft,55),ht=Object.freeze(ft);class gt{constructor(t,e,n){this.g=t,this.h=e,this.l=n;}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}function mt(t){return q?t[q]:void 0}var yt=Object.freeze({});function _t(t){return t.Na=!0,t}var vt=_t((t=>"number"==typeof t)),Et=_t((t=>"string"==typeof t)),wt=_t((t=>"boolean"==typeof t)),Tt="function"==typeof t.BigInt&&"bigint"==typeof t.BigInt(0);function At(t){var e=t;if(Et(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(vt(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Tt?BigInt(t):t=wt(t)?t?"1":"0":Et(t)?t.trim()||"0":String(t)}var bt=_t((t=>Tt?t>=St&&t<=Lt:"-"===t[0]?Rt(t,kt):Rt(t,xt)));const kt=Number.MIN_SAFE_INTEGER.toString(),St=Tt?BigInt(Number.MIN_SAFE_INTEGER):void 0,xt=Number.MAX_SAFE_INTEGER.toString(),Lt=Tt?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Rt(t,e){if(t.length>e.length)return !1;if(t.length<e.length||t===e)return !0;for(let n=0;n<t.length;n++){const r=t[n],i=e[n];if(r>i)return !1;if(r<i)return !0}}const Ft="function"==typeof Uint8Array.prototype.slice;let It,Mt=0,Pt=0;function Ct(t){const e=t>>>0;Mt=e,Pt=(t-e)/4294967296>>>0;}function Ot(t){if(t<0){Ct(-t);const[e,n]=Xt(Mt,Pt);Mt=e>>>0,Pt=n>>>0;}else Ct(t);}function Ut(t){const e=It||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),Pt=0,Mt=e.getUint32(0,!0);}function Dt(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Bt(t,e)}function Nt(t,e){const n=2147483648&e;return n&&(e=~e>>>0,0==(t=1+~t>>>0)&&(e=e+1>>>0)),"number"==typeof(t=Dt(t,e))?n?-t:t:n?"-"+t:t}function Bt(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else at()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Gt(n)+Gt(t));return n}function Gt(t){return t=String(t),"0000000".slice(t.length)+t}function jt(){var t=Mt,e=Pt;if(2147483648&e)if(at())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else {const[n,r]=Xt(t,e);t="-"+Bt(n,r);}else t=Bt(t,e);return t}function Vt(t){if(t.length<16)Ot(Number(t));else if(at())t=BigInt(t),Mt=Number(t&BigInt(4294967295))>>>0,Pt=Number(t>>BigInt(32)&BigInt(4294967295));else {const e=+("-"===t[0]);Pt=Mt=0;const n=t.length;for(let r=e,i=(n-e)%6+e;i<=n;r=i,i+=6){const e=Number(t.slice(r,i));Pt*=1e6,Mt=1e6*Mt+e,Mt>=4294967296&&(Pt+=Math.trunc(Mt/4294967296),Pt>>>=0,Mt>>>=0);}if(e){const[t,e]=Xt(Mt,Pt);Mt=t,Pt=e;}}}function Xt(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}const Ht="function"==typeof BigInt?BigInt.asIntN:void 0,Wt="function"==typeof BigInt?BigInt.asUintN:void 0,zt=Number.isSafeInteger,Kt=Number.isFinite,Yt=Math.trunc,$t=At(0);function qt(t){return null==t||"number"==typeof t?t:"NaN"===t||"Infinity"===t||"-Infinity"===t?Number(t):void 0}function Jt(t){return null==t||"boolean"==typeof t?t:"number"==typeof t?!!t:void 0}const Zt=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Qt(t){switch(typeof t){case"bigint":return !0;case"number":return Kt(t);case"string":return Zt.test(t);default:return !1}}function te(t){if(null==t)return t;if("string"==typeof t&&t)t=+t;else if("number"!=typeof t)return;return Kt(t)?0|t:void 0}function ee(t){if(null==t)return t;if("string"==typeof t&&t)t=+t;else if("number"!=typeof t)return;return Kt(t)?t>>>0:void 0}function ne(t){if("-"===t[0])return !1;const e=t.length;return e<20||20===e&&Number(t.substring(0,6))<184467}function re(t){const e=t.length;return "-"===t[0]?e<20||20===e&&Number(t.substring(0,7))>-922337:e<19||19===e&&Number(t.substring(0,6))<922337}function ie(t){return re(t)?t:(Vt(t),jt())}function se(t){return t=Yt(t),zt(t)||(Ot(t),t=Nt(Mt,Pt)),t}function oe(t){var e=Yt(Number(t));return zt(e)?String(e):(-1!==(e=t.indexOf("."))&&(t=t.substring(0,e)),ie(t))}function ae(t){var e=Yt(Number(t));return zt(e)?At(e):(-1!==(e=t.indexOf("."))&&(t=t.substring(0,e)),at()?At(Ht(64,BigInt(t))):At(ie(t)))}function ce(t){if(zt(t))t=At(se(t));else {if(t=Yt(t),zt(t))t=String(t);else {const e=String(t);re(e)?t=e:(Ot(t),t=jt());}t=At(t);}return t}function he(t){return null==t?t:"bigint"==typeof t?(bt(t)?t=Number(t):(t=Ht(64,t),t=bt(t)?Number(t):String(t)),t):Qt(t)?"number"==typeof t?se(t):oe(t):void 0}function ue(t){if(null==t)return t;var e=typeof t;if("bigint"===e)return String(Wt(64,t));if(Qt(t)){if("string"===e)return e=Yt(Number(t)),zt(e)&&e>=0?t=String(e):(-1!==(e=t.indexOf("."))&&(t=t.substring(0,e)),ne(t)||(Vt(t),t=Bt(Mt,Pt))),t;if("number"===e)return (t=Yt(t))>=0&&zt(t)?t:function(t){if(t<0){Ot(t);var e=Bt(Mt,Pt);return t=Number(e),zt(t)?t:e}return ne(e=String(t))?e:(Ot(t),Dt(Mt,Pt))}(t)}}function le(t){if("string"!=typeof t)throw Error();return t}function de(t){if(null!=t&&"string"!=typeof t)throw Error();return t}function fe(t){return null==t||"string"==typeof t?t:void 0}function pe(t,e,n,r){if(null!=t&&"object"==typeof t&&t.W===ut)return t;if(!Array.isArray(t))return n?2&r?((t=e[Y])||(it((t=new e).u),t=e[Y]=t),e=t):e=new e:e=void 0,e;let i=n=0|t[Q];return 0===i&&(i|=32&r),i|=2&r,i!==n&&rt(t,i),new e(t)}function ge(t,e,n){if(e)t:{if(!Qt(e=t))throw X("int64");switch(typeof e){case"string":e=ae(e);break t;case"bigint":e=At(Ht(64,e));break t;default:e=ce(e);}}else t=typeof(e=t),e=null==e?e:"bigint"===t?At(Ht(64,e)):Qt(e)?"string"===t?ae(e):ce(e):void 0;return null==(t=e)?n?$t:void 0:t}function me(t){return t}const ye={};let _e=function(){try{return w(new class extends Map{constructor(){super();}}),!1}catch{return !0}}();class ve{constructor(){this.g=new Map;}get(t){return this.g.get(t)}set(t,e){return this.g.set(t,e),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size;}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,e){return this.g.forEach(t,e)}[Symbol.iterator](){return this.entries()}}const Ee=_e?(Object.setPrototypeOf(ve.prototype,Map.prototype),Object.defineProperties(ve.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),ve):class extends Map{constructor(){super();}};function we(t){return t}function Te(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var Ae=class extends Ee{constructor(t,e,n=we,r=we){super();let i=0|t[Q];i|=64,rt(t,i),this.M=i,this.I=e,this.S=n,this.X=this.I?be:r;for(let s=0;s<t.length;s++){const o=t[s],a=n(o[0],!1,!0);let c=o[1];e?void 0===c&&(c=null):c=r(o[1],!1,!0,void 0,void 0,i),super.set(a,c);}}La(){var t=Ce;if(0!==this.size)return Array.from(super.entries(),(e=>(e[0]=t(e[0]),e[1]=t(e[1]),e)))}da(t=ke){const e=[],n=super.entries();for(var r;!(r=n.next()).done;)(r=r.value)[0]=t(r[0]),r[1]=t(r[1]),e.push(r);return e}clear(){Te(this),super.clear();}delete(t){return Te(this),super.delete(this.S(t,!0,!1))}entries(){if(this.I){var t=super.keys();t=new gt(t,Se,this);}else t=super.entries();return t}values(){if(this.I){var t=super.keys();t=new gt(t,Ae.prototype.get,this);}else t=super.values();return t}forEach(t,e){this.I?super.forEach(((n,r,i)=>{t.call(e,i.get(r),r,i);})):super.forEach(t,e);}set(t,e){return Te(this),null==(t=this.S(t,!0,!1))?this:null==e?(super.delete(t),this):super.set(t,this.X(e,!0,!0,this.I,!1,this.M))}Ja(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.I?void 0===t?null:t:this.X(t,!1,!0,void 0,!1,this.M),super.set(e,t);}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(void 0!==e){var n=this.I;return n?((n=this.X(e,!1,!0,n,this.pa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function be(t,e,n,r,i,s){return t=pe(t,r,n,s),i&&(t=je(t)),t}function ke(t){return t}function Se(t){return [t,this.get(t)]}let xe,Le,Re,Fe;function Ie(){return xe||=new Ae(it([]),void 0,void 0,void 0,ye)}function Me(t,e,n,r,i){if(null!=t){if(Array.isArray(t)){const s=0|t[Q];return 0===t.length&&1&s?void 0:i&&2&s?t:Pe(t,e,n,void 0!==r,i)}return e(t,r)}}function Pe(t,e,n,r,i){const s=r||n?0|t[Q]:0,o=r?!!(32&s):void 0;let a=0;const c=(r=ct(t)).length;for(let t=0;t<c;t++){var h=r[t];if(t===c-1&&lt(h)){var u=e,l=n,d=o,f=i;let t;for(let e in h){const n=Me(h[e],u,l,d,f);null!=n&&((t??={})[e]=n);}h=t;}else h=Me(r[t],e,n,o,i);r[t]=h,null!=h&&(a=t+1);}return a<c&&(r.length=a),n&&((t=mt(t))&&(r[q]=ct(t)),n(s,r)),r}function Ce(t){return Me(t,Oe,void 0,void 0,!1)}function Oe(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return bt(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(C(t))return C(t)&&H(Z),R(t);if(t.W===ut)return Ue(t);if(t instanceof N){const e=t.g;return null==e?"":"string"==typeof e?e:t.g=R(e)}return t instanceof Ae?t.La():void 0}return t}function Ue(t){var e=t.u;t=Pe(e,Oe,void 0,void 0,!1);var n=0|e[Q];if((e=t.length)&&!(512&n)){var r=t[e-1],i=!1;lt(r)?(e--,i=!0):r=void 0;var s=e-(n=512&n?0:-1),o=(Le??me)(s,n,t,r);if(r&&(t[e]=void 0),s<o&&r){for(var a in s=!0,r){const c=+a;c<=o?(t[i=c+n]=r[a],e=Math.max(i+1,e),i=!1,delete r[a]):s=!1;}s&&(r=void 0);}for(s=e-1;e>0;s=e-1)if(null==(a=t[s]))e--,i=!0;else {if(!((s-=n)>=o))break;(r??={})[s]=a,e--,i=!0;}i&&(t.length=e),r&&t.push(r);}return t}function De(t,e,n){return t=Ne(t,e[0],e[1],n?1:2),e!==Re&&n&&nt(t,8192),t}function Ne(t,e,n,r){if(null==t){var i=96;n?(t=[n],i|=512):t=[],e&&(i=-16760833&i|(1023&e)<<14);}else {if(!Array.isArray(t))throw Error("narr");if(8192&(i=0|t[Q])||!(64&i)||2&i||H(J),1024&i)throw Error("farr");if(64&i)return t;if(1===r||2===r||(i|=64),n&&(i|=512,n!==t[0]))throw Error("mid");t:{var s=(n=t).length;if(s){var o=s-1;if(lt(r=n[o])){if((o-=e=512&(i|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var a in r)(s=+a)<o&&(n[s+e]=r[a],delete r[a]);i=-16760833&i|(1023&o)<<14;break t}}if(e){if((a=Math.max(e,s-(512&i?0:-1)))>1024)throw Error("spvt");i=-16760833&i|(1023&a)<<14;}}}return rt(t,i),t}function Be(t,e,n=ot){if(null!=t){if(x&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var r=0|t[Q];return 2&r?t:(e&&=0===r||!!(32&r)&&!(64&r||!(16&r)),e?(rt(t,34|r),4&r&&Object.freeze(t),t):Pe(t,Be,4&r?ot:n,!0,!0))}return t.W===ut?t=2&(r=0|(n=t.u)[Q])?t:new t.constructor(Ge(n,r,!0)):t instanceof Ae&&!(2&t.M)&&(n=it(t.da(Be)),t=new Ae(n,t.I,t.S,t.X)),t}}function Ge(t,e,n){const r=n||2&e?ot:st,i=!!(32&e);return t=function(t,e,n){const r=ct(t);var i=r.length;const s=256&e?r[i-1]:void 0;for(i+=s?-1:0,e=512&e?1:0;e<i;e++)r[e]=n(r[e]);if(s){e=r[e]={};for(const t in s)e[t]=n(s[t]);}return (t=mt(t))&&(r[q]=ct(t)),r}(t,e,(t=>Be(t,i,r))),nt(t,32|(n?2:0)),t}function je(t){const e=t.u,n=0|e[Q];return 2&n?new t.constructor(Ge(e,n,!1)):t}function Ve(t,e){return Xe(t=t.u,0|t[Q],e)}function Xe(t,e,n){if(-1===n)return null;const r=n+(512&e?0:-1),i=t.length-1;return r>=i&&256&e?t[i][n]:r<=i?t[r]:void 0}function He(t,e,n){const r=t.u;let i=0|r[Q];return pt(i),We(r,i,e,n),t}function We(t,e,n,r){const i=512&e?0:-1,s=n+i;var o=t.length-1;return s>=o&&256&e?(t[o][n]=r,e):s<=o?(t[s]=r,e):(void 0!==r&&(n>=(o=e>>14&1023||536870912)?null!=r&&(t[o+i]={[n]:r},rt(t,e|=256)):t[s]=r),e)}function ze(t,e){let n=0|(t=t.u)[Q];const r=Xe(t,n,e),i=qt(r);return null!=i&&i!==r&&We(t,n,e,i),i}function Ke(t){let e=0|(t=t.u)[Q];const n=Xe(t,e,1),r=dt(n,!0);return null!=r&&r!==n&&We(t,e,1,r),r}function Ye(){return void 0===yt?2:4}function $e(t,e,n,r,i){const s=t.u,o=2&(t=0|s[Q])?1:r;i=!!i;let a=0|(r=qe(s,t,e))[Q];if(!(4&a)){4&a&&(r=ct(r),a=pn(a,t),t=We(s,t,e,r));let i=0,o=0;for(;i<r.length;i++){const t=n(r[i]);null!=t&&(r[o++]=t);}o<i&&(r.length=o),a=Je(a,t),n=-2049&(20|a),a=n&=-4097,rt(r,a),2&a&&Object.freeze(r);}return 1===o||4===o&&32&a?Ze(a)||(i=a,a|=2,a!==i&&rt(r,a),Object.freeze(r)):(2===o&&Ze(a)&&(r=ct(r),a=pn(a,t),a=gn(a,t,i),rt(r,a),t=We(s,t,e,r)),Ze(a)||(e=a,a=gn(a,t,i),a!==e&&rt(r,a))),r}function qe(t,e,n){return t=Xe(t,e,n),Array.isArray(t)?t:ht}function Je(t,e){return 0===t&&(t=pn(t,e)),1|t}function Ze(t){return !!(2&t)&&!!(4&t)||!!(1024&t)}function Qe(t){t=ct(t);for(let e=0;e<t.length;e++){const n=t[e]=ct(t[e]);Array.isArray(n[1])&&(n[1]=it(n[1]));}return t}function tn(t,e,n,r){let i=0|(t=t.u)[Q];pt(i),We(t,i,e,("0"===r?0===Number(n):n===r)?void 0:n);}function en(t,e,n,r){pt(e);let i=qe(t,e,n);const s=i!==ht;if(64&e||!(8192&e)||!s){const o=s?0|i[Q]:0;let a=o;(!s||2&a||Ze(a)||4&a&&!(32&a))&&(i=ct(i),a=pn(a,e),e=We(t,e,n,i)),a=-13&Je(a,e),a=gn(r?-17&a:16|a,e,!0),a!==o&&rt(i,a);}return i}function nn(t,e){var n=Ts;return on(rn(t=t.u),t,0|t[Q],n)===e?e:-1}function rn(t){if(W)return t[$]??(t[$]=new Map);if($ in t)return t[$];const e=new Map;return Object.defineProperty(t,$,{value:e}),e}function sn(t,e,n,r){const i=rn(t),s=on(i,t,e,n);return s!==r&&(s&&(e=We(t,e,s)),i.set(n,r)),e}function on(t,e,n,r){let i=t.get(r);if(null!=i)return i;i=0;for(let t=0;t<r.length;t++){const s=r[t];null!=Xe(e,n,s)&&(0!==i&&(n=We(e,n,i)),i=s);}return t.set(r,i),i}function an(t,e,n){let r=0|t[Q];const i=Xe(t,r,n);let s;if(null!=i&&i.W===ut)return (e=je(i))!==i&&We(t,r,n,e),e.u;if(Array.isArray(i)){const t=0|i[Q];s=2&t?De(Ge(i,t,!1),e,!0):64&t?i:De(s,e,!0);}else s=De(void 0,e,!0);return s!==i&&We(t,r,n,s),s}function cn(t,e,n){let r=0|(t=t.u)[Q];const i=Xe(t,r,n);return (e=pe(i,e,!1,r))!==i&&null!=e&&We(t,r,n,e),e}function hn(t,e,n){if(null==(e=cn(t,e,n)))return e;let r=0|(t=t.u)[Q];if(!(2&r)){const i=je(e);i!==e&&We(t,r,n,e=i);}return e}function un(t,e,n,r,i,s,o){t=t.u;var a=!!(2&e);const c=a?1:i;s=!!s,o&&=!a;var h=0|(i=qe(t,e,r))[Q];if(!(a=!!(4&h))){var u=i,l=e;const t=!!(2&(h=Je(h,e)));t&&(l|=2);let r=!t,s=!0,o=0,a=0;for(;o<u.length;o++){const e=pe(u[o],n,!1,l);if(e instanceof n){if(!t){const t=!!(2&(0|e.u[Q]));r&&=!t,s&&=t;}u[a++]=e;}}a<o&&(u.length=a),h|=4,h=s?16|h:-17&h,rt(u,h=r?8|h:-9&h),t&&Object.freeze(u);}if(o&&!(8&h||!i.length&&(1===c||4===c&&32&h))){for(Ze(h)&&(i=ct(i),h=pn(h,e),e=We(t,e,r,i)),n=i,o=h,u=0;u<n.length;u++)(h=n[u])!==(l=je(h))&&(n[u]=l);o|=8,rt(n,o=n.length?-17&o:16|o),h=o;}return 1===c||4===c&&32&h?Ze(h)||(e=h,(h|=!i.length||16&h&&(!a||32&h)?2:1024)!==e&&rt(i,h),Object.freeze(i)):(2===c&&Ze(h)&&(rt(i=ct(i),h=gn(h=pn(h,e),e,s)),e=We(t,e,r,i)),Ze(h)||(r=h,(h=gn(h,e,s))!==r&&rt(i,h))),i}function ln(t,e,n){const r=0|t.u[Q];return un(t,r,e,n,Ye(),!1,!(2&r))}function dn(t,e,n,r){return null==r&&(r=void 0),He(t,n,r)}function fn(t,e,n,r){null==r&&(r=void 0);t:{let i=0|(t=t.u)[Q];if(pt(i),null==r){const r=rn(t);if(on(r,t,i,n)!==e)break t;r.set(n,0);}else i=sn(t,i,n,e);We(t,i,e,r);}}function pn(t,e){return -1025&(t=32|(2&e?2|t:-3&t))}function gn(t,e,n){return 32&e&&n||(t&=-33),t}function mn(t,e,n){pt(0|t.u[Q]),$e(t,e,fe,2,!0).push(le(n));}function yn(t,e,n,r){const i=0|t.u[Q];pt(i),t=un(t,i,n,e,2,!0),r=null!=r?r:new n,t.push(r),t[Q]=2&(0|r.u[Q])?-9&t[Q]:-17&t[Q];}function _n(t,e){return te(Ve(t,e))}function vn(t,e){return fe(Ve(t,e))}function En(t,e){return ze(t,e)??0}function wn(t,e,n){if(null!=n&&"boolean"!=typeof n)throw t=typeof n,Error(`Expected boolean but got ${"object"!=t?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);He(t,e,n);}function Tn(t,e,n){if(null!=n){if("number"!=typeof n)throw X("int32");if(!Kt(n))throw X("int32");n|=0;}He(t,e,n);}function An(t,e,n){if(null!=n&&"number"!=typeof n)throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);He(t,e,n);}function bn(t,e,n){{const o=t.u;let a=0|o[Q];if(pt(a),null==n)We(o,a,e);else {var r=t=0|n[Q],i=Ze(t),s=i||Object.isFrozen(n);for(i||(t=0),s||(n=ct(n),r=0,t=gn(t=pn(t,a),a,!0),s=!1),t|=21,i=0;i<n.length;i++){const e=n[i],o=le(e);Object.is(e,o)||(s&&(n=ct(n),r=0,t=gn(t=pn(t,a),a,!0),s=!1),n[i]=o);}t!==r&&(s&&(n=ct(n),t=gn(t=pn(t,a),a,!0)),rt(n,t)),We(o,a,e,n);}}}function kn(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function Sn(){return Error("Failed to read varint, encoding is invalid.")}function xn(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function Ln(t){if("string"==typeof t)return {buffer:P(t),O:!1};if(Array.isArray(t))return {buffer:new Uint8Array(t),O:!1};if(t.constructor===Uint8Array)return {buffer:t,O:!1};if(t.constructor===ArrayBuffer)return {buffer:new Uint8Array(t),O:!1};if(t.constructor===N)return {buffer:D(t)||new Uint8Array(0),O:!0};if(t instanceof Uint8Array)return {buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Rn(t,e){let n,r=0,i=0,s=0;const o=t.h;let a=t.g;do{n=o[a++],r|=(127&n)<<s,s+=7;}while(s<32&&128&n);for(s>32&&(i|=(127&n)>>4),s=3;s<32&&128&n;s+=7)n=o[a++],i|=(127&n)<<s;if(Dn(t,a),n<128)return e(r>>>0,i>>>0);throw Sn()}function Fn(t){let e=0,n=t.g;const r=n+10,i=t.h;for(;n<r;){const r=i[n++];if(e|=r,0==(128&r))return Dn(t,n),!!(127&e)}throw Sn()}function In(t){const e=t.h;let n=t.g,r=e[n++],i=127&r;if(128&r&&(r=e[n++],i|=(127&r)<<7,128&r&&(r=e[n++],i|=(127&r)<<14,128&r&&(r=e[n++],i|=(127&r)<<21,128&r&&(r=e[n++],i|=r<<28,128&r&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Sn();return Dn(t,n),i}function Mn(t){return In(t)>>>0}function Pn(t){var e=t.h;const n=t.g,r=e[n],i=e[n+1],s=e[n+2];return e=e[n+3],Dn(t,t.g+4),(r<<0|i<<8|s<<16|e<<24)>>>0}function Cn(t){var e=Pn(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,255==n?e?NaN:t*(1/0):0==n?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function On(t){return In(t)}function Un(t,e,{aa:n=!1}={}){t.aa=n,e&&(e=Ln(e),t.h=e.buffer,t.m=e.O,t.j=0,t.l=t.h.length,t.g=t.j);}function Dn(t,e){if(t.g=e,e>t.l)throw xn(t.l,e)}function Nn(t,e){if(e<0)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,r=n+e;if(r>t.l)throw xn(e,t.l-n);return t.g=r,n}function Bn(t,e){if(0==e)return U();var n=Nn(t,e);return t.aa&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):Ft?t.slice(n,e):new Uint8Array(t.subarray(n,e))),0==n.length?U():new N(n,O)}Ae.prototype.toJSON=void 0;var Gn=[];function jn(t){var e=t.g;if(e.g==e.l)return !1;t.l=t.g.g;var n=Mn(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5))throw kn(n,t.l);if(e<1)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Vn(t){switch(t.h){case 0:0!=t.h?Vn(t):Fn(t.g);break;case 1:Dn(t=t.g,t.g+8);break;case 2:if(2!=t.h)Vn(t);else {var e=Mn(t.g);Dn(t=t.g,t.g+e);}break;case 5:Dn(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!jn(t))throw Error("Unmatched start-group tag: stream EOF");if(4==t.h){if(t.m!=e)throw Error("Unmatched end-group tag");break}Vn(t);}break;default:throw kn(t.h,t.l)}}function Xn(t,e,n){const r=t.g.l,i=Mn(t.g),s=t.g.g+i;let o=s-r;if(o<=0&&(t.g.l=s,n(e,t,void 0,void 0,void 0),o=s-t.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${i} bytes, instead read ${i-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=s,t.g.l=r,e}function Hn(t){var o=Mn(t.g),a=Nn(t=t.g,o);if(t=t.h,s){var c,h=t;(c=i)||(c=i=new TextDecoder("utf-8",{fatal:!0})),o=a+o,h=0===a&&o===h.length?h:h.subarray(a,o);try{var u=c.decode(h);}catch(t){if(void 0===r){try{c.decode(new Uint8Array([128]));}catch(t){}try{c.decode(new Uint8Array([97])),r=!0;}catch(t){r=!1;}}throw !r&&(i=void 0),t}}else {o=(u=a)+o,a=[];let r,i=null;for(;u<o;){var l=t[u++];l<128?a.push(l):l<224?u>=o?e():(r=t[u++],l<194||128!=(192&r)?(u--,e()):a.push((31&l)<<6|63&r)):l<240?u>=o-1?e():(r=t[u++],128!=(192&r)||224===l&&r<160||237===l&&r>=160||128!=(192&(c=t[u++]))?(u--,e()):a.push((15&l)<<12|(63&r)<<6|63&c)):l<=244?u>=o-2?e():(r=t[u++],128!=(192&r)||r-144+(l<<28)>>30!=0||128!=(192&(c=t[u++]))||128!=(192&(h=t[u++]))?(u--,e()):(l=(7&l)<<18|(63&r)<<12|(63&c)<<6|63&h,l-=65536,a.push(55296+(l>>10&1023),56320+(1023&l)))):e(),a.length>=8192&&(i=n(i,a),a.length=0);}u=n(i,a);}return u}function Wn(t){const e=Mn(t.g);return Bn(t.g,e)}function zn(t,e,n){var r=Mn(t.g);for(r=t.g.g+r;t.g.g<r;)n.push(e(t.g));}var Kn=[];function Yn(t,e,n){e.g?e.m(t,e.g,e.h,n):e.m(t,e.h,n);}var $n=class{constructor(t,e){this.u=Ne(t,e);}toJSON(){try{var t=Ue(this);}finally{Le=void 0;}return t}l(){var t=_o;return t.g?t.l(this,t.g,t.h):t.l(this,t.h,t.defaultValue)}clone(){const t=this.u;return new this.constructor(Ge(t,0|t[Q],!1))}O(){return !!(2&(0|this.u[Q]))}};function qn(t){return t?/^\d+$/.test(t)?(Vt(t),new Jn(Mt,Pt)):null:Zn||=new Jn(0,0)}$n.prototype.W=ut,$n.prototype.toString=function(){return this.u.toString()};var Jn=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0;}};let Zn;function Qn(t){return t?/^-?\d+$/.test(t)?(Vt(t),new tr(Mt,Pt)):null:er||=new tr(0,0)}var tr=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0;}};let er;function nr(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e);}function rr(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e);}function ir(t,e){if(e>=0)rr(t,e);else {for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1);}}function sr(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255);}function or(t,e){0!==e.length&&(t.l.push(e),t.h+=e.length);}function ar(t,e,n){rr(t.g,8*e+n);}function cr(t,e){return ar(t,e,2),e=t.g.end(),or(t,e),e.push(t.h),e}function hr(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++;}function ur(t,e,n){ar(t,e,2),rr(t.g,n.length),or(t,t.g.end()),or(t,n);}function lr(t,e,n,r){null!=n&&(e=cr(t,e),r(n,t),hr(t,e));}function dr(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var fr=dr(),pr=dr(),gr=dr(),mr=dr(),yr=dr(),_r=dr(),vr=dr(),Er=dr(),wr=dr(),Tr=class{constructor(t,e,n){this.g=t,this.h=e,t=fr,this.l=!!t&&n===t||!1;}};function Ar(t,e){return new Tr(t,e,fr)}function br(t,e,n,r,i){lr(t,n,Or(e,r),i);}const kr=Ar((function(t,e,n,r,i){return 2===t.h&&(Xn(t,an(e,r,n),i),!0)}),br),Sr=Ar((function(t,e,n,r,i){return 2===t.h&&(Xn(t,an(e,r,n),i),!0)}),br);var xr=Symbol(),Lr=Symbol(),Rr=Symbol(),Fr=Symbol();let Ir,Mr;function Pr(t,e,n,r){var i=r[t];if(i)return i;(i={}).Ma=r,i.T=function(t){switch(typeof t){case"boolean":return Re||=[0,void 0,!0];case"number":return t>0?void 0:0===t?Fe||=[0,void 0]:[-t,void 0];case"string":return [0,t];case"object":return t}}(r[0]);var s=r[1];let o=1;s&&s.constructor===Object&&(i.ga=s,"function"==typeof(s=r[++o])&&(i.la=!0,Ir??=s,Mr??=r[o+1],s=r[o+=2]));const a={};for(;s&&Array.isArray(s)&&s.length&&"number"==typeof s[0]&&s[0]>0;){for(var c=0;c<s.length;c++)a[s[c]]=s;s=r[++o];}for(c=1;void 0!==s;){let t;"number"==typeof s&&(c+=s,s=r[++o]);var h=void 0;if(s instanceof Tr?t=s:(t=kr,o--),t?.l){s=r[++o],h=r;var u=o;"function"==typeof s&&(s=s(),h[u]=s),h=s;}for(u=c+1,"number"==typeof(s=r[++o])&&s<0&&(u-=s,s=r[++o]);c<u;c++){const r=a[c];h?n(i,c,t,h,r):e(i,c,t,r);}}return r[t]=i}function Cr(t){return Array.isArray(t)?t[0]instanceof Tr?t:[Sr,t]:[t,void 0]}function Or(t,e){return t instanceof $n?t.u:Array.isArray(t)?De(t,e,!1):void 0}function Ur(t,e,n,r){const i=n.g;t[e]=r?(t,e,n)=>i(t,e,n,r):i;}function Dr(t,e,n,r,i){const s=n.g;let o,a;t[e]=(t,e,n)=>s(t,e,n,a||=Pr(Lr,Ur,Dr,r).T,o||=Nr(r),i);}function Nr(t){let e=t[Rr];if(null!=e)return e;const n=Pr(Lr,Ur,Dr,t);return e=n.la?(t,e)=>Ir(t,e,n):(t,e)=>{const r=0|t[Q];for(;jn(e)&&4!=e.h;){var i=e.m,s=n[i];if(null==s){var o=n.ga;o&&(o=o[i])&&(null!=(o=Br(o))&&(s=n[i]=o));}null!=s&&s(e,t,i)||(i=(s=e).l,Vn(s),s.fa?s=void 0:(o=s.g.g-i,s.g.g=i,s=Bn(s.g,o)),i=t,s&&((o=i[q])?o.push(s):i[q]=[s]));}return 8192&r&&it(t),!0},t[Rr]=e}function Br(t){const e=(t=Cr(t))[0].g;if(t=t[1]){const n=Nr(t),r=Pr(Lr,Ur,Dr,t).T;return (t,i,s)=>e(t,i,s,r,n)}return e}function Gr(t,e,n){t[e]=n.h;}function jr(t,e,n,r){let i,s;const o=n.h;t[e]=(t,e,n)=>o(t,e,n,s||=Pr(xr,Gr,jr,r).T,i||=Vr(r));}function Vr(t){let e=t[Fr];if(!e){const n=Pr(xr,Gr,jr,t);e=(t,e)=>Xr(t,e,n),t[Fr]=e;}return e}function Xr(t,e,n){!function(t,e,n){const r=512&e?0:-1,i=t.length,s=i+((e=64&e?256&e:!!i&&lt(t[i-1]))?-1:0);for(let e=0;e<s;e++)n(e-r,t[e]);if(e){t=t[i-1];for(const e in t)!isNaN(e)&&n(+e,t[e]);}}(t,0|t[Q]|(n.T[1]?512:0),((t,r)=>{if(null!=r){var i=function(t,e){var n=t[e];if(n)return n;if((n=t.ga)&&(n=n[e])){var r=(n=Cr(n))[0].h;if(n=n[1]){const e=Vr(n),i=Pr(xr,Gr,jr,n).T;n=t.la?Mr(i,e):(t,n,s)=>r(t,n,s,i,e);}else n=r;return t[e]=n}}(n,t);i&&i(e,r,t);}})),(t=mt(t))&&function(t,e){or(t,t.g.end());for(let n=0;n<e.length;n++)or(t,D(e[n])||new Uint8Array(0));}(e,t);}function Hr(t,e){if(Array.isArray(e)){var n=0|e[Q];if(4&n)return e;for(var r=0,i=0;r<e.length;r++){const n=t(e[r]);null!=n&&(e[i++]=n);}return i<r&&(e.length=i),rt(e,-6145&(5|n)),2&n&&Object.freeze(e),e}}function Wr(t,e,n){return new Tr(t,e,n)}function zr(t,e,n){return new Tr(t,e,n)}function Kr(t,e,n){We(t,0|t[Q],e,n);}var Yr=Ar((function(t,e,n,r,i){return 2===t.h&&(t=Xn(t,De([void 0,void 0],r,!0),i),pt(r=0|e[Q]),(i=Xe(e,r,n))instanceof Ae?0!=(2&i.M)?((i=i.da()).push(t),We(e,r,n,i)):i.Ja(t):Array.isArray(i)?(2&(0|i[Q])&&We(e,r,n,i=Qe(i)),i.push(t)):We(e,r,n,[t]),!0)}),(function(t,e,n,r,i){if(e instanceof Ae)e.forEach(((e,s)=>{lr(t,n,De([s,e],r,!1),i);}));else if(Array.isArray(e))for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&lr(t,n,De(o,r,!1),i);}}));function $r(t,e,n){if(e=function(t){if(null==t)return t;const e=typeof t;if("bigint"===e)return String(Ht(64,t));if(Qt(t)){if("string"===e)return oe(t);if("number"===e)return se(t)}}(e),null!=e){if("string"==typeof e)Qn(e);if(null!=e)switch(ar(t,n,0),typeof e){case"number":t=t.g,Ot(e),nr(t,Mt,Pt);break;case"bigint":n=BigInt.asUintN(64,e),n=new tr(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),nr(t.g,n.h,n.g);break;default:n=Qn(e),nr(t.g,n.h,n.g);}}}function qr(t,e,n){null!=(e=te(e))&&null!=e&&(ar(t,n,0),ir(t.g,e));}function Jr(t,e,n){null!=(e=Jt(e))&&(ar(t,n,0),t.g.g.push(e?1:0));}function Zr(t,e,n){null!=(e=fe(e))&&ur(t,n,c(e));}function Qr(t,e,n,r,i){lr(t,n,Or(e,r),i);}function ti(t,e,n){null==e||"string"==typeof e||e instanceof N||(C(e)?C(e)&&H(Z):e=void 0),null!=e&&ur(t,n,Ln(e).buffer);}function ei(t,e,n){return (5===t.h||2===t.h)&&(e=en(e,0|e[Q],n,!1),2==t.h?zn(t,Cn,e):e.push(Cn(t.g)),!0)}var ni=Wr((function(t,e,n){if(1!==t.h)return !1;var r=t.g;t=Pn(r);const i=Pn(r);r=2*(i>>31)+1;const s=i>>>20&2047;return t=4294967296*(1048575&i)+t,Kr(e,n,2047==s?t?NaN:r*(1/0):0==s?5e-324*r*t:r*Math.pow(2,s-1075)*(t+4503599627370496)),!0}),(function(t,e,n){null!=(e=qt(e))&&(ar(t,n,1),t=t.g,(n=It||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),Mt=n.getUint32(0,!0),Pt=n.getUint32(4,!0),sr(t,Mt),sr(t,Pt));}),dr()),ri=Wr((function(t,e,n){return 5===t.h&&(Kr(e,n,Cn(t.g)),!0)}),(function(t,e,n){null!=(e=qt(e))&&(ar(t,n,5),t=t.g,Ut(e),sr(t,Mt));}),vr),ii=zr(ei,(function(t,e,n){if(null!=(e=Hr(qt,e)))for(let o=0;o<e.length;o++){var r=t,i=n,s=e[o];null!=s&&(ar(r,i,5),r=r.g,Ut(s),sr(r,Mt));}}),vr),si=zr(ei,(function(t,e,n){if(null!=(e=Hr(qt,e))&&e.length){ar(t,n,2),rr(t.g,4*e.length);for(let r=0;r<e.length;r++)n=t.g,Ut(e[r]),sr(n,Mt);}}),vr),oi=Wr((function(t,e,n){return 0===t.h&&(Kr(e,n,Rn(t.g,Nt)),!0)}),$r,_r),ai=Wr((function(t,e,n){return 0===t.h&&(Kr(e,n,0===(t=Rn(t.g,Nt))?void 0:t),!0)}),$r,_r),ci=Wr((function(t,e,n){return 0===t.h&&(Kr(e,n,Rn(t.g,Dt)),!0)}),(function(t,e,n){if(null!=(e=ue(e))){if("string"==typeof e)qn(e);if(null!=e)switch(ar(t,n,0),typeof e){case"number":t=t.g,Ot(e),nr(t,Mt,Pt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Jn(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),nr(t.g,n.h,n.g);break;default:n=qn(e),nr(t.g,n.h,n.g);}}}),dr()),hi=Wr((function(t,e,n){return 0===t.h&&(Kr(e,n,In(t.g)),!0)}),qr,mr),ui=zr((function(t,e,n){return (0===t.h||2===t.h)&&(e=en(e,0|e[Q],n,!1),2==t.h?zn(t,In,e):e.push(In(t.g)),!0)}),(function(t,e,n){if(null!=(e=Hr(te,e))&&e.length){n=cr(t,n);for(let n=0;n<e.length;n++)ir(t.g,e[n]);hr(t,n);}}),mr),li=Wr((function(t,e,n){return 0===t.h&&(Kr(e,n,0===(t=In(t.g))?void 0:t),!0)}),qr,mr),di=Wr((function(t,e,n){return 0===t.h&&(Kr(e,n,Fn(t.g)),!0)}),Jr,pr),fi=Wr((function(t,e,n){return 0===t.h&&(Kr(e,n,!1===(t=Fn(t.g))?void 0:t),!0)}),Jr,pr),pi=zr((function(t,e,n){return 2===t.h&&(t=Hn(t),en(e,0|e[Q],n,!1).push(t),!0)}),(function(t,e,n){if(null!=(e=Hr(fe,e)))for(let o=0;o<e.length;o++){var r=t,i=n,s=e[o];null!=s&&ur(r,i,c(s));}}),gr),gi=Wr((function(t,e,n){return 2===t.h&&(Kr(e,n,""===(t=Hn(t))?void 0:t),!0)}),Zr,gr),mi=Wr((function(t,e,n){return 2===t.h&&(Kr(e,n,Hn(t)),!0)}),Zr,gr),yi=function(t,e,n=fr){return new Tr(t,e,n)}((function(t,e,n,r,i){return 2===t.h&&(r=De(void 0,r,!0),en(e,0|e[Q],n,!0).push(r),Xn(t,r,i),!0)}),(function(t,e,n,r,i){if(Array.isArray(e))for(let s=0;s<e.length;s++)Qr(t,e[s],n,r,i);})),_i=Ar((function(t,e,n,r,i,s){return 2===t.h&&(sn(e,0|e[Q],s,n),Xn(t,e=an(e,r,n),i),!0)}),Qr),vi=Wr((function(t,e,n){return 2===t.h&&(Kr(e,n,Wn(t)),!0)}),ti,Er),Ei=zr((function(t,e,n){return (0===t.h||2===t.h)&&(e=en(e,0|e[Q],n,!1),2==t.h?zn(t,Mn,e):e.push(Mn(t.g)),!0)}),(function(t,e,n){if(null!=(e=Hr(ee,e)))for(let o=0;o<e.length;o++){var r=t,i=n,s=e[o];null!=s&&(ar(r,i,0),rr(r.g,s));}}),yr),wi=Wr((function(t,e,n){return 0===t.h&&(Kr(e,n,0===(t=Mn(t.g))?void 0:t),!0)}),(function(t,e,n){null!=(e=ee(e))&&null!=e&&(ar(t,n,0),rr(t.g,e));}),yr),Ti=Wr((function(t,e,n){return 0===t.h&&(Kr(e,n,In(t.g)),!0)}),(function(t,e,n){null!=(e=te(e))&&(e=parseInt(e,10),ar(t,n,0),ir(t.g,e));}),wr);class Ai{constructor(t,e){this.h=t,this.g=e,this.l=hn,this.m=dn,this.defaultValue=void 0;}register(){w(this);}}function bi(t,e){return new Ai(t,e)}function ki(t,e){return (n,r)=>{if(Kn.length){const t=Kn.pop();t.o(r),Un(t.g,n,r),n=t;}else n=new class{constructor(t,e){if(Gn.length){const n=Gn.pop();Un(n,t,e),t=n;}else t=new class{constructor(t,e){this.h=null,this.m=!1,this.g=this.l=this.j=0,Un(this,t,e);}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1;}}(t,e);this.g=t,this.l=this.g.g,this.h=this.m=-1,this.o(e);}o({fa:t=!1}={}){this.fa=t;}}(n,r);try{const r=new t,s=r.u;Nr(e)(s,n);var i=r;}finally{n.g.clear(),n.m=-1,n.h=-1,Kn.length<100&&Kn.push(n);}return i}}function Si(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[];}length(){return this.g.length}end(){const t=this.g;return this.g=[],t}};}};Xr(this.u,e,Pr(xr,Gr,jr,t)),or(e,e.g.end());const n=new Uint8Array(e.h),r=e.l,i=r.length;let s=0;for(let t=0;t<i;t++){const e=r[t];n.set(e,s),s+=e.length;}return e.l=[n],n}}var xi=class extends $n{constructor(t){super(t);}},Li=[0,gi,Wr((function(t,e,n){return 2===t.h&&(Kr(e,n,(t=Wn(t))===U()?void 0:t),!0)}),(function(t,e,n){if(null!=e){if(e instanceof $n){const r=e.Oa;return void(r&&(e=r(e),null!=e&&ur(t,n,Ln(e).buffer)))}if(Array.isArray(e))return}ti(t,e,n);}),Er)];let Ri,Fi=globalThis.trustedTypes;function Ii(t){void 0===Ri&&(Ri=function(){let t=null;if(!Fi)return t;try{const e=t=>t;t=Fi.createPolicy("goog#html",{createHTML:e,createScript:e,createScriptURL:e});}catch(t){}return t}());var e=Ri;return new class{constructor(t){this.g=t;}toString(){return this.g+""}}(e?e.createScriptURL(t):t)}function Mi(t,...e){if(0===e.length)return Ii(t[0]);let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return Ii(n)}var Pi=[0,hi,Ti,di,-1,ui,Ti,-1],Ci=class extends $n{constructor(t){super(t);}},Oi=[0,di,mi,di,Ti,-1,zr((function(t,e,n){return (0===t.h||2===t.h)&&(e=en(e,0|e[Q],n,!1),2==t.h?zn(t,On,e):e.push(In(t.g)),!0)}),(function(t,e,n){if(null!=(e=Hr(te,e))&&e.length){n=cr(t,n);for(let n=0;n<e.length;n++)ir(t.g,e[n]);hr(t,n);}}),wr),mi,-1,[0,di,-1],Ti,di,-1],Ui=[0,mi,-2],Di=class extends $n{constructor(t){super(t);}},Ni=[0],Bi=[0,hi,di,1,di,-3],Gi=class extends $n{constructor(t){super(t,2);}},ji={};ji[336783863]=[0,mi,di,-1,hi,[0,[1,2,3,4,5,6,7,8,9],_i,Ni,_i,Oi,_i,Ui,_i,Bi,_i,Pi,_i,[0,mi,-2],_i,[0,mi,Ti],_i,[0,Ti,mi,-1],_i,[0,Ti,-1]],[0,mi],di,[0,[1,3],[2,4],_i,[0,ui],-1,_i,[0,pi],-1,yi,[0,mi,-1]],mi];var Vi=[0,ai,-1,fi,-3,ai,ui,gi,li,ai,-1,fi,li,fi,-2,gi];function Xi(t,e){tn(t,2,de(e),"");}function Hi(t,e){mn(t,3,e);}function Wi(t,e){mn(t,4,e);}var zi=class extends $n{constructor(t){super(t,500);}o(t){return dn(this,0,7,t)}},Ki=[-1,{}],Yi=[0,mi,1,Ki],$i=[0,mi,pi,Ki];function qi(t,e){yn(t,1,zi,e);}function Ji(t,e){mn(t,10,e);}function Zi(t,e){mn(t,15,e);}var Qi=class extends $n{constructor(t){super(t,500);}o(t){return dn(this,0,1001,t)}},ts=[-500,yi,[-500,gi,-1,pi,-3,[-2,ji,di],yi,Li,li,-1,Yi,$i,yi,[0,gi,fi],gi,Vi,li,pi,987,pi],4,yi,[-500,mi,-1,[-1,{}],998,mi],yi,[-500,mi,pi,-1,[-2,{},di],997,pi,-1],li,yi,[-500,mi,pi,Ki,998,pi],pi,li,Yi,$i,yi,[0,gi,-1,Ki],pi,-2,Vi,gi,-1,fi,[0,fi,wi],978,Ki,yi,Li];Qi.prototype.g=Si(ts);var es=ki(Qi,ts),ns=class extends $n{constructor(t){super(t);}},rs=class extends $n{constructor(t){super(t);}g(){return ln(this,ns,1)}},is=[0,yi,[0,hi,ri,mi,-1]],ss=ki(rs,is),os=class extends $n{constructor(t){super(t);}},as=class extends $n{constructor(t){super(t);}},cs=class extends $n{constructor(t){super(t);}h(){return hn(this,os,2)}g(){return ln(this,as,5)}},hs=ki(class extends $n{constructor(t){super(t);}},[0,pi,ui,si,[0,Ti,[0,hi,-3],[0,ri,-3],[0,hi,-1,[0,yi,[0,hi,-2]]],yi,[0,ri,-1,mi,ri]],mi,-1,oi,yi,[0,hi,ri],pi,oi]),us=class extends $n{constructor(t){super(t);}},ls=ki(class extends $n{constructor(t){super(t);}},[0,yi,[0,ri,-4]]),ds=class extends $n{constructor(t){super(t);}},fs=ki(class extends $n{constructor(t){super(t);}},[0,yi,[0,ri,-4]]),ps=class extends $n{constructor(t){super(t);}},gs=[0,hi,-1,si,Ti],ms=class extends $n{constructor(t){super(t);}};ms.prototype.g=Si([0,ri,-4,oi]);var ys=class extends $n{constructor(t){super(t);}},_s=ki(class extends $n{constructor(t){super(t);}},[0,yi,[0,1,hi,mi,is],oi]),vs=class extends $n{constructor(t){super(t);}},Es=class extends $n{constructor(t){super(t);}ma(){const t=Ke(this);return null==t?U():t}},ws=class extends $n{constructor(t){super(t);}},Ts=[1,2],As=ki(class extends $n{constructor(t){super(t);}},[0,yi,[0,Ts,_i,[0,si],_i,[0,vi],hi,mi],oi]),bs=class extends $n{constructor(t){super(t);}},ks=[0,mi,hi,ri,pi,-1],Ss=class extends $n{constructor(t){super(t);}},xs=[0,di,-1],Ls=class extends $n{constructor(t){super(t);}},Rs=[1,2,3,4,5],Fs=class extends $n{constructor(t){super(t);}g(){return null!=Ke(this)}h(){return null!=vn(this,2)}},Is=class extends $n{constructor(t){super(t);}g(){return Jt(Ve(this,2))??!1}},Ms=[0,vi,mi,[0,hi,oi,-1],[0,ci,oi]],Ps=[0,Ms,di,[0,Rs,_i,Bi,_i,Oi,_i,Pi,_i,Ni,_i,Ui],Ti],Cs=class extends $n{constructor(t){super(t);}},Os=[0,Ps,ri,-1,hi],Us=bi(502141897,Cs);ji[502141897]=Os;var Ds=ki(class extends $n{constructor(t){super(t);}},[0,[0,Ti,-1,ii,Ei],gs]),Ns=class extends $n{constructor(t){super(t);}},Bs=class extends $n{constructor(t){super(t);}},Gs=[0,Ps,ri,[0,Ps],di],js=[0,Ps,Os,Gs,ri,[0,[0,Ms]]],Vs=bi(508968150,Bs);ji[508968150]=js,ji[508968149]=Gs;var Xs=class extends $n{constructor(t){super(t);}},Hs=bi(513916220,Xs);ji[513916220]=[0,Ps,js,hi];var Ws=class extends $n{constructor(t){super(t);}h(){return hn(this,bs,2)}g(){He(this,2);}},zs=[0,Ps,ks];ji[478825465]=zs;var Ks=class extends $n{constructor(t){super(t);}},Ys=class extends $n{constructor(t){super(t);}},$s=class extends $n{constructor(t){super(t);}},qs=class extends $n{constructor(t){super(t);}},Js=class extends $n{constructor(t){super(t);}},Zs=[0,Ps,[0,Ps],zs,-1],Qs=[0,Ps,ri,hi],to=[0,Ps,ri],eo=[0,Ps,Qs,to,ri],no=bi(479097054,Js);ji[479097054]=[0,Ps,eo,Zs],ji[463370452]=Zs,ji[464864288]=Qs;var ro=bi(462713202,qs);ji[462713202]=eo,ji[474472470]=to;var io=class extends $n{constructor(t){super(t);}},so=class extends $n{constructor(t){super(t);}},oo=class extends $n{constructor(t){super(t);}},ao=class extends $n{constructor(t){super(t);}},co=[0,Ps,ri,-1,hi],ho=[0,Ps,ri,di];ao.prototype.g=Si([0,Ps,to,[0,Ps],Os,Gs,co,ho]);var uo=class extends $n{constructor(t){super(t);}},lo=bi(456383383,uo);ji[456383383]=[0,Ps,ks];var fo=class extends $n{constructor(t){super(t);}},po=bi(476348187,fo);ji[476348187]=[0,Ps,xs];var go=class extends $n{constructor(t){super(t);}},mo=class extends $n{constructor(t){super(t);}},yo=[0,Ti,-1],_o=bi(458105876,class extends $n{constructor(t){super(t);}g(){var t=this.u;const e=0|t[Q],n=2&e;return t=function(t,e,n){var r=mo;const i=2&e;let s=!1;if(null==n){if(i)return Ie();n=[];}else if(n.constructor===Ae){if(0==(2&n.M)||i)return n;n=n.da();}else Array.isArray(n)?s=!!(2&(0|n[Q])):n=[];if(i){if(!n.length)return Ie();s||(s=!0,it(n));}else s&&(s=!1,n=Qe(n));return s||(64&(0|n[Q])?n[Q]&=-33:32&e&&nt(n,32)),We(t,e,2,r=new Ae(n,r,ge,void 0)),r}(t,e,Xe(t,e,2)),!n&&mo&&(t.pa=!0),t}});ji[458105876]=[0,yo,Yr,[!0,oi,[0,mi,-1,pi]]];var vo=class extends $n{constructor(t){super(t);}},Eo=bi(458105758,vo);ji[458105758]=[0,Ps,mi,yo];var wo=class extends $n{constructor(t){super(t);}},To=bi(443442058,wo);ji[443442058]=[0,Ps,mi,hi,ri,pi,-1,di,ri],ji[514774813]=co;var Ao=class extends $n{constructor(t){super(t);}},bo=bi(516587230,Ao);function ko(t,e){return e=e?e.clone():new bs,void 0!==t.displayNamesLocale?He(e,1,de(t.displayNamesLocale)):void 0===t.displayNamesLocale&&He(e,1),void 0!==t.maxResults?Tn(e,2,t.maxResults):"maxResults"in t&&He(e,2),void 0!==t.scoreThreshold?An(e,3,t.scoreThreshold):"scoreThreshold"in t&&He(e,3),void 0!==t.categoryAllowlist?bn(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&He(e,4),void 0!==t.categoryDenylist?bn(e,5,t.categoryDenylist):"categoryDenylist"in t&&He(e,5),e}function So(t,e=-1,n=""){return {categories:t.map((t=>({index:_n(t,1)??0??-1,score:En(t,2)??0,categoryName:vn(t,3)??""??"",displayName:vn(t,4)??""??""}))),headIndex:e,headName:n}}function xo(t){var e=$e(t,3,qt,Ye()),n=$e(t,2,te,Ye()),r=$e(t,1,fe,Ye()),i=$e(t,9,fe,Ye());const s={categories:[],keypoints:[]};for(let t=0;t<e.length;t++)s.categories.push({score:e[t],index:n[t]??-1,categoryName:r[t]??"",displayName:i[t]??""});if((e=hn(t,cs,4)?.h())&&(s.boundingBox={originX:_n(e,1)??0,originY:_n(e,2)??0,width:_n(e,3)??0,height:_n(e,4)??0,angle:0}),hn(t,cs,4)?.g().length)for(const e of hn(t,cs,4).g())s.keypoints.push({x:ze(e,1)??0,y:ze(e,2)??0,score:ze(e,4)??0,label:vn(e,3)??""});return s}function Lo(t){const e=[];for(const n of ln(t,ds,1))e.push({x:En(n,1)??0,y:En(n,2)??0,z:En(n,3)??0,visibility:En(n,4)??0});return e}function Ro(t){const e=[];for(const n of ln(t,us,1))e.push({x:En(n,1)??0,y:En(n,2)??0,z:En(n,3)??0,visibility:En(n,4)??0});return e}function Fo(t){return Array.from(t,(t=>t>127?t-256:t))}function Io(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,r=0,i=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],r+=t[s]*t[s],i+=e[s]*e[s];if(r<=0||i<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(r*i)}let Mo;ji[516587230]=[0,Ps,co,ho,ri],ji[518928384]=ho;const Po=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Co(){if(void 0===Mo)try{await WebAssembly.instantiate(Po),Mo=!0;}catch{Mo=!1;}return Mo}async function Oo(t,e=Mi``){const n=await Co()?"wasm_internal":"wasm_nosimd_internal";return {wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Uo=class{};function Do(){var t=navigator;return "undefined"!=typeof OffscreenCanvas&&(!function(t=navigator){return (t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function No(t){if("function"!=typeof importScripts){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((t,n)=>{e.addEventListener("load",(()=>{t();}),!1),e.addEventListener("error",(t=>{n(t);}),!1),document.body.appendChild(e);}))}importScripts(t.toString());}function Bo(t){return void 0!==t.videoWidth?[t.videoWidth,t.videoHeight]:void 0!==t.naturalWidth?[t.naturalWidth,t.naturalHeight]:void 0!==t.displayWidth?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Go(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e);}function jo(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[r,i]=Bo(e);return !t.l||r===t.i.canvas.width&&i===t.i.canvas.height||(t.i.canvas.width=r,t.i.canvas.height=i),[r,i]}function Vo(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const r=new Uint32Array(e.length);for(let n=0;n<e.length;n++)r[n]=t.i.stringToNewUTF8(e[n]);e=t.i._malloc(4*r.length),t.i.HEAPU32.set(r,e>>2),n(e);for(const e of r)t.i._free(e);t.i._free(e);}function Xo(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n;}function Ho(t,e,n){let r=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(t,e,i)=>{e?(n(r,i),r=[]):r.push(t);};}Uo.forVisionTasks=function(t){return Oo("vision",t)},Uo.forTextTasks=function(t){return Oo("text",t)},Uo.forGenAiExperimentalTasks=function(t){return Oo("genai_experimental",t)},Uo.forGenAiTasks=function(t){return Oo("genai",t)},Uo.forAudioTasks=function(t){return Oo("audio",t)},Uo.isSimdSupported=function(){return Co()};async function Wo(t,e,n,r){return t=await(async(t,e,n,r,i)=>{if(e&&await No(e),!self.ModuleFactory)throw Error("ModuleFactory not set.");if(n&&(await No(n),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&i&&((e=self.Module).locateFile=i.locateFile,i.mainScriptUrlOrBlob&&(e.mainScriptUrlOrBlob=i.mainScriptUrlOrBlob)),i=await self.ModuleFactory(self.Module||i),self.ModuleFactory=self.Module=void 0,new t(i,r)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:t=>t.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&t.endsWith(".data")?n.assetBinaryPath.toString():t}),await t.o(r),t}function zo(t,e){const n=hn(t.baseOptions,Fs,1)||new Fs;"string"==typeof e?(He(n,2,de(e)),He(n,1)):e instanceof Uint8Array&&(He(n,1,dt(e,!1)),He(n,2)),dn(t.baseOptions,0,1,n);}function Ko(t){try{const e=t.G.length;if(1===e)throw Error(t.G[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.G.map((t=>t.message)).join(", "))}finally{t.G=[];}}function Yo(t,e){t.B=Math.max(t.B,e);}function $o(t,e){t.A=new zi,Xi(t.A,"PassThroughCalculator"),Hi(t.A,"free_memory"),Wi(t.A,"free_memory_unused_out"),Ji(e,"free_memory"),qi(e,t.A);}function qo(t,e){Hi(t.A,e),Wi(t.A,e+"_unused_out");}function Jo(t){t.g.addBoolToStream(!0,"free_memory",t.B);}var Zo=class{constructor(t){this.g=t,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1);}l(t,e=!0){if(e){const e=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(hn(this.baseOptions,Fs,1)?.g()||hn(this.baseOptions,Fs,1)?.h()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(t,e){let n=hn(t.baseOptions,Ls,3);if(!n){var r=n=new Ls,i=new Di;fn(r,4,Rs,i);}"delegate"in e&&("GPU"===e.delegate?(e=n,r=new Ci,fn(e,2,Rs,r)):(e=n,r=new Di,fn(e,4,Rs,r))),dn(t.baseOptions,0,3,n);}(this,e),e.modelAssetPath)return fetch(e.modelAssetPath.toString()).then((t=>{if(t.ok)return t.arrayBuffer();throw Error(`Failed to fetch model: ${e.modelAssetPath} (${t.status})`)})).then((t=>{try{this.g.i.FS_unlink("/model.dat");}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(t),!0,!1,!1),zo(this,"/model.dat"),this.m(),this.J();}));if(e.modelAssetBuffer instanceof Uint8Array)zo(this,e.modelAssetBuffer);else if(e.modelAssetBuffer)return async function(t){const e=[];for(var n=0;;){const{done:r,value:i}=await t.read();if(r)break;e.push(i),n+=i.length;}if(0===e.length)return new Uint8Array(0);if(1===e.length)return e[0];t=new Uint8Array(n),n=0;for(const r of e)t.set(r,n),n+=r.length;return t}(e.modelAssetBuffer).then((t=>{zo(this,t),this.m(),this.J();}))}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let t;if(this.g.ca((e=>{t=es(e);})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((t,e)=>{this.G.push(Error(e));})),this.g.Ha(),this.g.setGraph(t,e),this.A=void 0,Ko(this);}finishProcessing(){this.g.finishProcessing(),Ko(this);}close(){this.A=void 0,this.g.closeGraph();}};function Qo(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Zo.prototype.close=Zo.prototype.close;class ta{constructor(t,e,n,r){this.g=t,this.h=e,this.m=n,this.l=r;}bind(){this.g.bindVertexArray(this.h);}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l);}}function ea(t,e,n){const r=t.g;if(n=Qo(r.createShader(n),"Failed to create WebGL shader"),r.shaderSource(n,e),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);return r.attachShader(t.h,n),n}function na(t,e){const n=t.g,r=Qo(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(r);const i=Qo(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,i),n.enableVertexAttribArray(t.P),n.vertexAttribPointer(t.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Qo(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new ta(n,r,i,s)}function ra(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e;}function ia(t,e,n,r){return ra(t,e),t.h||(t.m(),t.C()),n?(t.s||(t.s=na(t,!0)),n=t.s):(t.v||(t.v=na(t,!1)),n=t.v),e.useProgram(t.h),n.bind(),t.l(),t=r(),n.g.bindVertexArray(null),t}function sa(t,e,n){return ra(t,e),t=Qo(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function oa(t,e,n){ra(t,e),t.A||(t.A=Qo(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.A),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);}function aa(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null);}var ca=class{G(){return "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n "}m(){const t=this.g;if(this.h=Qo(t.createProgram(),"Failed to create WebGL program"),this.Z=ea(this,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",t.VERTEX_SHADER),this.Y=ea(this,this.G(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.P=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex");}C(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.Z),t.deleteShader(this.Y);}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close();}};function la(t,e){switch(e){case 0:return t.g.find((t=>t instanceof Uint8Array));case 1:return t.g.find((t=>t instanceof Float32Array));case 2:return t.g.find((t=>"undefined"!=typeof WebGLTexture&&t instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function da(t){var e=la(t,1);if(!e){if(e=la(t,0))e=new Float32Array(e).map((t=>t/255));else {e=new Float32Array(t.width*t.height);const r=pa(t);var n=ma(t);if(oa(n,r,fa(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),r.readPixels(0,0,t.width,t.height,r.RGBA,r.FLOAT,n);for(let t=0,r=0;t<e.length;++t,r+=4)e[t]=n[r];}else r.readPixels(0,0,t.width,t.height,r.RED,r.FLOAT,e);}t.g.push(e);}return e}function fa(t){let e=la(t,2);if(!e){const n=pa(t);e=ya(t);const r=da(t),i=ga(t);n.texImage2D(n.TEXTURE_2D,0,i,t.width,t.height,0,n.RED,n.FLOAT,r),_a(t);}return e}function pa(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Qo(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function ga(t){if(t=pa(t),!va)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))va=t.R32F;else {if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");va=t.R16F;}return va}function ma(t){return t.l||(t.l=new ca),t.l}function ya(t){const e=pa(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=la(t,2);return n||(n=sa(ma(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function _a(t){t.h.bindTexture(t.h.TEXTURE_2D,null);}var va,Ea=class{constructor(t,e,n,r,i,s,o){this.g=t,this.m=e,this.j=n,this.canvas=r,this.l=i,this.width=s,this.height=o,this.j&&(0===--wa&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources."));}Da(){return !!la(this,0)}ja(){return !!la(this,1)}R(){return !!la(this,2)}ia(){return (e=la(t=this,0))||(e=da(t),e=new Uint8Array(e.map((t=>255*t))),t.g.push(e)),e;var t,e;}ha(){return da(this)}N(){return fa(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else {if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const t=pa(this),e=ma(this);t.activeTexture(t.TEXTURE1),n=sa(e,t,this.m?t.LINEAR:t.NEAREST),t.bindTexture(t.TEXTURE_2D,n);const r=ga(this);t.texImage2D(t.TEXTURE_2D,0,r,this.width,this.height,0,t.RED,t.FLOAT,null),t.bindTexture(t.TEXTURE_2D,null),oa(e,t,n),ia(e,t,!1,(()=>{ya(this),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),_a(this);})),aa(e),_a(this);}}t.push(n);}return new Ea(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&pa(this).deleteTexture(la(this,2)),wa=-1;}};Ea.prototype.close=Ea.prototype.close,Ea.prototype.clone=Ea.prototype.clone,Ea.prototype.getAsWebGLTexture=Ea.prototype.N,Ea.prototype.getAsFloat32Array=Ea.prototype.ha,Ea.prototype.getAsUint8Array=Ea.prototype.ia,Ea.prototype.hasWebGLTexture=Ea.prototype.R,Ea.prototype.hasFloat32Array=Ea.prototype.ja,Ea.prototype.hasUint8Array=Ea.prototype.Da;var wa=250;function Ma(t,e){switch(e){case 0:return t.g.find((t=>t instanceof ImageData));case 1:return t.g.find((t=>"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap));case 2:return t.g.find((t=>"undefined"!=typeof WebGLTexture&&t instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Pa(t){var e=Ma(t,0);if(!e){e=Oa(t);const n=Ua(t),r=new Uint8Array(t.width*t.height*4);oa(n,e,Ca(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,r),aa(n),e=new ImageData(new Uint8ClampedArray(r.buffer),t.width,t.height),t.g.push(e);}return e}function Ca(t){let e=Ma(t,2);if(!e){const n=Oa(t);e=Da(t);const r=Ma(t,1)||Pa(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r),Na(t);}return e}function Oa(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Qo(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Ua(t){return t.l||(t.l=new ca),t.l}function Da(t){const e=Oa(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ma(t,2);return n||(n=sa(Ua(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Na(t){t.h.bindTexture(t.h.TEXTURE_2D,null);}function Ba(t){const e=Oa(t);return ia(Ua(t),e,!0,(()=>function(t,e){const n=t.canvas;if(n.width===t.width&&n.height===t.height)return e();const r=n.width,i=n.height;return n.width=t.width,n.height=t.height,t=e(),n.width=r,n.height=i,t}(t,(()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))))}var Ga=class{constructor(t,e,n,r,i,s,o){this.g=t,this.j=e,this.m=n,this.canvas=r,this.l=i,this.width=s,this.height=o,(this.j||this.m)&&(0===--ja&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources."));}Ca(){return !!Ma(this,0)}ka(){return !!Ma(this,1)}R(){return !!Ma(this,2)}Aa(){return Pa(this)}za(){var t=Ma(this,1);return t||(Ca(this),Da(this),t=Ba(this),Na(this),this.g.push(t),this.j=!0),t}N(){return Ca(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const t=Oa(this),e=Ua(this);t.activeTexture(t.TEXTURE1),n=sa(e,t),t.bindTexture(t.TEXTURE_2D,n),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width,this.height,0,t.RGBA,t.UNSIGNED_BYTE,null),t.bindTexture(t.TEXTURE_2D,null),oa(e,t,n),ia(e,t,!1,(()=>{Da(this),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),Na(this);})),aa(e),Na(this);}else {if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);Ca(this),Da(this),n=Ba(this),Na(this);}t.push(n);}return new Ga(t,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ma(this,1).close(),this.m&&Oa(this).deleteTexture(Ma(this,2)),ja=-1;}};Ga.prototype.close=Ga.prototype.close,Ga.prototype.clone=Ga.prototype.clone,Ga.prototype.getAsWebGLTexture=Ga.prototype.N,Ga.prototype.getAsImageBitmap=Ga.prototype.za,Ga.prototype.getAsImageData=Ga.prototype.Aa,Ga.prototype.hasWebGLTexture=Ga.prototype.R,Ga.prototype.hasImageBitmap=Ga.prototype.ka,Ga.prototype.hasImageData=Ga.prototype.Ca;var ja=250;function Va(...t){return t.map((([t,e])=>({start:t,end:e})))}const Xa=function(t){return class extends t{Ha(){this.i._registerModelResourcesGraphService();}}}((Ha=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m="function"==typeof this.i._addIntToInputStream,void 0!==e?this.i.canvas=e:Do()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"));}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t);}setGraphFromString(t){this.setGraph((new TextEncoder).encode(t),!1);}setGraph(t,e){const n=t.length,r=this.i._malloc(n);this.i.HEAPU8.set(t,r),e?this.i._changeBinaryGraph(n,r):this.i._changeTextGraph(n,r),this.i._free(r);}configureAudio(t,e,n,r,i){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Go(this,r||"input_audio",(r=>{Go(this,i=i||"audio_header",(i=>{this.i._configureAudio(r,i,t,e??0,n);}));}));}setAutoResizeCanvas(t){this.l=t;}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t);}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t;}ca(t){Xo(this,"__graph_config__",(e=>{t(e);})),Go(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0);})),delete this.i.simpleListeners.__graph_config__;}attachErrorListener(t){this.i.errorListener=t;}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e;}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n);}addAudioToStreamWithShape(t,e,n,r,i){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Go(this,r,(t=>{this.i._addAudioToInputStream(this.g,e,n,t,i);}));}addGpuBufferToStream(t,e,n){Go(this,e,(e=>{const[r,i]=jo(this,t,e);this.i._addBoundTextureToStream(e,r,i,n);}));}addBoolToStream(t,e,n){Go(this,e,(e=>{this.i._addBoolToInputStream(t,e,n);}));}addDoubleToStream(t,e,n){Go(this,e,(e=>{this.i._addDoubleToInputStream(t,e,n);}));}addFloatToStream(t,e,n){Go(this,e,(e=>{this.i._addFloatToInputStream(t,e,n);}));}addIntToStream(t,e,n){Go(this,e,(e=>{this.i._addIntToInputStream(t,e,n);}));}addUintToStream(t,e,n){Go(this,e,(e=>{this.i._addUintToInputStream(t,e,n);}));}addStringToStream(t,e,n){Go(this,e,(e=>{Go(this,t,(t=>{this.i._addStringToInputStream(t,e,n);}));}));}addStringRecordToStream(t,e,n){Go(this,e,(e=>{Vo(this,Object.keys(t),(r=>{Vo(this,Object.values(t),(i=>{this.i._addFlatHashMapToInputStream(r,i,Object.keys(t).length,e,n);}));}));}));}addProtoToStream(t,e,n,r){Go(this,n,(n=>{Go(this,e,(e=>{const i=this.i._malloc(t.length);this.i.HEAPU8.set(t,i),this.i._addProtoToInputStream(i,t.length,e,n,r),this.i._free(i);}));}));}addEmptyPacketToStream(t,e){Go(this,t,(t=>{this.i._addEmptyPacketToInputStream(t,e);}));}addBoolVectorToStream(t,e,n){Go(this,e,(e=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const e of t)this.i._addBoolVectorEntry(r,e);this.i._addBoolVectorToInputStream(r,e,n);}));}addDoubleVectorToStream(t,e,n){Go(this,e,(e=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const e of t)this.i._addDoubleVectorEntry(r,e);this.i._addDoubleVectorToInputStream(r,e,n);}));}addFloatVectorToStream(t,e,n){Go(this,e,(e=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const e of t)this.i._addFloatVectorEntry(r,e);this.i._addFloatVectorToInputStream(r,e,n);}));}addIntVectorToStream(t,e,n){Go(this,e,(e=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const e of t)this.i._addIntVectorEntry(r,e);this.i._addIntVectorToInputStream(r,e,n);}));}addUintVectorToStream(t,e,n){Go(this,e,(e=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const e of t)this.i._addUintVectorEntry(r,e);this.i._addUintVectorToInputStream(r,e,n);}));}addStringVectorToStream(t,e,n){Go(this,e,(e=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const e of t)Go(this,e,(t=>{this.i._addStringVectorEntry(r,t);}));this.i._addStringVectorToInputStream(r,e,n);}));}addBoolToInputSidePacket(t,e){Go(this,e,(e=>{this.i._addBoolToInputSidePacket(t,e);}));}addDoubleToInputSidePacket(t,e){Go(this,e,(e=>{this.i._addDoubleToInputSidePacket(t,e);}));}addFloatToInputSidePacket(t,e){Go(this,e,(e=>{this.i._addFloatToInputSidePacket(t,e);}));}addIntToInputSidePacket(t,e){Go(this,e,(e=>{this.i._addIntToInputSidePacket(t,e);}));}addUintToInputSidePacket(t,e){Go(this,e,(e=>{this.i._addUintToInputSidePacket(t,e);}));}addStringToInputSidePacket(t,e){Go(this,e,(e=>{Go(this,t,(t=>{this.i._addStringToInputSidePacket(t,e);}));}));}addProtoToInputSidePacket(t,e,n){Go(this,n,(n=>{Go(this,e,(e=>{const r=this.i._malloc(t.length);this.i.HEAPU8.set(t,r),this.i._addProtoToInputSidePacket(r,t.length,e,n),this.i._free(r);}));}));}addBoolVectorToInputSidePacket(t,e){Go(this,e,(e=>{const n=this.i._allocateBoolVector(t.length);if(!n)throw Error("Unable to allocate new bool vector on heap.");for(const e of t)this.i._addBoolVectorEntry(n,e);this.i._addBoolVectorToInputSidePacket(n,e);}));}addDoubleVectorToInputSidePacket(t,e){Go(this,e,(e=>{const n=this.i._allocateDoubleVector(t.length);if(!n)throw Error("Unable to allocate new double vector on heap.");for(const e of t)this.i._addDoubleVectorEntry(n,e);this.i._addDoubleVectorToInputSidePacket(n,e);}));}addFloatVectorToInputSidePacket(t,e){Go(this,e,(e=>{const n=this.i._allocateFloatVector(t.length);if(!n)throw Error("Unable to allocate new float vector on heap.");for(const e of t)this.i._addFloatVectorEntry(n,e);this.i._addFloatVectorToInputSidePacket(n,e);}));}addIntVectorToInputSidePacket(t,e){Go(this,e,(e=>{const n=this.i._allocateIntVector(t.length);if(!n)throw Error("Unable to allocate new int vector on heap.");for(const e of t)this.i._addIntVectorEntry(n,e);this.i._addIntVectorToInputSidePacket(n,e);}));}addUintVectorToInputSidePacket(t,e){Go(this,e,(e=>{const n=this.i._allocateUintVector(t.length);if(!n)throw Error("Unable to allocate new unsigned int vector on heap.");for(const e of t)this.i._addUintVectorEntry(n,e);this.i._addUintVectorToInputSidePacket(n,e);}));}addStringVectorToInputSidePacket(t,e){Go(this,e,(e=>{const n=this.i._allocateStringVector(t.length);if(!n)throw Error("Unable to allocate new string vector on heap.");for(const e of t)Go(this,e,(t=>{this.i._addStringVectorEntry(n,t);}));this.i._addStringVectorToInputSidePacket(n,e);}));}attachBoolListener(t,e){Xo(this,t,e),Go(this,t,(t=>{this.i._attachBoolListener(t);}));}attachBoolVectorListener(t,e){Ho(this,t,e),Go(this,t,(t=>{this.i._attachBoolVectorListener(t);}));}attachIntListener(t,e){Xo(this,t,e),Go(this,t,(t=>{this.i._attachIntListener(t);}));}attachIntVectorListener(t,e){Ho(this,t,e),Go(this,t,(t=>{this.i._attachIntVectorListener(t);}));}attachUintListener(t,e){Xo(this,t,e),Go(this,t,(t=>{this.i._attachUintListener(t);}));}attachUintVectorListener(t,e){Ho(this,t,e),Go(this,t,(t=>{this.i._attachUintVectorListener(t);}));}attachDoubleListener(t,e){Xo(this,t,e),Go(this,t,(t=>{this.i._attachDoubleListener(t);}));}attachDoubleVectorListener(t,e){Ho(this,t,e),Go(this,t,(t=>{this.i._attachDoubleVectorListener(t);}));}attachFloatListener(t,e){Xo(this,t,e),Go(this,t,(t=>{this.i._attachFloatListener(t);}));}attachFloatVectorListener(t,e){Ho(this,t,e),Go(this,t,(t=>{this.i._attachFloatVectorListener(t);}));}attachStringListener(t,e){Xo(this,t,e),Go(this,t,(t=>{this.i._attachStringListener(t);}));}attachStringVectorListener(t,e){Ho(this,t,e),Go(this,t,(t=>{this.i._attachStringVectorListener(t);}));}attachProtoListener(t,e,n){Xo(this,t,e),Go(this,t,(t=>{this.i._attachProtoListener(t,n||!1);}));}attachProtoVectorListener(t,e,n){Ho(this,t,e),Go(this,t,(t=>{this.i._attachProtoVectorListener(t,n||!1);}));}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Xo(this,t,((t,n)=>{t=new Float32Array(t.buffer,t.byteOffset,t.length/4),e(t,n);})),Go(this,t,(t=>{this.i._attachAudioListener(t,n||!1);}));}finishProcessing(){this.i._waitUntilIdle();}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0;}},class extends Ha{get ea(){return this.i}oa(t,e,n){Go(this,e,(e=>{const[r,i]=jo(this,t,e);this.ea._addBoundTextureAsImageToStream(e,r,i,n);}));}V(t,e){Xo(this,t,e),Go(this,t,(t=>{this.ea._attachImageListener(t);}));}ba(t,e){Ho(this,t,e),Go(this,t,(t=>{this.ea._attachImageVectorListener(t);}));}}));var Ha,Wa=class extends Xa{};async function za(t,e,n){return async function(t,e,n,r){return Wo(t,e,n,r)}(t,n.canvas??(Do()?void 0:document.createElement("canvas")),e,n)}function Ka(t,e,n,r){if(t.U){const s=new ms;if(n?.regionOfInterest){if(!t.na)throw Error("This task doesn't support region-of-interest.");var i=n.regionOfInterest;if(i.left>=i.right||i.top>=i.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(i.left<0||i.top<0||i.right>1||i.bottom>1)throw Error("Expected RectF values to be in [0,1].");An(s,1,(i.left+i.right)/2),An(s,2,(i.top+i.bottom)/2),An(s,4,i.right-i.left),An(s,3,i.bottom-i.top);}else An(s,1,.5),An(s,2,.5),An(s,4,1),An(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(An(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[t,r]=Bo(e);n=En(s,3)*r/t,i=En(s,4)*t/r,An(s,4,n),An(s,3,i);}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,r);}t.g.oa(e,t.Z,r??performance.now()),t.finishProcessing();}function Ya(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Ka(t,e,n,t.B+1);}function $a(t,e,n,r){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Ka(t,e,n,r);}function qa(t,e,n,r){var i=e.data;const s=e.width,o=s*(e=e.height);if((i instanceof Uint8Array||i instanceof Float32Array)&&i.length!==o)throw Error("Unsupported channel count: "+i.length/o);return t=new Ea([i],n,!1,t.g.i.canvas,t.P,s,e),r?t.clone():t}var Ja=class extends Zo{constructor(t,e,n,r){super(t),this.g=t,this.Z=e,this.U=n,this.na=r,this.P=new ca;}l(t,e=!0){if("runningMode"in t&&wn(this.baseOptions,2,!!t.runningMode&&"IMAGE"!==t.runningMode),void 0!==t.canvas&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close();}};Ja.prototype.close=Ja.prototype.close;var Za=class extends Ja{constructor(t,e){super(new Wa(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},dn(t=this.h=new Cs,0,1,e=new Is),An(this.h,2,.5),An(this.h,3,.3);}get baseOptions(){return hn(this.h,Is,1)}set baseOptions(t){dn(this.h,0,1,t);}o(t){return "minDetectionConfidence"in t&&An(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&An(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}D(t,e){return this.j={detections:[]},Ya(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},$a(this,t,n,e),this.j}m(){var t=new Qi;Ji(t,"image_in"),Ji(t,"norm_rect_in"),Zi(t,"detections");const e=new Gi;Yn(e,Us,this.h);const n=new zi;Xi(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Hi(n,"IMAGE:image_in"),Hi(n,"NORM_RECT:norm_rect_in"),Wi(n,"DETECTIONS:detections"),n.o(e),qi(t,n),this.g.attachProtoVectorListener("detections",((t,e)=>{for(const e of t)t=hs(e),this.j.detections.push(xo(t));Yo(this,e);})),this.g.attachEmptyPacketListener("detections",(t=>{Yo(this,t);})),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};Za.prototype.detectForVideo=Za.prototype.F,Za.prototype.detect=Za.prototype.D,Za.prototype.setOptions=Za.prototype.o,Za.createFromModelPath=async function(t,e){return za(Za,t,{baseOptions:{modelAssetPath:e}})},Za.createFromModelBuffer=function(t,e){return za(Za,t,{baseOptions:{modelAssetBuffer:e}})},Za.createFromOptions=function(t,e){return za(Za,t,e)};var Qa=Va([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),tc=Va([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),ec=Va([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),nc=Va([474,475],[475,476],[476,477],[477,474]),rc=Va([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),ic=Va([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),sc=Va([469,470],[470,471],[471,472],[472,469]),oc=Va([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),ac=[...Qa,...tc,...ec,...rc,...ic,...oc],cc=Va([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function hc(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]};}var uc=class extends Ja{constructor(t,e){super(new Wa(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,dn(t=this.h=new Bs,0,1,e=new Is),this.v=new Ns,dn(this.h,0,3,this.v),this.s=new Cs,dn(this.h,0,2,this.s),Tn(this.s,4,1),An(this.s,2,.5),An(this.v,2,.5),An(this.h,4,.5);}get baseOptions(){return hn(this.h,Is,1)}set baseOptions(t){dn(this.h,0,1,t);}o(t){return "numFaces"in t&&Tn(this.s,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&An(this.s,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&An(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&An(this.v,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}D(t,e){return hc(this),Ya(this,t,e),this.j}F(t,e,n){return hc(this),$a(this,t,n,e),this.j}m(){var t=new Qi;Ji(t,"image_in"),Ji(t,"norm_rect"),Zi(t,"face_landmarks");const e=new Gi;Yn(e,Vs,this.h);const n=new zi;Xi(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Hi(n,"IMAGE:image_in"),Hi(n,"NORM_RECT:norm_rect"),Wi(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),qi(t,n),this.g.attachProtoVectorListener("face_landmarks",((t,e)=>{for(const e of t)t=fs(e),this.j.faceLandmarks.push(Lo(t));Yo(this,e);})),this.g.attachEmptyPacketListener("face_landmarks",(t=>{Yo(this,t);})),this.outputFaceBlendshapes&&(Zi(t,"blendshapes"),Wi(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((t,e)=>{if(this.outputFaceBlendshapes)for(const e of t)t=ss(e),this.j.faceBlendshapes.push(So(t.g()??[]));Yo(this,e);})),this.g.attachEmptyPacketListener("blendshapes",(t=>{Yo(this,t);}))),this.outputFacialTransformationMatrixes&&(Zi(t,"face_geometry"),Wi(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((t,e)=>{if(this.outputFacialTransformationMatrixes)for(const e of t)(t=hn(Ds(e),ps,2))&&this.j.facialTransformationMatrixes.push({rows:_n(t,1)??0??0,columns:_n(t,2)??0??0,data:$e(t,3,qt,Ye()).slice()??[]});Yo(this,e);})),this.g.attachEmptyPacketListener("face_geometry",(t=>{Yo(this,t);}))),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};uc.prototype.detectForVideo=uc.prototype.F,uc.prototype.detect=uc.prototype.D,uc.prototype.setOptions=uc.prototype.o,uc.createFromModelPath=function(t,e){return za(uc,t,{baseOptions:{modelAssetPath:e}})},uc.createFromModelBuffer=function(t,e){return za(uc,t,{baseOptions:{modelAssetBuffer:e}})},uc.createFromOptions=function(t,e){return za(uc,t,e)},uc.FACE_LANDMARKS_LIPS=Qa,uc.FACE_LANDMARKS_LEFT_EYE=tc,uc.FACE_LANDMARKS_LEFT_EYEBROW=ec,uc.FACE_LANDMARKS_LEFT_IRIS=nc,uc.FACE_LANDMARKS_RIGHT_EYE=rc,uc.FACE_LANDMARKS_RIGHT_EYEBROW=ic,uc.FACE_LANDMARKS_RIGHT_IRIS=sc,uc.FACE_LANDMARKS_FACE_OVAL=oc,uc.FACE_LANDMARKS_CONTOURS=ac,uc.FACE_LANDMARKS_TESSELATION=cc;var lc=class extends Ja{constructor(t,e){super(new Wa(t,e),"image_in","norm_rect",!0),dn(t=this.j=new Xs,0,1,e=new Is);}get baseOptions(){return hn(this.j,Is,1)}set baseOptions(t){dn(this.j,0,1,t);}o(t){return super.l(t)}Ka(t,e,n){const r="function"!=typeof e?e:{};if(this.h="function"==typeof e?e:n,Ya(this,t,r??{}),!this.h)return this.s}m(){var t=new Qi;Ji(t,"image_in"),Ji(t,"norm_rect"),Zi(t,"stylized_image");const e=new Gi;Yn(e,Hs,this.j);const n=new zi;Xi(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Hi(n,"IMAGE:image_in"),Hi(n,"NORM_RECT:norm_rect"),Wi(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),qi(t,n),this.g.V("stylized_image",((t,e)=>{var n=!this.h,r=t.data,i=t.width;const s=i*(t=t.height);if(r instanceof Uint8Array)if(r.length===3*s){const e=new Uint8ClampedArray(4*s);for(let t=0;t<s;++t)e[4*t]=r[3*t],e[4*t+1]=r[3*t+1],e[4*t+2]=r[3*t+2],e[4*t+3]=255;r=new ImageData(e,i,t);}else {if(r.length!==4*s)throw Error("Unsupported channel count: "+r.length/s);r=new ImageData(new Uint8ClampedArray(r.buffer,r.byteOffset,r.length),i,t);}else if(!(r instanceof WebGLTexture))throw Error(`Unsupported format: ${r.constructor.name}`);i=new Ga([r],!1,!1,this.g.i.canvas,this.P,i,t),this.s=n=n?i.clone():i,this.h&&this.h(n),Yo(this,e);})),this.g.attachEmptyPacketListener("stylized_image",(t=>{this.s=null,this.h&&this.h(null),Yo(this,t);})),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};lc.prototype.stylize=lc.prototype.Ka,lc.prototype.setOptions=lc.prototype.o,lc.createFromModelPath=function(t,e){return za(lc,t,{baseOptions:{modelAssetPath:e}})},lc.createFromModelBuffer=function(t,e){return za(lc,t,{baseOptions:{modelAssetBuffer:e}})},lc.createFromOptions=function(t,e){return za(lc,t,e)};var dc=Va([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function fc(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[];}function pc(t){return 0===t.gestures.length?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function gc(t,e=!0){const n=[];for(const i of t){var r=ss(i);t=[];for(const n of r.g())r=e&&null!=_n(n,1)?_n(n,1)??0:-1,t.push({score:En(n,2)??0,index:r,categoryName:vn(n,3)??""??"",displayName:vn(n,4)??""??""});n.push(t);}return n}var mc=class extends Ja{constructor(t,e){super(new Wa(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],dn(t=this.j=new Js,0,1,e=new Is),this.s=new qs,dn(this.j,0,2,this.s),this.C=new $s,dn(this.s,0,3,this.C),this.v=new Ys,dn(this.s,0,2,this.v),this.h=new Ks,dn(this.j,0,3,this.h),An(this.v,2,.5),An(this.s,4,.5),An(this.C,2,.5);}get baseOptions(){return hn(this.j,Is,1)}set baseOptions(t){dn(this.j,0,1,t);}o(t){if(Tn(this.v,3,t.numHands??1),"minHandDetectionConfidence"in t&&An(this.v,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&An(this.s,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&An(this.C,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Ws,n=e,r=ko(t.cannedGesturesClassifierOptions,hn(this.h,Ws,3)?.h());dn(n,0,2,r),dn(this.h,0,3,e);}else void 0===t.cannedGesturesClassifierOptions&&hn(this.h,Ws,3)?.g();return t.customGesturesClassifierOptions?(dn(n=e=new Ws,0,2,r=ko(t.customGesturesClassifierOptions,hn(this.h,Ws,4)?.h())),dn(this.h,0,4,e)):void 0===t.customGesturesClassifierOptions&&hn(this.h,Ws,4)?.g(),this.l(t)}Fa(t,e){return fc(this),Ya(this,t,e),pc(this)}Ga(t,e,n){return fc(this),$a(this,t,n,e),pc(this)}m(){var t=new Qi;Ji(t,"image_in"),Ji(t,"norm_rect"),Zi(t,"hand_gestures"),Zi(t,"hand_landmarks"),Zi(t,"world_hand_landmarks"),Zi(t,"handedness");const e=new Gi;Yn(e,no,this.j);const n=new zi;Xi(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Hi(n,"IMAGE:image_in"),Hi(n,"NORM_RECT:norm_rect"),Wi(n,"HAND_GESTURES:hand_gestures"),Wi(n,"LANDMARKS:hand_landmarks"),Wi(n,"WORLD_LANDMARKS:world_hand_landmarks"),Wi(n,"HANDEDNESS:handedness"),n.o(e),qi(t,n),this.g.attachProtoVectorListener("hand_landmarks",((t,e)=>{for(const e of t){t=fs(e);const n=[];for(const e of ln(t,ds,1))n.push({x:En(e,1)??0,y:En(e,2)??0,z:En(e,3)??0,visibility:En(e,4)??0});this.landmarks.push(n);}Yo(this,e);})),this.g.attachEmptyPacketListener("hand_landmarks",(t=>{Yo(this,t);})),this.g.attachProtoVectorListener("world_hand_landmarks",((t,e)=>{for(const e of t){t=ls(e);const n=[];for(const e of ln(t,us,1))n.push({x:En(e,1)??0,y:En(e,2)??0,z:En(e,3)??0,visibility:En(e,4)??0});this.worldLandmarks.push(n);}Yo(this,e);})),this.g.attachEmptyPacketListener("world_hand_landmarks",(t=>{Yo(this,t);})),this.g.attachProtoVectorListener("hand_gestures",((t,e)=>{this.gestures.push(...gc(t,!1)),Yo(this,e);})),this.g.attachEmptyPacketListener("hand_gestures",(t=>{Yo(this,t);})),this.g.attachProtoVectorListener("handedness",((t,e)=>{this.handedness.push(...gc(t)),Yo(this,e);})),this.g.attachEmptyPacketListener("handedness",(t=>{Yo(this,t);})),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};function yc(t){return {landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}mc.prototype.recognizeForVideo=mc.prototype.Ga,mc.prototype.recognize=mc.prototype.Fa,mc.prototype.setOptions=mc.prototype.o,mc.createFromModelPath=function(t,e){return za(mc,t,{baseOptions:{modelAssetPath:e}})},mc.createFromModelBuffer=function(t,e){return za(mc,t,{baseOptions:{modelAssetBuffer:e}})},mc.createFromOptions=function(t,e){return za(mc,t,e)},mc.HAND_CONNECTIONS=dc;var _c=class extends Ja{constructor(t,e){super(new Wa(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],dn(t=this.h=new qs,0,1,e=new Is),this.s=new $s,dn(this.h,0,3,this.s),this.j=new Ys,dn(this.h,0,2,this.j),Tn(this.j,3,1),An(this.j,2,.5),An(this.s,2,.5),An(this.h,4,.5);}get baseOptions(){return hn(this.h,Is,1)}set baseOptions(t){dn(this.h,0,1,t);}o(t){return "numHands"in t&&Tn(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&An(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&An(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&An(this.s,2,t.minHandPresenceConfidence??.5),this.l(t)}D(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ya(this,t,e),yc(this)}F(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],$a(this,t,n,e),yc(this)}m(){var t=new Qi;Ji(t,"image_in"),Ji(t,"norm_rect"),Zi(t,"hand_landmarks"),Zi(t,"world_hand_landmarks"),Zi(t,"handedness");const e=new Gi;Yn(e,ro,this.h);const n=new zi;Xi(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Hi(n,"IMAGE:image_in"),Hi(n,"NORM_RECT:norm_rect"),Wi(n,"LANDMARKS:hand_landmarks"),Wi(n,"WORLD_LANDMARKS:world_hand_landmarks"),Wi(n,"HANDEDNESS:handedness"),n.o(e),qi(t,n),this.g.attachProtoVectorListener("hand_landmarks",((t,e)=>{for(const e of t)t=fs(e),this.landmarks.push(Lo(t));Yo(this,e);})),this.g.attachEmptyPacketListener("hand_landmarks",(t=>{Yo(this,t);})),this.g.attachProtoVectorListener("world_hand_landmarks",((t,e)=>{for(const e of t)t=ls(e),this.worldLandmarks.push(Ro(t));Yo(this,e);})),this.g.attachEmptyPacketListener("world_hand_landmarks",(t=>{Yo(this,t);})),this.g.attachProtoVectorListener("handedness",((t,e)=>{var n=this.handedness,r=n.push;const i=[];for(const e of t){t=ss(e);const n=[];for(const e of t.g())n.push({score:En(e,2)??0,index:_n(e,1)??0??-1,categoryName:vn(e,3)??""??"",displayName:vn(e,4)??""??""});i.push(n);}r.call(n,...i),Yo(this,e);})),this.g.attachEmptyPacketListener("handedness",(t=>{Yo(this,t);})),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};_c.prototype.detectForVideo=_c.prototype.F,_c.prototype.detect=_c.prototype.D,_c.prototype.setOptions=_c.prototype.o,_c.createFromModelPath=function(t,e){return za(_c,t,{baseOptions:{modelAssetPath:e}})},_c.createFromModelBuffer=function(t,e){return za(_c,t,{baseOptions:{modelAssetBuffer:e}})},_c.createFromOptions=function(t,e){return za(_c,t,e)},_c.HAND_CONNECTIONS=dc;var vc=Va([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Ec(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]};}function wc(t){try{if(!t.C)return t.h;t.C(t.h);}finally{Jo(t);}}function Tc(t,e){t=fs(t),e.push(Lo(t));}var Ac=class extends Ja{constructor(t,e){super(new Wa(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,dn(t=this.j=new ao,0,1,e=new Is),this.K=new $s,dn(this.j,0,2,this.K),this.Y=new io,dn(this.j,0,3,this.Y),this.s=new Cs,dn(this.j,0,4,this.s),this.H=new Ns,dn(this.j,0,5,this.H),this.v=new so,dn(this.j,0,6,this.v),this.L=new oo,dn(this.j,0,7,this.L),An(this.s,2,.5),An(this.s,3,.3),An(this.H,2,.5),An(this.v,2,.5),An(this.v,3,.3),An(this.L,2,.5),An(this.K,2,.5);}get baseOptions(){return hn(this.j,Is,1)}set baseOptions(t){dn(this.j,0,1,t);}o(t){return "minFaceDetectionConfidence"in t&&An(this.s,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&An(this.s,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&An(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&An(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&An(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&An(this.L,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&An(this.K,2,t.minHandLandmarksConfidence??.5),this.l(t)}D(t,e,n){const r="function"!=typeof e?e:{};return this.C="function"==typeof e?e:n,Ec(this),Ya(this,t,r),wc(this)}F(t,e,n,r){const i="function"!=typeof n?n:{};return this.C="function"==typeof n?n:r,Ec(this),$a(this,t,i,e),wc(this)}m(){var t=new Qi;Ji(t,"input_frames_image"),Zi(t,"pose_landmarks"),Zi(t,"pose_world_landmarks"),Zi(t,"face_landmarks"),Zi(t,"left_hand_landmarks"),Zi(t,"left_hand_world_landmarks"),Zi(t,"right_hand_landmarks"),Zi(t,"right_hand_world_landmarks");const e=new Gi,n=new xi;tn(n,1,de("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(t,e){if(null!=e)if(Array.isArray(e))He(t,2,Pe(e,Oe,void 0,void 0,!1));else {if(!("string"==typeof e||e instanceof N||C(e)))throw Error("invalid value in Any.value field: "+e+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");tn(t,2,dt(e,!1),U());}}(n,this.j.g());const r=new zi;Xi(r,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),yn(r,8,xi,n),Hi(r,"IMAGE:input_frames_image"),Wi(r,"POSE_LANDMARKS:pose_landmarks"),Wi(r,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Wi(r,"FACE_LANDMARKS:face_landmarks"),Wi(r,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Wi(r,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Wi(r,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Wi(r,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),r.o(e),qi(t,r),$o(this,t),this.g.attachProtoListener("pose_landmarks",((t,e)=>{Tc(t,this.h.poseLandmarks),Yo(this,e);})),this.g.attachEmptyPacketListener("pose_landmarks",(t=>{Yo(this,t);})),this.g.attachProtoListener("pose_world_landmarks",((t,e)=>{var n=this.h.poseWorldLandmarks;t=ls(t),n.push(Ro(t)),Yo(this,e);})),this.g.attachEmptyPacketListener("pose_world_landmarks",(t=>{Yo(this,t);})),this.outputPoseSegmentationMasks&&(Wi(r,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),qo(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((t,e)=>{this.h.poseSegmentationMasks=[qa(this,t,!0,!this.C)],Yo(this,e);})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(t=>{this.h.poseSegmentationMasks=[],Yo(this,t);}))),this.g.attachProtoListener("face_landmarks",((t,e)=>{Tc(t,this.h.faceLandmarks),Yo(this,e);})),this.g.attachEmptyPacketListener("face_landmarks",(t=>{Yo(this,t);})),this.outputFaceBlendshapes&&(Zi(t,"extra_blendshapes"),Wi(r,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((t,e)=>{var n=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(t=ss(t),n.push(So(t.g()??[]))),Yo(this,e);})),this.g.attachEmptyPacketListener("extra_blendshapes",(t=>{Yo(this,t);}))),this.g.attachProtoListener("left_hand_landmarks",((t,e)=>{Tc(t,this.h.leftHandLandmarks),Yo(this,e);})),this.g.attachEmptyPacketListener("left_hand_landmarks",(t=>{Yo(this,t);})),this.g.attachProtoListener("left_hand_world_landmarks",((t,e)=>{var n=this.h.leftHandWorldLandmarks;t=ls(t),n.push(Ro(t)),Yo(this,e);})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(t=>{Yo(this,t);})),this.g.attachProtoListener("right_hand_landmarks",((t,e)=>{Tc(t,this.h.rightHandLandmarks),Yo(this,e);})),this.g.attachEmptyPacketListener("right_hand_landmarks",(t=>{Yo(this,t);})),this.g.attachProtoListener("right_hand_world_landmarks",((t,e)=>{var n=this.h.rightHandWorldLandmarks;t=ls(t),n.push(Ro(t)),Yo(this,e);})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(t=>{Yo(this,t);})),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};Ac.prototype.detectForVideo=Ac.prototype.F,Ac.prototype.detect=Ac.prototype.D,Ac.prototype.setOptions=Ac.prototype.o,Ac.createFromModelPath=function(t,e){return za(Ac,t,{baseOptions:{modelAssetPath:e}})},Ac.createFromModelBuffer=function(t,e){return za(Ac,t,{baseOptions:{modelAssetBuffer:e}})},Ac.createFromOptions=function(t,e){return za(Ac,t,e)},Ac.HAND_CONNECTIONS=dc,Ac.POSE_CONNECTIONS=vc,Ac.FACE_LANDMARKS_LIPS=Qa,Ac.FACE_LANDMARKS_LEFT_EYE=tc,Ac.FACE_LANDMARKS_LEFT_EYEBROW=ec,Ac.FACE_LANDMARKS_LEFT_IRIS=nc,Ac.FACE_LANDMARKS_RIGHT_EYE=rc,Ac.FACE_LANDMARKS_RIGHT_EYEBROW=ic,Ac.FACE_LANDMARKS_RIGHT_IRIS=sc,Ac.FACE_LANDMARKS_FACE_OVAL=oc,Ac.FACE_LANDMARKS_CONTOURS=ac,Ac.FACE_LANDMARKS_TESSELATION=cc;var bc=class extends Ja{constructor(t,e){super(new Wa(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},dn(t=this.h=new uo,0,1,e=new Is);}get baseOptions(){return hn(this.h,Is,1)}set baseOptions(t){dn(this.h,0,1,t);}o(t){return dn(this.h,0,2,ko(t,hn(this.h,bs,2))),this.l(t)}qa(t,e){return this.j={classifications:[]},Ya(this,t,e),this.j}ra(t,e,n){return this.j={classifications:[]},$a(this,t,n,e),this.j}m(){var t=new Qi;Ji(t,"input_image"),Ji(t,"norm_rect"),Zi(t,"classifications");const e=new Gi;Yn(e,lo,this.h);const n=new zi;Xi(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Hi(n,"IMAGE:input_image"),Hi(n,"NORM_RECT:norm_rect"),Wi(n,"CLASSIFICATIONS:classifications"),n.o(e),qi(t,n),this.g.attachProtoListener("classifications",((t,e)=>{this.j=function(t){const e={classifications:ln(t,ys,1).map((t=>So(hn(t,rs,4)?.g()??[],_n(t,2)??0,vn(t,3)??"")))};return null!=he(Ve(t,2))&&(e.timestampMs=he(Ve(t,2))??0),e}(_s(t)),Yo(this,e);})),this.g.attachEmptyPacketListener("classifications",(t=>{Yo(this,t);})),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};bc.prototype.classifyForVideo=bc.prototype.ra,bc.prototype.classify=bc.prototype.qa,bc.prototype.setOptions=bc.prototype.o,bc.createFromModelPath=function(t,e){return za(bc,t,{baseOptions:{modelAssetPath:e}})},bc.createFromModelBuffer=function(t,e){return za(bc,t,{baseOptions:{modelAssetBuffer:e}})},bc.createFromOptions=function(t,e){return za(bc,t,e)};var kc=class extends Ja{constructor(t,e){super(new Wa(t,e),"image_in","norm_rect",!0),this.h=new fo,this.embeddings={embeddings:[]},dn(t=this.h,0,1,e=new Is);}get baseOptions(){return hn(this.h,Is,1)}set baseOptions(t){dn(this.h,0,1,t);}o(t){var e=this.h,n=hn(this.h,Ss,2);return n=n?n.clone():new Ss,void 0!==t.l2Normalize?wn(n,1,t.l2Normalize):"l2Normalize"in t&&He(n,1),void 0!==t.quantize?wn(n,2,t.quantize):"quantize"in t&&He(n,2),dn(e,0,2,n),this.l(t)}xa(t,e){return Ya(this,t,e),this.embeddings}ya(t,e,n){return $a(this,t,n,e),this.embeddings}m(){var t=new Qi;Ji(t,"image_in"),Ji(t,"norm_rect"),Zi(t,"embeddings_out");const e=new Gi;Yn(e,po,this.h);const n=new zi;Xi(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Hi(n,"IMAGE:image_in"),Hi(n,"NORM_RECT:norm_rect"),Wi(n,"EMBEDDINGS:embeddings_out"),n.o(e),qi(t,n),this.g.attachProtoListener("embeddings_out",((t,e)=>{t=As(t),this.embeddings=function(t){return {embeddings:ln(t,ws,1).map((t=>{const e={headIndex:_n(t,3)??0??-1,headName:vn(t,4)??""??""};if(void 0!==cn(t,vs,nn(t,1)))t=$e(t=hn(t,vs,nn(t,1)),1,qt,Ye()),e.floatEmbedding=t.slice();else {const n=new Uint8Array(0);e.quantizedEmbedding=hn(t,Es,nn(t,2))?.ma()?.h()??n;}return e})),timestampMs:he(Ve(t,2))??0}}(t),Yo(this,e);})),this.g.attachEmptyPacketListener("embeddings_out",(t=>{Yo(this,t);})),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};kc.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Io(t.floatEmbedding,e.floatEmbedding);else {if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Io(Fo(t.quantizedEmbedding),Fo(e.quantizedEmbedding));}return t},kc.prototype.embedForVideo=kc.prototype.ya,kc.prototype.embed=kc.prototype.xa,kc.prototype.setOptions=kc.prototype.o,kc.createFromModelPath=function(t,e){return za(kc,t,{baseOptions:{modelAssetPath:e}})},kc.createFromModelBuffer=function(t,e){return za(kc,t,{baseOptions:{modelAssetBuffer:e}})},kc.createFromOptions=function(t,e){return za(kc,t,e)};var Sc=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n;}close(){this.confidenceMasks?.forEach((t=>{t.close();})),this.categoryMask?.close();}};function xc(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0;}function Lc(t){try{const e=new Sc(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e);}finally{Jo(t);}}Sc.prototype.close=Sc.prototype.close;var Rc=class extends Ja{constructor(t,e){super(new Wa(t,e),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new vo,this.v=new go,dn(this.h,0,3,this.v),dn(t=this.h,0,1,e=new Is);}get baseOptions(){return hn(this.h,Is,1)}set baseOptions(t){dn(this.h,0,1,t);}o(t){return void 0!==t.displayNamesLocale?He(this.h,2,de(t.displayNamesLocale)):"displayNamesLocale"in t&&He(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}J(){!function(t){const e=ln(t.ca(),zi,1).filter((t=>(vn(t,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.s=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");1===e.length&&(hn(e[0],Gi,7)?.l()?.g()??new Map).forEach(((e,n)=>{t.s[Number(n)]=vn(e,1)??"";}));}(this);}segment(t,e,n){const r="function"!=typeof e?e:{};return this.j="function"==typeof e?e:n,xc(this),Ya(this,t,r),Lc(this)}Ia(t,e,n,r){const i="function"!=typeof n?n:{};return this.j="function"==typeof n?n:r,xc(this),$a(this,t,i,e),Lc(this)}Ba(){return this.s}m(){var t=new Qi;Ji(t,"image_in"),Ji(t,"norm_rect");const e=new Gi;Yn(e,Eo,this.h);const n=new zi;Xi(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Hi(n,"IMAGE:image_in"),Hi(n,"NORM_RECT:norm_rect"),n.o(e),qi(t,n),$o(this,t),this.outputConfidenceMasks&&(Zi(t,"confidence_masks"),Wi(n,"CONFIDENCE_MASKS:confidence_masks"),qo(this,"confidence_masks"),this.g.ba("confidence_masks",((t,e)=>{this.confidenceMasks=t.map((t=>qa(this,t,!0,!this.j))),Yo(this,e);})),this.g.attachEmptyPacketListener("confidence_masks",(t=>{this.confidenceMasks=[],Yo(this,t);}))),this.outputCategoryMask&&(Zi(t,"category_mask"),Wi(n,"CATEGORY_MASK:category_mask"),qo(this,"category_mask"),this.g.V("category_mask",((t,e)=>{this.categoryMask=qa(this,t,!1,!this.j),Yo(this,e);})),this.g.attachEmptyPacketListener("category_mask",(t=>{this.categoryMask=void 0,Yo(this,t);}))),Zi(t,"quality_scores"),Wi(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((t,e)=>{this.qualityScores=t,Yo(this,e);})),this.g.attachEmptyPacketListener("quality_scores",(t=>{this.categoryMask=void 0,Yo(this,t);})),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};Rc.prototype.getLabels=Rc.prototype.Ba,Rc.prototype.segmentForVideo=Rc.prototype.Ia,Rc.prototype.segment=Rc.prototype.segment,Rc.prototype.setOptions=Rc.prototype.o,Rc.createFromModelPath=function(t,e){return za(Rc,t,{baseOptions:{modelAssetPath:e}})},Rc.createFromModelBuffer=function(t,e){return za(Rc,t,{baseOptions:{modelAssetBuffer:e}})},Rc.createFromOptions=function(t,e){return za(Rc,t,e)};var Fc=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n;}close(){this.confidenceMasks?.forEach((t=>{t.close();})),this.categoryMask?.close();}};Fc.prototype.close=Fc.prototype.close;var Ic=class extends $n{constructor(t){super(t);}},Mc=[0,hi,-2],Pc=[0,ni,-3,di,ni,-1],Cc=[0,Pc],Oc=[0,Pc,hi,-1],Uc=class extends $n{constructor(t){super(t);}},Dc=[0,ni,-1,di],Nc=class extends $n{constructor(t){super(t);}},Bc=class extends $n{constructor(t){super(t);}},Gc=[1,2,3,4,5,6,7,8,9,10,14,15],jc=class extends $n{constructor(t){super(t);}};jc.prototype.g=Si([0,yi,[0,Gc,_i,Pc,_i,[0,Pc,Mc],_i,Cc,_i,[0,Cc,Mc],_i,Dc,_i,[0,ni,-3,di,Ti],_i,[0,ni,-3,di],_i,[0,mi,ni,-2,di,hi,di,-1,2,ni,Mc],_i,Oc,_i,[0,Oc,Mc],ni,Mc,mi,_i,[0,ni,-3,di,Mc,-1],_i,[0,yi,Dc]],mi,[0,mi,hi,-1,di]]);var Vc=class extends Ja{constructor(t,e){super(new Wa(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new vo,this.s=new go,dn(this.h,0,3,this.s),dn(t=this.h,0,1,e=new Is);}get baseOptions(){return hn(this.h,Is,1)}set baseOptions(t){dn(this.h,0,1,t);}o(t){return "outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,r){const i="function"!=typeof n?n:{};this.j="function"==typeof n?n:r,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,r=new jc;const s=new Bc;var o=new Ic;if(Tn(o,1,255),dn(s,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new Uc;wn(a,3,!0),An(a,1,e.keypoint.x),An(a,2,e.keypoint.y),fn(s,5,Gc,a);}else {if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new Nc,e.scribble))wn(e=new Uc,3,!0),An(e,1,a.x),An(e,2,a.y),yn(o,1,Uc,e);fn(s,15,Gc,o);}yn(r,1,Bc,s),this.g.addProtoToStream(r.g(),"drishti.RenderData","roi_in",n),Ya(this,t,i);t:{try{const t=new Fc(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=t;break t}this.j(t);}finally{Jo(this);}c=void 0;}return c}m(){var t=new Qi;Ji(t,"image_in"),Ji(t,"roi_in"),Ji(t,"norm_rect_in");const e=new Gi;Yn(e,Eo,this.h);const n=new zi;Xi(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Hi(n,"IMAGE:image_in"),Hi(n,"ROI:roi_in"),Hi(n,"NORM_RECT:norm_rect_in"),n.o(e),qi(t,n),$o(this,t),this.outputConfidenceMasks&&(Zi(t,"confidence_masks"),Wi(n,"CONFIDENCE_MASKS:confidence_masks"),qo(this,"confidence_masks"),this.g.ba("confidence_masks",((t,e)=>{this.confidenceMasks=t.map((t=>qa(this,t,!0,!this.j))),Yo(this,e);})),this.g.attachEmptyPacketListener("confidence_masks",(t=>{this.confidenceMasks=[],Yo(this,t);}))),this.outputCategoryMask&&(Zi(t,"category_mask"),Wi(n,"CATEGORY_MASK:category_mask"),qo(this,"category_mask"),this.g.V("category_mask",((t,e)=>{this.categoryMask=qa(this,t,!1,!this.j),Yo(this,e);})),this.g.attachEmptyPacketListener("category_mask",(t=>{this.categoryMask=void 0,Yo(this,t);}))),Zi(t,"quality_scores"),Wi(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((t,e)=>{this.qualityScores=t,Yo(this,e);})),this.g.attachEmptyPacketListener("quality_scores",(t=>{this.categoryMask=void 0,Yo(this,t);})),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};Vc.prototype.segment=Vc.prototype.segment,Vc.prototype.setOptions=Vc.prototype.o,Vc.createFromModelPath=function(t,e){return za(Vc,t,{baseOptions:{modelAssetPath:e}})},Vc.createFromModelBuffer=function(t,e){return za(Vc,t,{baseOptions:{modelAssetBuffer:e}})},Vc.createFromOptions=function(t,e){return za(Vc,t,e)};var Xc=class extends Ja{constructor(t,e){super(new Wa(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},dn(t=this.h=new wo,0,1,e=new Is);}get baseOptions(){return hn(this.h,Is,1)}set baseOptions(t){dn(this.h,0,1,t);}o(t){return void 0!==t.displayNamesLocale?He(this.h,2,de(t.displayNamesLocale)):"displayNamesLocale"in t&&He(this.h,2),void 0!==t.maxResults?Tn(this.h,3,t.maxResults):"maxResults"in t&&He(this.h,3),void 0!==t.scoreThreshold?An(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&He(this.h,4),void 0!==t.categoryAllowlist?bn(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&He(this.h,5),void 0!==t.categoryDenylist?bn(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&He(this.h,6),this.l(t)}D(t,e){return this.j={detections:[]},Ya(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},$a(this,t,n,e),this.j}m(){var t=new Qi;Ji(t,"input_frame_gpu"),Ji(t,"norm_rect"),Zi(t,"detections");const e=new Gi;Yn(e,To,this.h);const n=new zi;Xi(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),Hi(n,"IMAGE:input_frame_gpu"),Hi(n,"NORM_RECT:norm_rect"),Wi(n,"DETECTIONS:detections"),n.o(e),qi(t,n),this.g.attachProtoVectorListener("detections",((t,e)=>{for(const e of t)t=hs(e),this.j.detections.push(xo(t));Yo(this,e);})),this.g.attachEmptyPacketListener("detections",(t=>{Yo(this,t);})),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};Xc.prototype.detectForVideo=Xc.prototype.F,Xc.prototype.detect=Xc.prototype.D,Xc.prototype.setOptions=Xc.prototype.o,Xc.createFromModelPath=async function(t,e){return za(Xc,t,{baseOptions:{modelAssetPath:e}})},Xc.createFromModelBuffer=function(t,e){return za(Xc,t,{baseOptions:{modelAssetBuffer:e}})},Xc.createFromOptions=function(t,e){return za(Xc,t,e)};var Hc=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n;}close(){this.segmentationMasks?.forEach((t=>{t.close();}));}};function Wc(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0;}function zc(t){try{const e=new Hc(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.s)return e;t.s(e);}finally{Jo(t);}}Hc.prototype.close=Hc.prototype.close;var Kc=class extends Ja{constructor(t,e){super(new Wa(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,dn(t=this.h=new Ao,0,1,e=new Is),this.v=new oo,dn(this.h,0,3,this.v),this.j=new so,dn(this.h,0,2,this.j),Tn(this.j,4,1),An(this.j,2,.5),An(this.v,2,.5),An(this.h,4,.5);}get baseOptions(){return hn(this.h,Is,1)}set baseOptions(t){dn(this.h,0,1,t);}o(t){return "numPoses"in t&&Tn(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&An(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&An(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&An(this.v,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}D(t,e,n){const r="function"!=typeof e?e:{};return this.s="function"==typeof e?e:n,Wc(this),Ya(this,t,r),zc(this)}F(t,e,n,r){const i="function"!=typeof n?n:{};return this.s="function"==typeof n?n:r,Wc(this),$a(this,t,i,e),zc(this)}m(){var t=new Qi;Ji(t,"image_in"),Ji(t,"norm_rect"),Zi(t,"normalized_landmarks"),Zi(t,"world_landmarks"),Zi(t,"segmentation_masks");const e=new Gi;Yn(e,bo,this.h);const n=new zi;Xi(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Hi(n,"IMAGE:image_in"),Hi(n,"NORM_RECT:norm_rect"),Wi(n,"NORM_LANDMARKS:normalized_landmarks"),Wi(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),qi(t,n),$o(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((t,e)=>{this.landmarks=[];for(const e of t)t=fs(e),this.landmarks.push(Lo(t));Yo(this,e);})),this.g.attachEmptyPacketListener("normalized_landmarks",(t=>{this.landmarks=[],Yo(this,t);})),this.g.attachProtoVectorListener("world_landmarks",((t,e)=>{this.worldLandmarks=[];for(const e of t)t=ls(e),this.worldLandmarks.push(Ro(t));Yo(this,e);})),this.g.attachEmptyPacketListener("world_landmarks",(t=>{this.worldLandmarks=[],Yo(this,t);})),this.outputSegmentationMasks&&(Wi(n,"SEGMENTATION_MASK:segmentation_masks"),qo(this,"segmentation_masks"),this.g.ba("segmentation_masks",((t,e)=>{this.segmentationMasks=t.map((t=>qa(this,t,!0,!this.s))),Yo(this,e);})),this.g.attachEmptyPacketListener("segmentation_masks",(t=>{this.segmentationMasks=[],Yo(this,t);}))),t=t.g(),this.setGraph(new Uint8Array(t),!0);}};Kc.prototype.detectForVideo=Kc.prototype.F,Kc.prototype.detect=Kc.prototype.D,Kc.prototype.setOptions=Kc.prototype.o,Kc.createFromModelPath=function(t,e){return za(Kc,t,{baseOptions:{modelAssetPath:e}})},Kc.createFromModelBuffer=function(t,e){return za(Kc,t,{baseOptions:{modelAssetBuffer:e}})},Kc.createFromOptions=function(t,e){return za(Kc,t,e)},Kc.POSE_CONNECTIONS=vc;

	// Gets all non-builtin properties up the prototype chain
	const getAllProperties = object => {
		const properties = new Set();

		do {
			for (const key of Reflect.ownKeys(object)) {
				properties.add([object, key]);
			}
		} while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);

		return properties;
	};

	var autoBind = (self, {include, exclude} = {}) => {
		const filter = key => {
			const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);

			if (include) {
				return include.some(match);
			}

			if (exclude) {
				return !exclude.some(match);
			}

			return true;
		};

		for (const [object, key] of getAllProperties(self.constructor.prototype)) {
			if (key === 'constructor' || !filter(key)) {
				continue;
			}

			const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
			if (descriptor && typeof descriptor.value === 'function') {
				self[key] = self[key].bind(self);
			}
		}

		return self;
	};

	var autoBind$1 = /*@__PURE__*/getDefaultExportFromCjs(autoBind);

	/**
	 * @license
	 * Copyright 2010-2022 Three.js Authors
	 * SPDX-License-Identifier: MIT
	 */
	const REVISION = '145';

	function clamp( value, min, max ) {

		return Math.max( min, Math.min( max, value ) );

	}

	class Quaternion {

		constructor( x = 0, y = 0, z = 0, w = 1 ) {

			this.isQuaternion = true;

			this._x = x;
			this._y = y;
			this._z = z;
			this._w = w;

		}

		static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

			// fuzz-free, array-based Quaternion SLERP operation

			let x0 = src0[ srcOffset0 + 0 ],
				y0 = src0[ srcOffset0 + 1 ],
				z0 = src0[ srcOffset0 + 2 ],
				w0 = src0[ srcOffset0 + 3 ];

			const x1 = src1[ srcOffset1 + 0 ],
				y1 = src1[ srcOffset1 + 1 ],
				z1 = src1[ srcOffset1 + 2 ],
				w1 = src1[ srcOffset1 + 3 ];

			if ( t === 0 ) {

				dst[ dstOffset + 0 ] = x0;
				dst[ dstOffset + 1 ] = y0;
				dst[ dstOffset + 2 ] = z0;
				dst[ dstOffset + 3 ] = w0;
				return;

			}

			if ( t === 1 ) {

				dst[ dstOffset + 0 ] = x1;
				dst[ dstOffset + 1 ] = y1;
				dst[ dstOffset + 2 ] = z1;
				dst[ dstOffset + 3 ] = w1;
				return;

			}

			if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

				let s = 1 - t;
				const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
					dir = ( cos >= 0 ? 1 : - 1 ),
					sqrSin = 1 - cos * cos;

				// Skip the Slerp for tiny steps to avoid numeric problems:
				if ( sqrSin > Number.EPSILON ) {

					const sin = Math.sqrt( sqrSin ),
						len = Math.atan2( sin, cos * dir );

					s = Math.sin( s * len ) / sin;
					t = Math.sin( t * len ) / sin;

				}

				const tDir = t * dir;

				x0 = x0 * s + x1 * tDir;
				y0 = y0 * s + y1 * tDir;
				z0 = z0 * s + z1 * tDir;
				w0 = w0 * s + w1 * tDir;

				// Normalize in case we just did a lerp:
				if ( s === 1 - t ) {

					const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

					x0 *= f;
					y0 *= f;
					z0 *= f;
					w0 *= f;

				}

			}

			dst[ dstOffset ] = x0;
			dst[ dstOffset + 1 ] = y0;
			dst[ dstOffset + 2 ] = z0;
			dst[ dstOffset + 3 ] = w0;

		}

		static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

			const x0 = src0[ srcOffset0 ];
			const y0 = src0[ srcOffset0 + 1 ];
			const z0 = src0[ srcOffset0 + 2 ];
			const w0 = src0[ srcOffset0 + 3 ];

			const x1 = src1[ srcOffset1 ];
			const y1 = src1[ srcOffset1 + 1 ];
			const z1 = src1[ srcOffset1 + 2 ];
			const w1 = src1[ srcOffset1 + 3 ];

			dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
			dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
			dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
			dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

			return dst;

		}

		get x() {

			return this._x;

		}

		set x( value ) {

			this._x = value;
			this._onChangeCallback();

		}

		get y() {

			return this._y;

		}

		set y( value ) {

			this._y = value;
			this._onChangeCallback();

		}

		get z() {

			return this._z;

		}

		set z( value ) {

			this._z = value;
			this._onChangeCallback();

		}

		get w() {

			return this._w;

		}

		set w( value ) {

			this._w = value;
			this._onChangeCallback();

		}

		set( x, y, z, w ) {

			this._x = x;
			this._y = y;
			this._z = z;
			this._w = w;

			this._onChangeCallback();

			return this;

		}

		clone() {

			return new this.constructor( this._x, this._y, this._z, this._w );

		}

		copy( quaternion ) {

			this._x = quaternion.x;
			this._y = quaternion.y;
			this._z = quaternion.z;
			this._w = quaternion.w;

			this._onChangeCallback();

			return this;

		}

		setFromEuler( euler, update ) {

			const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

			// http://www.mathworks.com/matlabcentral/fileexchange/
			// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
			//	content/SpinCalc.m

			const cos = Math.cos;
			const sin = Math.sin;

			const c1 = cos( x / 2 );
			const c2 = cos( y / 2 );
			const c3 = cos( z / 2 );

			const s1 = sin( x / 2 );
			const s2 = sin( y / 2 );
			const s3 = sin( z / 2 );

			switch ( order ) {

				case 'XYZ':
					this._x = s1 * c2 * c3 + c1 * s2 * s3;
					this._y = c1 * s2 * c3 - s1 * c2 * s3;
					this._z = c1 * c2 * s3 + s1 * s2 * c3;
					this._w = c1 * c2 * c3 - s1 * s2 * s3;
					break;

				case 'YXZ':
					this._x = s1 * c2 * c3 + c1 * s2 * s3;
					this._y = c1 * s2 * c3 - s1 * c2 * s3;
					this._z = c1 * c2 * s3 - s1 * s2 * c3;
					this._w = c1 * c2 * c3 + s1 * s2 * s3;
					break;

				case 'ZXY':
					this._x = s1 * c2 * c3 - c1 * s2 * s3;
					this._y = c1 * s2 * c3 + s1 * c2 * s3;
					this._z = c1 * c2 * s3 + s1 * s2 * c3;
					this._w = c1 * c2 * c3 - s1 * s2 * s3;
					break;

				case 'ZYX':
					this._x = s1 * c2 * c3 - c1 * s2 * s3;
					this._y = c1 * s2 * c3 + s1 * c2 * s3;
					this._z = c1 * c2 * s3 - s1 * s2 * c3;
					this._w = c1 * c2 * c3 + s1 * s2 * s3;
					break;

				case 'YZX':
					this._x = s1 * c2 * c3 + c1 * s2 * s3;
					this._y = c1 * s2 * c3 + s1 * c2 * s3;
					this._z = c1 * c2 * s3 - s1 * s2 * c3;
					this._w = c1 * c2 * c3 - s1 * s2 * s3;
					break;

				case 'XZY':
					this._x = s1 * c2 * c3 - c1 * s2 * s3;
					this._y = c1 * s2 * c3 - s1 * c2 * s3;
					this._z = c1 * c2 * s3 + s1 * s2 * c3;
					this._w = c1 * c2 * c3 + s1 * s2 * s3;
					break;

				default:
					console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

			}

			if ( update !== false ) this._onChangeCallback();

			return this;

		}

		setFromAxisAngle( axis, angle ) {

			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

			// assumes axis is normalized

			const halfAngle = angle / 2, s = Math.sin( halfAngle );

			this._x = axis.x * s;
			this._y = axis.y * s;
			this._z = axis.z * s;
			this._w = Math.cos( halfAngle );

			this._onChangeCallback();

			return this;

		}

		setFromRotationMatrix( m ) {

			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

			const te = m.elements,

				m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
				m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
				m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

				trace = m11 + m22 + m33;

			if ( trace > 0 ) {

				const s = 0.5 / Math.sqrt( trace + 1.0 );

				this._w = 0.25 / s;
				this._x = ( m32 - m23 ) * s;
				this._y = ( m13 - m31 ) * s;
				this._z = ( m21 - m12 ) * s;

			} else if ( m11 > m22 && m11 > m33 ) {

				const s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

				this._w = ( m32 - m23 ) / s;
				this._x = 0.25 * s;
				this._y = ( m12 + m21 ) / s;
				this._z = ( m13 + m31 ) / s;

			} else if ( m22 > m33 ) {

				const s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

				this._w = ( m13 - m31 ) / s;
				this._x = ( m12 + m21 ) / s;
				this._y = 0.25 * s;
				this._z = ( m23 + m32 ) / s;

			} else {

				const s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

				this._w = ( m21 - m12 ) / s;
				this._x = ( m13 + m31 ) / s;
				this._y = ( m23 + m32 ) / s;
				this._z = 0.25 * s;

			}

			this._onChangeCallback();

			return this;

		}

		setFromUnitVectors( vFrom, vTo ) {

			// assumes direction vectors vFrom and vTo are normalized

			let r = vFrom.dot( vTo ) + 1;

			if ( r < Number.EPSILON ) {

				// vFrom and vTo point in opposite directions

				r = 0;

				if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

					this._x = - vFrom.y;
					this._y = vFrom.x;
					this._z = 0;
					this._w = r;

				} else {

					this._x = 0;
					this._y = - vFrom.z;
					this._z = vFrom.y;
					this._w = r;

				}

			} else {

				// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

				this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
				this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
				this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
				this._w = r;

			}

			return this.normalize();

		}

		angleTo( q ) {

			return 2 * Math.acos( Math.abs( clamp( this.dot( q ), - 1, 1 ) ) );

		}

		rotateTowards( q, step ) {

			const angle = this.angleTo( q );

			if ( angle === 0 ) return this;

			const t = Math.min( 1, step / angle );

			this.slerp( q, t );

			return this;

		}

		identity() {

			return this.set( 0, 0, 0, 1 );

		}

		invert() {

			// quaternion is assumed to have unit length

			return this.conjugate();

		}

		conjugate() {

			this._x *= - 1;
			this._y *= - 1;
			this._z *= - 1;

			this._onChangeCallback();

			return this;

		}

		dot( v ) {

			return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

		}

		lengthSq() {

			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

		}

		length() {

			return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

		}

		normalize() {

			let l = this.length();

			if ( l === 0 ) {

				this._x = 0;
				this._y = 0;
				this._z = 0;
				this._w = 1;

			} else {

				l = 1 / l;

				this._x = this._x * l;
				this._y = this._y * l;
				this._z = this._z * l;
				this._w = this._w * l;

			}

			this._onChangeCallback();

			return this;

		}

		multiply( q ) {

			return this.multiplyQuaternions( this, q );

		}

		premultiply( q ) {

			return this.multiplyQuaternions( q, this );

		}

		multiplyQuaternions( a, b ) {

			// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

			const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
			const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

			this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
			this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
			this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
			this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

			this._onChangeCallback();

			return this;

		}

		slerp( qb, t ) {

			if ( t === 0 ) return this;
			if ( t === 1 ) return this.copy( qb );

			const x = this._x, y = this._y, z = this._z, w = this._w;

			// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

			let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

			if ( cosHalfTheta < 0 ) {

				this._w = - qb._w;
				this._x = - qb._x;
				this._y = - qb._y;
				this._z = - qb._z;

				cosHalfTheta = - cosHalfTheta;

			} else {

				this.copy( qb );

			}

			if ( cosHalfTheta >= 1.0 ) {

				this._w = w;
				this._x = x;
				this._y = y;
				this._z = z;

				return this;

			}

			const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

			if ( sqrSinHalfTheta <= Number.EPSILON ) {

				const s = 1 - t;
				this._w = s * w + t * this._w;
				this._x = s * x + t * this._x;
				this._y = s * y + t * this._y;
				this._z = s * z + t * this._z;

				this.normalize();
				this._onChangeCallback();

				return this;

			}

			const sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
			const halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
			const ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
				ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

			this._w = ( w * ratioA + this._w * ratioB );
			this._x = ( x * ratioA + this._x * ratioB );
			this._y = ( y * ratioA + this._y * ratioB );
			this._z = ( z * ratioA + this._z * ratioB );

			this._onChangeCallback();

			return this;

		}

		slerpQuaternions( qa, qb, t ) {

			return this.copy( qa ).slerp( qb, t );

		}

		random() {

			// Derived from http://planning.cs.uiuc.edu/node198.html
			// Note, this source uses w, x, y, z ordering,
			// so we swap the order below.

			const u1 = Math.random();
			const sqrt1u1 = Math.sqrt( 1 - u1 );
			const sqrtu1 = Math.sqrt( u1 );

			const u2 = 2 * Math.PI * Math.random();

			const u3 = 2 * Math.PI * Math.random();

			return this.set(
				sqrt1u1 * Math.cos( u2 ),
				sqrtu1 * Math.sin( u3 ),
				sqrtu1 * Math.cos( u3 ),
				sqrt1u1 * Math.sin( u2 ),
			);

		}

		equals( quaternion ) {

			return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

		}

		fromArray( array, offset = 0 ) {

			this._x = array[ offset ];
			this._y = array[ offset + 1 ];
			this._z = array[ offset + 2 ];
			this._w = array[ offset + 3 ];

			this._onChangeCallback();

			return this;

		}

		toArray( array = [], offset = 0 ) {

			array[ offset ] = this._x;
			array[ offset + 1 ] = this._y;
			array[ offset + 2 ] = this._z;
			array[ offset + 3 ] = this._w;

			return array;

		}

		fromBufferAttribute( attribute, index ) {

			this._x = attribute.getX( index );
			this._y = attribute.getY( index );
			this._z = attribute.getZ( index );
			this._w = attribute.getW( index );

			return this;

		}

		_onChange( callback ) {

			this._onChangeCallback = callback;

			return this;

		}

		_onChangeCallback() {}

		*[ Symbol.iterator ]() {

			yield this._x;
			yield this._y;
			yield this._z;
			yield this._w;

		}

	}

	class Vector3 {

		constructor( x = 0, y = 0, z = 0 ) {

			Vector3.prototype.isVector3 = true;

			this.x = x;
			this.y = y;
			this.z = z;

		}

		set( x, y, z ) {

			if ( z === undefined ) z = this.z; // sprite.scale.set(x,y)

			this.x = x;
			this.y = y;
			this.z = z;

			return this;

		}

		setScalar( scalar ) {

			this.x = scalar;
			this.y = scalar;
			this.z = scalar;

			return this;

		}

		setX( x ) {

			this.x = x;

			return this;

		}

		setY( y ) {

			this.y = y;

			return this;

		}

		setZ( z ) {

			this.z = z;

			return this;

		}

		setComponent( index, value ) {

			switch ( index ) {

				case 0: this.x = value; break;
				case 1: this.y = value; break;
				case 2: this.z = value; break;
				default: throw new Error( 'index is out of range: ' + index );

			}

			return this;

		}

		getComponent( index ) {

			switch ( index ) {

				case 0: return this.x;
				case 1: return this.y;
				case 2: return this.z;
				default: throw new Error( 'index is out of range: ' + index );

			}

		}

		clone() {

			return new this.constructor( this.x, this.y, this.z );

		}

		copy( v ) {

			this.x = v.x;
			this.y = v.y;
			this.z = v.z;

			return this;

		}

		add( v ) {

			this.x += v.x;
			this.y += v.y;
			this.z += v.z;

			return this;

		}

		addScalar( s ) {

			this.x += s;
			this.y += s;
			this.z += s;

			return this;

		}

		addVectors( a, b ) {

			this.x = a.x + b.x;
			this.y = a.y + b.y;
			this.z = a.z + b.z;

			return this;

		}

		addScaledVector( v, s ) {

			this.x += v.x * s;
			this.y += v.y * s;
			this.z += v.z * s;

			return this;

		}

		sub( v ) {

			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;

			return this;

		}

		subScalar( s ) {

			this.x -= s;
			this.y -= s;
			this.z -= s;

			return this;

		}

		subVectors( a, b ) {

			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;

			return this;

		}

		multiply( v ) {

			this.x *= v.x;
			this.y *= v.y;
			this.z *= v.z;

			return this;

		}

		multiplyScalar( scalar ) {

			this.x *= scalar;
			this.y *= scalar;
			this.z *= scalar;

			return this;

		}

		multiplyVectors( a, b ) {

			this.x = a.x * b.x;
			this.y = a.y * b.y;
			this.z = a.z * b.z;

			return this;

		}

		applyEuler( euler ) {

			return this.applyQuaternion( _quaternion$4.setFromEuler( euler ) );

		}

		applyAxisAngle( axis, angle ) {

			return this.applyQuaternion( _quaternion$4.setFromAxisAngle( axis, angle ) );

		}

		applyMatrix3( m ) {

			const x = this.x, y = this.y, z = this.z;
			const e = m.elements;

			this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
			this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
			this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

			return this;

		}

		applyNormalMatrix( m ) {

			return this.applyMatrix3( m ).normalize();

		}

		applyMatrix4( m ) {

			const x = this.x, y = this.y, z = this.z;
			const e = m.elements;

			const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

			this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
			this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
			this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

			return this;

		}

		applyQuaternion( q ) {

			const x = this.x, y = this.y, z = this.z;
			const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

			// calculate quat * vector

			const ix = qw * x + qy * z - qz * y;
			const iy = qw * y + qz * x - qx * z;
			const iz = qw * z + qx * y - qy * x;
			const iw = - qx * x - qy * y - qz * z;

			// calculate result * inverse quat

			this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
			this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
			this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

			return this;

		}

		project( camera ) {

			return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

		}

		unproject( camera ) {

			return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

		}

		transformDirection( m ) {

			// input: THREE.Matrix4 affine matrix
			// vector interpreted as a direction

			const x = this.x, y = this.y, z = this.z;
			const e = m.elements;

			this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
			this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
			this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

			return this.normalize();

		}

		divide( v ) {

			this.x /= v.x;
			this.y /= v.y;
			this.z /= v.z;

			return this;

		}

		divideScalar( scalar ) {

			return this.multiplyScalar( 1 / scalar );

		}

		min( v ) {

			this.x = Math.min( this.x, v.x );
			this.y = Math.min( this.y, v.y );
			this.z = Math.min( this.z, v.z );

			return this;

		}

		max( v ) {

			this.x = Math.max( this.x, v.x );
			this.y = Math.max( this.y, v.y );
			this.z = Math.max( this.z, v.z );

			return this;

		}

		clamp( min, max ) {

			// assumes min < max, componentwise

			this.x = Math.max( min.x, Math.min( max.x, this.x ) );
			this.y = Math.max( min.y, Math.min( max.y, this.y ) );
			this.z = Math.max( min.z, Math.min( max.z, this.z ) );

			return this;

		}

		clampScalar( minVal, maxVal ) {

			this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
			this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
			this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

			return this;

		}

		clampLength( min, max ) {

			const length = this.length();

			return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

		}

		floor() {

			this.x = Math.floor( this.x );
			this.y = Math.floor( this.y );
			this.z = Math.floor( this.z );

			return this;

		}

		ceil() {

			this.x = Math.ceil( this.x );
			this.y = Math.ceil( this.y );
			this.z = Math.ceil( this.z );

			return this;

		}

		round() {

			this.x = Math.round( this.x );
			this.y = Math.round( this.y );
			this.z = Math.round( this.z );

			return this;

		}

		roundToZero() {

			this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
			this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
			this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );

			return this;

		}

		negate() {

			this.x = - this.x;
			this.y = - this.y;
			this.z = - this.z;

			return this;

		}

		dot( v ) {

			return this.x * v.x + this.y * v.y + this.z * v.z;

		}

		// TODO lengthSquared?

		lengthSq() {

			return this.x * this.x + this.y * this.y + this.z * this.z;

		}

		length() {

			return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

		}

		manhattanLength() {

			return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

		}

		normalize() {

			return this.divideScalar( this.length() || 1 );

		}

		setLength( length ) {

			return this.normalize().multiplyScalar( length );

		}

		lerp( v, alpha ) {

			this.x += ( v.x - this.x ) * alpha;
			this.y += ( v.y - this.y ) * alpha;
			this.z += ( v.z - this.z ) * alpha;

			return this;

		}

		lerpVectors( v1, v2, alpha ) {

			this.x = v1.x + ( v2.x - v1.x ) * alpha;
			this.y = v1.y + ( v2.y - v1.y ) * alpha;
			this.z = v1.z + ( v2.z - v1.z ) * alpha;

			return this;

		}

		cross( v ) {

			return this.crossVectors( this, v );

		}

		crossVectors( a, b ) {

			const ax = a.x, ay = a.y, az = a.z;
			const bx = b.x, by = b.y, bz = b.z;

			this.x = ay * bz - az * by;
			this.y = az * bx - ax * bz;
			this.z = ax * by - ay * bx;

			return this;

		}

		projectOnVector( v ) {

			const denominator = v.lengthSq();

			if ( denominator === 0 ) return this.set( 0, 0, 0 );

			const scalar = v.dot( this ) / denominator;

			return this.copy( v ).multiplyScalar( scalar );

		}

		projectOnPlane( planeNormal ) {

			_vector$c.copy( this ).projectOnVector( planeNormal );

			return this.sub( _vector$c );

		}

		reflect( normal ) {

			// reflect incident vector off plane orthogonal to normal
			// normal is assumed to have unit length

			return this.sub( _vector$c.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

		}

		angleTo( v ) {

			const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

			if ( denominator === 0 ) return Math.PI / 2;

			const theta = this.dot( v ) / denominator;

			// clamp, to handle numerical problems

			return Math.acos( clamp( theta, - 1, 1 ) );

		}

		distanceTo( v ) {

			return Math.sqrt( this.distanceToSquared( v ) );

		}

		distanceToSquared( v ) {

			const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

			return dx * dx + dy * dy + dz * dz;

		}

		manhattanDistanceTo( v ) {

			return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

		}

		setFromSpherical( s ) {

			return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

		}

		setFromSphericalCoords( radius, phi, theta ) {

			const sinPhiRadius = Math.sin( phi ) * radius;

			this.x = sinPhiRadius * Math.sin( theta );
			this.y = Math.cos( phi ) * radius;
			this.z = sinPhiRadius * Math.cos( theta );

			return this;

		}

		setFromCylindrical( c ) {

			return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

		}

		setFromCylindricalCoords( radius, theta, y ) {

			this.x = radius * Math.sin( theta );
			this.y = y;
			this.z = radius * Math.cos( theta );

			return this;

		}

		setFromMatrixPosition( m ) {

			const e = m.elements;

			this.x = e[ 12 ];
			this.y = e[ 13 ];
			this.z = e[ 14 ];

			return this;

		}

		setFromMatrixScale( m ) {

			const sx = this.setFromMatrixColumn( m, 0 ).length();
			const sy = this.setFromMatrixColumn( m, 1 ).length();
			const sz = this.setFromMatrixColumn( m, 2 ).length();

			this.x = sx;
			this.y = sy;
			this.z = sz;

			return this;

		}

		setFromMatrixColumn( m, index ) {

			return this.fromArray( m.elements, index * 4 );

		}

		setFromMatrix3Column( m, index ) {

			return this.fromArray( m.elements, index * 3 );

		}

		setFromEuler( e ) {

			this.x = e._x;
			this.y = e._y;
			this.z = e._z;

			return this;

		}

		equals( v ) {

			return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

		}

		fromArray( array, offset = 0 ) {

			this.x = array[ offset ];
			this.y = array[ offset + 1 ];
			this.z = array[ offset + 2 ];

			return this;

		}

		toArray( array = [], offset = 0 ) {

			array[ offset ] = this.x;
			array[ offset + 1 ] = this.y;
			array[ offset + 2 ] = this.z;

			return array;

		}

		fromBufferAttribute( attribute, index ) {

			this.x = attribute.getX( index );
			this.y = attribute.getY( index );
			this.z = attribute.getZ( index );

			return this;

		}

		random() {

			this.x = Math.random();
			this.y = Math.random();
			this.z = Math.random();

			return this;

		}

		randomDirection() {

			// Derived from https://mathworld.wolfram.com/SpherePointPicking.html

			const u = ( Math.random() - 0.5 ) * 2;
			const t = Math.random() * Math.PI * 2;
			const f = Math.sqrt( 1 - u ** 2 );

			this.x = f * Math.cos( t );
			this.y = f * Math.sin( t );
			this.z = u;

			return this;

		}

		*[ Symbol.iterator ]() {

			yield this.x;
			yield this.y;
			yield this.z;

		}

	}

	const _vector$c = /*@__PURE__*/ new Vector3();
	const _quaternion$4 = /*@__PURE__*/ new Quaternion();

	class Matrix4 {

		constructor() {

			Matrix4.prototype.isMatrix4 = true;

			this.elements = [

				1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1

			];

		}

		set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

			const te = this.elements;

			te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
			te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
			te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
			te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

			return this;

		}

		identity() {

			this.set(

				1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1

			);

			return this;

		}

		clone() {

			return new Matrix4().fromArray( this.elements );

		}

		copy( m ) {

			const te = this.elements;
			const me = m.elements;

			te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
			te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
			te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
			te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

			return this;

		}

		copyPosition( m ) {

			const te = this.elements, me = m.elements;

			te[ 12 ] = me[ 12 ];
			te[ 13 ] = me[ 13 ];
			te[ 14 ] = me[ 14 ];

			return this;

		}

		setFromMatrix3( m ) {

			const me = m.elements;

			this.set(

				me[ 0 ], me[ 3 ], me[ 6 ], 0,
				me[ 1 ], me[ 4 ], me[ 7 ], 0,
				me[ 2 ], me[ 5 ], me[ 8 ], 0,
				0, 0, 0, 1

			);

			return this;

		}

		extractBasis( xAxis, yAxis, zAxis ) {

			xAxis.setFromMatrixColumn( this, 0 );
			yAxis.setFromMatrixColumn( this, 1 );
			zAxis.setFromMatrixColumn( this, 2 );

			return this;

		}

		makeBasis( xAxis, yAxis, zAxis ) {

			this.set(
				xAxis.x, yAxis.x, zAxis.x, 0,
				xAxis.y, yAxis.y, zAxis.y, 0,
				xAxis.z, yAxis.z, zAxis.z, 0,
				0, 0, 0, 1
			);

			return this;

		}

		extractRotation( m ) {

			// this method does not support reflection matrices

			const te = this.elements;
			const me = m.elements;

			const scaleX = 1 / _v1$5.setFromMatrixColumn( m, 0 ).length();
			const scaleY = 1 / _v1$5.setFromMatrixColumn( m, 1 ).length();
			const scaleZ = 1 / _v1$5.setFromMatrixColumn( m, 2 ).length();

			te[ 0 ] = me[ 0 ] * scaleX;
			te[ 1 ] = me[ 1 ] * scaleX;
			te[ 2 ] = me[ 2 ] * scaleX;
			te[ 3 ] = 0;

			te[ 4 ] = me[ 4 ] * scaleY;
			te[ 5 ] = me[ 5 ] * scaleY;
			te[ 6 ] = me[ 6 ] * scaleY;
			te[ 7 ] = 0;

			te[ 8 ] = me[ 8 ] * scaleZ;
			te[ 9 ] = me[ 9 ] * scaleZ;
			te[ 10 ] = me[ 10 ] * scaleZ;
			te[ 11 ] = 0;

			te[ 12 ] = 0;
			te[ 13 ] = 0;
			te[ 14 ] = 0;
			te[ 15 ] = 1;

			return this;

		}

		makeRotationFromEuler( euler ) {

			const te = this.elements;

			const x = euler.x, y = euler.y, z = euler.z;
			const a = Math.cos( x ), b = Math.sin( x );
			const c = Math.cos( y ), d = Math.sin( y );
			const e = Math.cos( z ), f = Math.sin( z );

			if ( euler.order === 'XYZ' ) {

				const ae = a * e, af = a * f, be = b * e, bf = b * f;

				te[ 0 ] = c * e;
				te[ 4 ] = - c * f;
				te[ 8 ] = d;

				te[ 1 ] = af + be * d;
				te[ 5 ] = ae - bf * d;
				te[ 9 ] = - b * c;

				te[ 2 ] = bf - ae * d;
				te[ 6 ] = be + af * d;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'YXZ' ) {

				const ce = c * e, cf = c * f, de = d * e, df = d * f;

				te[ 0 ] = ce + df * b;
				te[ 4 ] = de * b - cf;
				te[ 8 ] = a * d;

				te[ 1 ] = a * f;
				te[ 5 ] = a * e;
				te[ 9 ] = - b;

				te[ 2 ] = cf * b - de;
				te[ 6 ] = df + ce * b;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'ZXY' ) {

				const ce = c * e, cf = c * f, de = d * e, df = d * f;

				te[ 0 ] = ce - df * b;
				te[ 4 ] = - a * f;
				te[ 8 ] = de + cf * b;

				te[ 1 ] = cf + de * b;
				te[ 5 ] = a * e;
				te[ 9 ] = df - ce * b;

				te[ 2 ] = - a * d;
				te[ 6 ] = b;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'ZYX' ) {

				const ae = a * e, af = a * f, be = b * e, bf = b * f;

				te[ 0 ] = c * e;
				te[ 4 ] = be * d - af;
				te[ 8 ] = ae * d + bf;

				te[ 1 ] = c * f;
				te[ 5 ] = bf * d + ae;
				te[ 9 ] = af * d - be;

				te[ 2 ] = - d;
				te[ 6 ] = b * c;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'YZX' ) {

				const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

				te[ 0 ] = c * e;
				te[ 4 ] = bd - ac * f;
				te[ 8 ] = bc * f + ad;

				te[ 1 ] = f;
				te[ 5 ] = a * e;
				te[ 9 ] = - b * e;

				te[ 2 ] = - d * e;
				te[ 6 ] = ad * f + bc;
				te[ 10 ] = ac - bd * f;

			} else if ( euler.order === 'XZY' ) {

				const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

				te[ 0 ] = c * e;
				te[ 4 ] = - f;
				te[ 8 ] = d * e;

				te[ 1 ] = ac * f + bd;
				te[ 5 ] = a * e;
				te[ 9 ] = ad * f - bc;

				te[ 2 ] = bc * f - ad;
				te[ 6 ] = b * e;
				te[ 10 ] = bd * f + ac;

			}

			// bottom row
			te[ 3 ] = 0;
			te[ 7 ] = 0;
			te[ 11 ] = 0;

			// last column
			te[ 12 ] = 0;
			te[ 13 ] = 0;
			te[ 14 ] = 0;
			te[ 15 ] = 1;

			return this;

		}

		makeRotationFromQuaternion( q ) {

			return this.compose( _zero, q, _one );

		}

		lookAt( eye, target, up ) {

			const te = this.elements;

			_z.subVectors( eye, target );

			if ( _z.lengthSq() === 0 ) {

				// eye and target are in the same position

				_z.z = 1;

			}

			_z.normalize();
			_x.crossVectors( up, _z );

			if ( _x.lengthSq() === 0 ) {

				// up and z are parallel

				if ( Math.abs( up.z ) === 1 ) {

					_z.x += 0.0001;

				} else {

					_z.z += 0.0001;

				}

				_z.normalize();
				_x.crossVectors( up, _z );

			}

			_x.normalize();
			_y.crossVectors( _z, _x );

			te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
			te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
			te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

			return this;

		}

		multiply( m ) {

			return this.multiplyMatrices( this, m );

		}

		premultiply( m ) {

			return this.multiplyMatrices( m, this );

		}

		multiplyMatrices( a, b ) {

			const ae = a.elements;
			const be = b.elements;
			const te = this.elements;

			const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
			const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
			const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
			const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

			const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
			const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
			const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
			const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

			te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
			te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
			te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
			te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

			te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
			te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
			te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
			te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

			te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
			te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
			te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
			te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

			te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
			te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
			te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
			te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

			return this;

		}

		multiplyScalar( s ) {

			const te = this.elements;

			te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
			te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
			te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
			te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

			return this;

		}

		determinant() {

			const te = this.elements;

			const n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
			const n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
			const n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
			const n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

			//TODO: make this more efficient
			//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

			return (
				n41 * (
					+ n14 * n23 * n32
					 - n13 * n24 * n32
					 - n14 * n22 * n33
					 + n12 * n24 * n33
					 + n13 * n22 * n34
					 - n12 * n23 * n34
				) +
				n42 * (
					+ n11 * n23 * n34
					 - n11 * n24 * n33
					 + n14 * n21 * n33
					 - n13 * n21 * n34
					 + n13 * n24 * n31
					 - n14 * n23 * n31
				) +
				n43 * (
					+ n11 * n24 * n32
					 - n11 * n22 * n34
					 - n14 * n21 * n32
					 + n12 * n21 * n34
					 + n14 * n22 * n31
					 - n12 * n24 * n31
				) +
				n44 * (
					- n13 * n22 * n31
					 - n11 * n23 * n32
					 + n11 * n22 * n33
					 + n13 * n21 * n32
					 - n12 * n21 * n33
					 + n12 * n23 * n31
				)

			);

		}

		transpose() {

			const te = this.elements;
			let tmp;

			tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
			tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
			tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

			tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
			tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
			tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

			return this;

		}

		setPosition( x, y, z ) {

			const te = this.elements;

			if ( x.isVector3 ) {

				te[ 12 ] = x.x;
				te[ 13 ] = x.y;
				te[ 14 ] = x.z;

			} else {

				te[ 12 ] = x;
				te[ 13 ] = y;
				te[ 14 ] = z;

			}

			return this;

		}

		invert() {

			// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
			const te = this.elements,

				n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
				n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
				n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
				n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

				t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
				t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
				t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
				t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

			const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

			if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

			const detInv = 1 / det;

			te[ 0 ] = t11 * detInv;
			te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
			te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
			te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

			te[ 4 ] = t12 * detInv;
			te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
			te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
			te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

			te[ 8 ] = t13 * detInv;
			te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
			te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
			te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

			te[ 12 ] = t14 * detInv;
			te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
			te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
			te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

			return this;

		}

		scale( v ) {

			const te = this.elements;
			const x = v.x, y = v.y, z = v.z;

			te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
			te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
			te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
			te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

			return this;

		}

		getMaxScaleOnAxis() {

			const te = this.elements;

			const scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
			const scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
			const scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

			return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

		}

		makeTranslation( x, y, z ) {

			this.set(

				1, 0, 0, x,
				0, 1, 0, y,
				0, 0, 1, z,
				0, 0, 0, 1

			);

			return this;

		}

		makeRotationX( theta ) {

			const c = Math.cos( theta ), s = Math.sin( theta );

			this.set(

				1, 0, 0, 0,
				0, c, - s, 0,
				0, s, c, 0,
				0, 0, 0, 1

			);

			return this;

		}

		makeRotationY( theta ) {

			const c = Math.cos( theta ), s = Math.sin( theta );

			this.set(

				 c, 0, s, 0,
				 0, 1, 0, 0,
				- s, 0, c, 0,
				 0, 0, 0, 1

			);

			return this;

		}

		makeRotationZ( theta ) {

			const c = Math.cos( theta ), s = Math.sin( theta );

			this.set(

				c, - s, 0, 0,
				s, c, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1

			);

			return this;

		}

		makeRotationAxis( axis, angle ) {

			// Based on http://www.gamedev.net/reference/articles/article1199.asp

			const c = Math.cos( angle );
			const s = Math.sin( angle );
			const t = 1 - c;
			const x = axis.x, y = axis.y, z = axis.z;
			const tx = t * x, ty = t * y;

			this.set(

				tx * x + c, tx * y - s * z, tx * z + s * y, 0,
				tx * y + s * z, ty * y + c, ty * z - s * x, 0,
				tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
				0, 0, 0, 1

			);

			return this;

		}

		makeScale( x, y, z ) {

			this.set(

				x, 0, 0, 0,
				0, y, 0, 0,
				0, 0, z, 0,
				0, 0, 0, 1

			);

			return this;

		}

		makeShear( xy, xz, yx, yz, zx, zy ) {

			this.set(

				1, yx, zx, 0,
				xy, 1, zy, 0,
				xz, yz, 1, 0,
				0, 0, 0, 1

			);

			return this;

		}

		compose( position, quaternion, scale ) {

			const te = this.elements;

			const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
			const x2 = x + x,	y2 = y + y, z2 = z + z;
			const xx = x * x2, xy = x * y2, xz = x * z2;
			const yy = y * y2, yz = y * z2, zz = z * z2;
			const wx = w * x2, wy = w * y2, wz = w * z2;

			const sx = scale.x, sy = scale.y, sz = scale.z;

			te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
			te[ 1 ] = ( xy + wz ) * sx;
			te[ 2 ] = ( xz - wy ) * sx;
			te[ 3 ] = 0;

			te[ 4 ] = ( xy - wz ) * sy;
			te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
			te[ 6 ] = ( yz + wx ) * sy;
			te[ 7 ] = 0;

			te[ 8 ] = ( xz + wy ) * sz;
			te[ 9 ] = ( yz - wx ) * sz;
			te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
			te[ 11 ] = 0;

			te[ 12 ] = position.x;
			te[ 13 ] = position.y;
			te[ 14 ] = position.z;
			te[ 15 ] = 1;

			return this;

		}

		decompose( position, quaternion, scale ) {

			const te = this.elements;

			let sx = _v1$5.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
			const sy = _v1$5.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
			const sz = _v1$5.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

			// if determine is negative, we need to invert one scale
			const det = this.determinant();
			if ( det < 0 ) sx = - sx;

			position.x = te[ 12 ];
			position.y = te[ 13 ];
			position.z = te[ 14 ];

			// scale the rotation part
			_m1$2.copy( this );

			const invSX = 1 / sx;
			const invSY = 1 / sy;
			const invSZ = 1 / sz;

			_m1$2.elements[ 0 ] *= invSX;
			_m1$2.elements[ 1 ] *= invSX;
			_m1$2.elements[ 2 ] *= invSX;

			_m1$2.elements[ 4 ] *= invSY;
			_m1$2.elements[ 5 ] *= invSY;
			_m1$2.elements[ 6 ] *= invSY;

			_m1$2.elements[ 8 ] *= invSZ;
			_m1$2.elements[ 9 ] *= invSZ;
			_m1$2.elements[ 10 ] *= invSZ;

			quaternion.setFromRotationMatrix( _m1$2 );

			scale.x = sx;
			scale.y = sy;
			scale.z = sz;

			return this;

		}

		makePerspective( left, right, top, bottom, near, far ) {

			const te = this.elements;
			const x = 2 * near / ( right - left );
			const y = 2 * near / ( top - bottom );

			const a = ( right + left ) / ( right - left );
			const b = ( top + bottom ) / ( top - bottom );
			const c = - ( far + near ) / ( far - near );
			const d = - 2 * far * near / ( far - near );

			te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a;	te[ 12 ] = 0;
			te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b;	te[ 13 ] = 0;
			te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c;	te[ 14 ] = d;
			te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

			return this;

		}

		makeOrthographic( left, right, top, bottom, near, far ) {

			const te = this.elements;
			const w = 1.0 / ( right - left );
			const h = 1.0 / ( top - bottom );
			const p = 1.0 / ( far - near );

			const x = ( right + left ) * w;
			const y = ( top + bottom ) * h;
			const z = ( far + near ) * p;

			te[ 0 ] = 2 * w;	te[ 4 ] = 0;	te[ 8 ] = 0;	te[ 12 ] = - x;
			te[ 1 ] = 0;	te[ 5 ] = 2 * h;	te[ 9 ] = 0;	te[ 13 ] = - y;
			te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = - 2 * p;	te[ 14 ] = - z;
			te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = 0;	te[ 15 ] = 1;

			return this;

		}

		equals( matrix ) {

			const te = this.elements;
			const me = matrix.elements;

			for ( let i = 0; i < 16; i ++ ) {

				if ( te[ i ] !== me[ i ] ) return false;

			}

			return true;

		}

		fromArray( array, offset = 0 ) {

			for ( let i = 0; i < 16; i ++ ) {

				this.elements[ i ] = array[ i + offset ];

			}

			return this;

		}

		toArray( array = [], offset = 0 ) {

			const te = this.elements;

			array[ offset ] = te[ 0 ];
			array[ offset + 1 ] = te[ 1 ];
			array[ offset + 2 ] = te[ 2 ];
			array[ offset + 3 ] = te[ 3 ];

			array[ offset + 4 ] = te[ 4 ];
			array[ offset + 5 ] = te[ 5 ];
			array[ offset + 6 ] = te[ 6 ];
			array[ offset + 7 ] = te[ 7 ];

			array[ offset + 8 ] = te[ 8 ];
			array[ offset + 9 ] = te[ 9 ];
			array[ offset + 10 ] = te[ 10 ];
			array[ offset + 11 ] = te[ 11 ];

			array[ offset + 12 ] = te[ 12 ];
			array[ offset + 13 ] = te[ 13 ];
			array[ offset + 14 ] = te[ 14 ];
			array[ offset + 15 ] = te[ 15 ];

			return array;

		}

	}

	const _v1$5 = /*@__PURE__*/ new Vector3();
	const _m1$2 = /*@__PURE__*/ new Matrix4();
	const _zero = /*@__PURE__*/ new Vector3( 0, 0, 0 );
	const _one = /*@__PURE__*/ new Vector3( 1, 1, 1 );
	const _x = /*@__PURE__*/ new Vector3();
	const _y = /*@__PURE__*/ new Vector3();
	const _z = /*@__PURE__*/ new Vector3();

	const _matrix$1 = /*@__PURE__*/ new Matrix4();
	const _quaternion$3 = /*@__PURE__*/ new Quaternion();

	class Euler {

		constructor( x = 0, y = 0, z = 0, order = Euler.DefaultOrder ) {

			this.isEuler = true;

			this._x = x;
			this._y = y;
			this._z = z;
			this._order = order;

		}

		get x() {

			return this._x;

		}

		set x( value ) {

			this._x = value;
			this._onChangeCallback();

		}

		get y() {

			return this._y;

		}

		set y( value ) {

			this._y = value;
			this._onChangeCallback();

		}

		get z() {

			return this._z;

		}

		set z( value ) {

			this._z = value;
			this._onChangeCallback();

		}

		get order() {

			return this._order;

		}

		set order( value ) {

			this._order = value;
			this._onChangeCallback();

		}

		set( x, y, z, order = this._order ) {

			this._x = x;
			this._y = y;
			this._z = z;
			this._order = order;

			this._onChangeCallback();

			return this;

		}

		clone() {

			return new this.constructor( this._x, this._y, this._z, this._order );

		}

		copy( euler ) {

			this._x = euler._x;
			this._y = euler._y;
			this._z = euler._z;
			this._order = euler._order;

			this._onChangeCallback();

			return this;

		}

		setFromRotationMatrix( m, order = this._order, update = true ) {

			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

			const te = m.elements;
			const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
			const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
			const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

			switch ( order ) {

				case 'XYZ':

					this._y = Math.asin( clamp( m13, - 1, 1 ) );

					if ( Math.abs( m13 ) < 0.9999999 ) {

						this._x = Math.atan2( - m23, m33 );
						this._z = Math.atan2( - m12, m11 );

					} else {

						this._x = Math.atan2( m32, m22 );
						this._z = 0;

					}

					break;

				case 'YXZ':

					this._x = Math.asin( - clamp( m23, - 1, 1 ) );

					if ( Math.abs( m23 ) < 0.9999999 ) {

						this._y = Math.atan2( m13, m33 );
						this._z = Math.atan2( m21, m22 );

					} else {

						this._y = Math.atan2( - m31, m11 );
						this._z = 0;

					}

					break;

				case 'ZXY':

					this._x = Math.asin( clamp( m32, - 1, 1 ) );

					if ( Math.abs( m32 ) < 0.9999999 ) {

						this._y = Math.atan2( - m31, m33 );
						this._z = Math.atan2( - m12, m22 );

					} else {

						this._y = 0;
						this._z = Math.atan2( m21, m11 );

					}

					break;

				case 'ZYX':

					this._y = Math.asin( - clamp( m31, - 1, 1 ) );

					if ( Math.abs( m31 ) < 0.9999999 ) {

						this._x = Math.atan2( m32, m33 );
						this._z = Math.atan2( m21, m11 );

					} else {

						this._x = 0;
						this._z = Math.atan2( - m12, m22 );

					}

					break;

				case 'YZX':

					this._z = Math.asin( clamp( m21, - 1, 1 ) );

					if ( Math.abs( m21 ) < 0.9999999 ) {

						this._x = Math.atan2( - m23, m22 );
						this._y = Math.atan2( - m31, m11 );

					} else {

						this._x = 0;
						this._y = Math.atan2( m13, m33 );

					}

					break;

				case 'XZY':

					this._z = Math.asin( - clamp( m12, - 1, 1 ) );

					if ( Math.abs( m12 ) < 0.9999999 ) {

						this._x = Math.atan2( m32, m22 );
						this._y = Math.atan2( m13, m11 );

					} else {

						this._x = Math.atan2( - m23, m33 );
						this._y = 0;

					}

					break;

				default:

					console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

			}

			this._order = order;

			if ( update === true ) this._onChangeCallback();

			return this;

		}

		setFromQuaternion( q, order, update ) {

			_matrix$1.makeRotationFromQuaternion( q );

			return this.setFromRotationMatrix( _matrix$1, order, update );

		}

		setFromVector3( v, order = this._order ) {

			return this.set( v.x, v.y, v.z, order );

		}

		reorder( newOrder ) {

			// WARNING: this discards revolution information -bhouston

			_quaternion$3.setFromEuler( this );

			return this.setFromQuaternion( _quaternion$3, newOrder );

		}

		equals( euler ) {

			return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

		}

		fromArray( array ) {

			this._x = array[ 0 ];
			this._y = array[ 1 ];
			this._z = array[ 2 ];
			if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

			this._onChangeCallback();

			return this;

		}

		toArray( array = [], offset = 0 ) {

			array[ offset ] = this._x;
			array[ offset + 1 ] = this._y;
			array[ offset + 2 ] = this._z;
			array[ offset + 3 ] = this._order;

			return array;

		}

		_onChange( callback ) {

			this._onChangeCallback = callback;

			return this;

		}

		_onChangeCallback() {}

		*[ Symbol.iterator ]() {

			yield this._x;
			yield this._y;
			yield this._z;
			yield this._order;

		}

		// @deprecated since r138, 02cf0df1cb4575d5842fef9c85bb5a89fe020d53

		toVector3() {

			console.error( 'THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead' );

		}

	}

	Euler.DefaultOrder = 'XYZ';
	Euler.RotationOrders = [ 'XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX' ];

	if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {

		__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'register', { detail: {
			revision: REVISION,
		} } ) );

	}

	if ( typeof window !== 'undefined' ) {

		if ( window.__THREE__ ) {

			console.warn( 'WARNING: Multiple instances of Three.js being imported.' );

		} else {

			window.__THREE__ = REVISION;

		}

	}

	class MediapipeFacemeshExtension {
	  constructor(jsPsych) {
	    this.jsPsych = jsPsych;
	    this.recordedChunks = new Array();
	    this.usingNewAPI = false;
	    this.onResultCallbacks = new Array();
	    this.recordTracks = false;
	    this.initialize = async (params) => {
	      this.usingNewAPI = params?.useFaceLandmarker ?? false;
	      if (this.usingNewAPI) {
	        const vision = await Uo.forVisionTasks(
	          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
	        );
	        this.faceLandmarker = await uc.createFromOptions(vision, {
	          baseOptions: {
	            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task"
	          },
	          runningMode: "VIDEO",
	          // <-- WICHTIG für Video-Streams
	          outputFaceBlendshapes: true,
	          outputFacialTransformationMatrixes: true,
	          numFaces: 1
	        });
	      } else {
	        this.faceMesh = new FaceMesh({
	          locateFile: params?.locateFile ?? function(file) {
	            return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
	          }
	        });
	        this.faceMesh.setOptions({
	          maxNumFaces: 1,
	          enableFaceGeometry: true,
	          minDetectionConfidence: 0.5,
	          minTrackingConfidence: 0.5,
	          refineLandmarks: false
	        });
	        await this.faceMesh.initialize();
	      }
	    };
	    this.on_start = () => {
	      this.canvasElement?.remove();
	      this.videoElement?.remove();
	      this.canvasElement = document.createElement("canvas");
	      this.canvasElement.width = 1280;
	      this.canvasElement.height = 720;
	      this.videoElement = document.createElement("video");
	      this.videoElement.muted = true;
	      this.mediaStream = this.jsPsych.pluginAPI.getCameraStream();
	      if (!this.mediaStream) {
	        console.warn(
	          "The mediapipe-face-mesh extension is trying to start but the camera is not initialized."
	        );
	        return;
	      }
	      this.videoElement.srcObject = this.mediaStream;
	      this.videoElement.onloadedmetadata = () => {
	        this.stopAnimationFrame();
	        this.animationFrameId = window.requestAnimationFrame(
	          this.processFrame.bind(this)
	        );
	      };
	      if (!this.usingNewAPI) {
	        this.faceMesh.onResults(this.onMediaPipeResult.bind(this));
	      }
	      this.videoElement.play();
	    };
	    this.on_load = (params) => {
	      this.recordedChunks = [];
	      this.recordTracks = params?.record ?? false;
	    };
	    this.on_finish = () => {
	      console.log("face_mesh tracked chunks: " + this.recordedChunks.length);
	      this.stopAnimationFrame();
	      this.recordTracks = false;
	      return { face_mesh: this.recordedChunks };
	    };
	    autoBind$1(this);
	  }
	  static {
	    this.info = {
	      name: "mediapipe-face-mesh"
	    };
	  }
	  stopAnimationFrame() {
	    window.cancelAnimationFrame(this.animationFrameId);
	  }
	  async processFrame() {
	    const ctx = this.canvasElement.getContext("2d");
	    ctx.drawImage(this.videoElement, 0, 0);
	    if (this.usingNewAPI) {
	      const results = this.faceLandmarker.detectForVideo(this.videoElement, performance.now());
	      this.onFaceLandmarkerResult(results);
	    } else {
	      await this.faceMesh.send({ image: this.canvasElement });
	    }
	    this.animationFrameId = window.requestAnimationFrame(
	      this.processFrame.bind(this)
	    );
	  }
	  addTrackingResultCallback(callback) {
	    this.onResultCallbacks.push(callback);
	  }
	  removeTrackingResultCallback(callback) {
	    this.onResultCallbacks.splice(this.onResultCallbacks.indexOf(callback), 1);
	  }
	  // Alte API Ergebnisse
	  onMediaPipeResult(results) {
	    if (results.multiFaceGeometry[0]) {
	      const transformationMatrix = results.multiFaceGeometry[0].getPoseTransformMatrix().getPackedDataList();
	      const rotation = new Euler().setFromRotationMatrix(
	        new Matrix4().fromArray(transformationMatrix)
	      );
	      const translation = new Vector3().setFromMatrixPosition(
	        new Matrix4().fromArray(transformationMatrix)
	      );
	      const result = {
	        frame_id: this.animationFrameId,
	        transformation: transformationMatrix,
	        rotation,
	        translation
	      };
	      if (this.recordTracks) this.recordedChunks.push(result);
	      this.onResultCallbacks.forEach((cb) => cb(result));
	    }
	  }
	  // Neue API Ergebnisse
	  onFaceLandmarkerResult(results) {
	    let transformationMatrix, rotation, translation, blendshapes;
	    if (results.facialTransformationMatrixes?.length) {
	      transformationMatrix = results.facialTransformationMatrixes[0].data;
	      rotation = new Euler().setFromRotationMatrix(
	        new Matrix4().fromArray(transformationMatrix)
	      );
	      translation = new Vector3().setFromMatrixPosition(
	        new Matrix4().fromArray(transformationMatrix)
	      );
	    }
	    if (results.faceBlendshapes?.length) {
	      blendshapes = results.faceBlendshapes[0].categories.map((c) => ({
	        name: c.categoryName,
	        score: c.score
	      }));
	    }
	    const result = {
	      frame_id: this.animationFrameId,
	      transformation: transformationMatrix,
	      rotation,
	      translation,
	      blendshapes
	    };
	    if (this.recordTracks) this.recordedChunks.push(result);
	    this.onResultCallbacks.forEach((cb) => cb(result));
	  }
	}

	return MediapipeFacemeshExtension;

})();
//# sourceMappingURL=index.browser.js.map
