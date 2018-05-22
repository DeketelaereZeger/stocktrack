"use strict";var precacheConfig=[["/","eb1f806462f5c2bbfe10084cb80f5530"],["/indices","6907eb0b4cf64e7a50257155bd0befc8"],["/indices/AEX","6907eb0b4cf64e7a50257155bd0befc8"],["/indices/BEL20","6907eb0b4cf64e7a50257155bd0befc8"],["/stocks","55be0b2343a97e2b2c57e36049a87024"],["/stocks/AALB","5830b0732477c6925449382f48b2168d"],["/stocks/ABI","5830b0732477c6925449382f48b2168d"],["/stocks/ABLX","5830b0732477c6925449382f48b2168d"],["/stocks/ABN","5830b0732477c6925449382f48b2168d"],["/stocks/ACKB","5830b0732477c6925449382f48b2168d"],["/stocks/AD","5830b0732477c6925449382f48b2168d"],["/stocks/AGN","5830b0732477c6925449382f48b2168d"],["/stocks/AGS","5830b0732477c6925449382f48b2168d"],["/stocks/AKZA","5830b0732477c6925449382f48b2168d"],["/stocks/APAM","5830b0732477c6925449382f48b2168d"],["/stocks/ASML","5830b0732477c6925449382f48b2168d"],["/stocks/ASRNL","5830b0732477c6925449382f48b2168d"],["/stocks/ATC","5830b0732477c6925449382f48b2168d"],["/stocks/BPOST","5830b0732477c6925449382f48b2168d"],["/stocks/COFB","5830b0732477c6925449382f48b2168d"],["/stocks/COLR","5830b0732477c6925449382f48b2168d"],["/stocks/DSM","5830b0732477c6925449382f48b2168d"],["/stocks/ENGI","5830b0732477c6925449382f48b2168d"],["/stocks/GBLB","5830b0732477c6925449382f48b2168d"],["/stocks/GLPG","5830b0732477c6925449382f48b2168d"],["/stocks/GTO","5830b0732477c6925449382f48b2168d"],["/stocks/HEIA","5830b0732477c6925449382f48b2168d"],["/stocks/INGA","5830b0732477c6925449382f48b2168d"],["/stocks/KBC","5830b0732477c6925449382f48b2168d"],["/stocks/KPN","5830b0732477c6925449382f48b2168d"],["/stocks/LIGHT","5830b0732477c6925449382f48b2168d"],["/stocks/MT","5830b0732477c6925449382f48b2168d"],["/stocks/NN","5830b0732477c6925449382f48b2168d"],["/stocks/ONTEX","5830b0732477c6925449382f48b2168d"],["/stocks/PHIA","5830b0732477c6925449382f48b2168d"],["/stocks/PROX","5830b0732477c6925449382f48b2168d"],["/stocks/RAND","5830b0732477c6925449382f48b2168d"],["/stocks/RDSA","5830b0732477c6925449382f48b2168d"],["/stocks/RELX","5830b0732477c6925449382f48b2168d"],["/stocks/SOF","5830b0732477c6925449382f48b2168d"],["/stocks/SOLB","5830b0732477c6925449382f48b2168d"],["/stocks/TNET","5830b0732477c6925449382f48b2168d"],["/stocks/UCB","5830b0732477c6925449382f48b2168d"],["/stocks/UL","5830b0732477c6925449382f48b2168d"],["/stocks/UMI","5830b0732477c6925449382f48b2168d"],["/stocks/UNA","5830b0732477c6925449382f48b2168d"],["/stocks/VPK","5830b0732477c6925449382f48b2168d"],["/stocks/WKL","5830b0732477c6925449382f48b2168d"],["css/app.css","943ad87b58616383f50a6d1649e5487e"],["css/bootstrap.min.css","450fc463b8b1a349df717056fbb3e078"],["css/nav.css","9437932e0a81e4adaa9e3fa8644a57dd"],["css/screen.css","64225691d79bedc54983b4f38dc94321"],["js/app.js","7ae9dfc26c8cddb5d10b1cc4da64ec0a"],["js/bootstrap.min.js","14d449eb8876fa55e1ef3c2cc52b0c17"],["js/jquery-3.3.1.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["js/nav.js","ed874936a3ee8328700504f136d1656d"],["js/swRegister.js","75d72c184f94a973fcb8c55389a33c9e"],["js/util.js","4149811bb8aa0f5229f554aaeb1cd594"],["resources/es6-promise/es6-promise.js","86fbee1d1ebe2fe93306a8790223e1e0"],["resources/fetch/fetch.js","8dde8c02fc88d16f85410933c487e910"],["resources/localforage/localforage-getitems.js","68f98125d91eac9f8326965835ca294b"],["resources/localforage/localforage-setitems.js","fdfbf0762554633669d14ebf9f9b4a80"],["resources/localforage/localforage.min.js","c1172904688c90b1855e5b510049108a"],["resources/systemjs/system-polyfills.js","22e591df3eee16245bc9f4533842bf59"],["resources/systemjs/system-polyfills.src.js","9569b37e4ca0c9dada7c9d3b1f2a3a73"],["resources/systemjs/system.js","c4bb7ceaf27c7104b39b3455f6f345c1"],["resources/systemjs/system.src.js","2c35115f955e8be831588fc78ed63960"],["service-worker.js","ea0df894dad278b775ea70754e1162a4"],["webpack.config.js","f17b40636bd7c67bd38f2c2050315150"]],cacheName="sw-precache-v3-pwa-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL("/",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(c,a){if(!n[c]){if(!t[c]){var i="function"==typeof require&&require;if(!a&&i)return i(c,!0);if(s)return s(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var s="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function s(e,t,n){var o=e.url,s=n.maxAgeSeconds,c=n.maxEntries,a=n.name,i=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+s),u.getDb(a).then(function(e){return u.setTimestampForUrl(e,o,i)}).then(function(e){return u.expireEntries(e,c,s,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function c(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var a,i=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||i.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||i.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=s.bind(null,e,t,n);a=a?a.then(r):r()}(e,n,r)})}),r.clone()})},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return o(t).then(function(t){return t.add(e)})},uncache:function(e,t){return o(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||c(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",o=1,s="store",c="url",a="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise(function(t,n){var i=indexedDB.open(r+e,o);i.onupgradeneeded=function(){i.result.createObjectStore(s,{keyPath:c}).createIndex(a,a,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}})}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,o){var c=e.transaction(s,"readwrite");c.objectStore(s).put({url:t,timestamp:n}),c.oncomplete=function(){r(e)},c.onabort=function(){o(c.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,u=[],f=e.transaction(s,"readwrite"),h=f.objectStore(s);h.index(a).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[a]){var r=t.value[c];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=o}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(s,"readwrite"),u=i.objectStore(s),f=u.index(a),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var s=r.value[c];o.push(s),u.delete(s),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),s=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=s.match(e.request);t?e.respondWith(t(e.request)):s.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(s.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(e){return Promise.all(c.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(t){return o.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),s=function(e,t,n,s){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=s,this.handler=n};s.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=s},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),o=e("./helpers"),s=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,s){var c;s=s||{},t instanceof RegExp?c=RegExp:c=(c=s.origin||self.location.origin)instanceof RegExp?c.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(c),e=e.toLowerCase();var a=new r(e,t,n,s);this.routes.has(c)||this.routes.set(c,new Map);var i=this.routes.get(c);i.has(e)||i.set(e,new Map);var u=i.get(e),f=a.regexp||a.fullUrlRegExp;u.has(f.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,a)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,s(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],c=o&&o.get(e.toLowerCase());if(c){var a=s(c,n);if(a.length>0)return a[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var s=n.cache||r.cache,c=Date.now();return o.isResponseFresh(t,s.maxAgeSeconds,c)?t:o.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,s=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,s))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(s,c){var a=!1,i=[],u=function(e){i.push(e.toString()),a?c(new Error('Both cache and network failed: "'+i.join('", "')+'"')):a=!0},f=function(e){e instanceof Response?s(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),o(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var s=(n=n||{}).successResponses||r.successResponses,c=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var a,i,u=[];if(c){var f=new Promise(function(s){a=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,c=Date.now(),a=t.maxAgeSeconds;o.isResponseFresh(e,a,c)&&s(e)})},1e3*c)});u.push(f)}var h=o.fetchAndCache(e,n).then(function(e){if(a&&clearTimeout(a),s.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),s=e("./helpers"),c=e("./strategies"),a=e("./listeners");s.debug("Service Worker Toolbox is loading"),self.addEventListener("install",a.installListener),self.addEventListener("activate",a.activateListener),self.addEventListener("fetch",a.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:s.cache,uncache:s.uncache,precache:s.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,s=0,c="",u=t&&t.delimiter||"/";null!=(n=d.exec(e));){var f=n[0],h=n[1],l=n.index;if(c+=e.slice(s,l),s=l+f.length,h)c+=h[1];else{var p=e[s],b=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var x=null!=b&&null!=p&&p!==b,k="+"===w||"*"===w,R="?"===w||"*"===w,E=n[2]||u,C=g||v;r.push({name:m||o++,prefix:b||"",delimiter:E,optional:R,repeat:k,partial:x,asterisk:!!y,pattern:C?i(C):y?".*":"[^"+a(E)+"]+?"})}}return s<e.length&&(c+=e.substr(s)),c&&r.push(c),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var c="",a=n||{},i=(r||{}).pretty?o:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,l=a[f.name];if(null==l){if(f.optional){f.partial&&(c+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(p(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=i(l[d]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");c+=(0===d?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?s(l):i(l),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');c+=f.prefix+h}}else c+=f}return c}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t,n){p(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,s="",c=0;c<e.length;c++){var i=e[c];if("string"==typeof i)s+=a(i);else{var h=a(i.prefix),l="(?:"+i.pattern+")";t.push(i),i.repeat&&(l+="(?:"+h+l+")*"),s+=l=i.optional?i.partial?h+"("+l+")?":"(?:"+h+"("+l+"))?":h+"("+l+")"}}var d=a(n.delimiter||"/"),b=s.slice(-d.length)===d;return r||(s=(b?s.slice(0,-d.length):s)+"(?:"+d+"(?=$))?"),s+=o?"$":r&&b?"":"(?="+d+"|$)",u(new RegExp("^"+s,f(n)),t)}function l(e,t,n){return p(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):p(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(l(e[o],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return h(r(e,n),t,n)}(e,t,n)}var p=e("isarray");t.exports=l,t.exports.parse=r,t.exports.compile=function(e,t){return c(r(e,t))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=h;var d=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^https:\/\/fonts\.googleapis\.com\//,toolbox.cacheFirst,{});