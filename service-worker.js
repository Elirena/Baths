"use strict";var precacheConfig=[["/baths/index.html","9cdc0ada70ead0eb8c4a1f5df6af56a3"],["/baths/static/css/main.ec38e64d.css","9eaf45b1798c4591f7bd1b30fdc7f8ab"],["/baths/static/js/main.460885b3.js","92ace646f42868769e01f999a06e0a50"],["/baths/static/media/1.8b6743d0.jpg","8b6743d0ee3f325de45359a45f6bf9a9"],["/baths/static/media/10.82672cb8.jpg","82672cb8d3ec12c60570a5bc7e3d71ab"],["/baths/static/media/11.0bbfcca8.jpg","0bbfcca8d9f4f567804b49e21ea68db4"],["/baths/static/media/12.58eaedc6.jpg","58eaedc6c3d27cda38999d222731056a"],["/baths/static/media/13.92ab0a4b.jpg","92ab0a4b113a063ab4b552a3b55b101e"],["/baths/static/media/14.024063e9.jpg","024063e914713d7e9b27faf43e7f7762"],["/baths/static/media/15.7aec91a2.jpg","7aec91a2975f0c992cee96c5e90ac716"],["/baths/static/media/16.dfbbd3fc.jpg","dfbbd3fcc7606dace1318a3830c651cc"],["/baths/static/media/17.873eabc7.jpg","873eabc75a902c8356f62397ac812620"],["/baths/static/media/18.01d2a943.jpg","01d2a9431551fc4da2c54b1ae4473167"],["/baths/static/media/19.5d744fbd.jpg","5d744fbda85c64df055261f98cc60313"],["/baths/static/media/2.8af52958.jpg","8af5295802eec4dc89226a69882cf7b5"],["/baths/static/media/20.82d79a7a.jpg","82d79a7a6db4206ec7379acc6ea9aea6"],["/baths/static/media/21.0e0f9c5d.jpg","0e0f9c5dfee3dc55457407b4bfcd784d"],["/baths/static/media/22.0957cc9e.jpg","0957cc9ea31705e675388e3da2f5312f"],["/baths/static/media/23.602ee805.jpg","602ee8052091cef5d8966bb544a87426"],["/baths/static/media/24.add5f86f.jpg","add5f86f370dad0ceaa5e95962e13836"],["/baths/static/media/25.bc75fe50.jpg","bc75fe50291fe2a2f5f4c196b691784b"],["/baths/static/media/26.544b141b.jpg","544b141b81041a9b46a21641c8926a51"],["/baths/static/media/27.9244e02d.jpg","9244e02d889c2dcc47828621fdca71b9"],["/baths/static/media/28.f85c4f3b.jpg","f85c4f3bf864f6735dfbf4cb7a83ef6a"],["/baths/static/media/29.2c424df6.jpg","2c424df65b48a5c5326cb321531b2ad3"],["/baths/static/media/3.6cdb2164.jpg","6cdb2164f8684b1356fc51ee13fedd6c"],["/baths/static/media/30.ca8db59f.jpg","ca8db59fc06eb7d0129d757358e3f304"],["/baths/static/media/31.2c60d5d2.jpg","2c60d5d239a26981a3008dd3a948d1ab"],["/baths/static/media/32.1c2add7d.jpg","1c2add7d4a917bb5948df318f9607cb8"],["/baths/static/media/4.2a54a16b.jpg","2a54a16b79dba32e2f77712b4d7eb0c5"],["/baths/static/media/5.ad8758ac.jpg","ad8758ac778ac5e7a327a43cb190458b"],["/baths/static/media/6.fe30aa01.jpg","fe30aa01da6631565fc3c3813d681d3c"],["/baths/static/media/7.4e9131d2.jpg","4e9131d2b955e29590c7dce409c22bf2"],["/baths/static/media/8.73a68e89.jpg","73a68e891141e923537d654fd78695d4"],["/baths/static/media/9.a4c44eda.jpg","a4c44eda1ffc67b9874498e382c7a466"],["/baths/static/media/payfor.e2cfbb27.png","e2cfbb2768654f8364a4d489e99da132"],["/baths/static/media/q1.0590a77a.jpg","0590a77ad4c023e62ceeaa30a1caf846"],["/baths/static/media/q3.a4106d91.jpg","a4106d91c247283aad7a72f256b045f2"],["/baths/static/media/q4.261f6f28.jpg","261f6f28076156bf818112c7caa7e39b"],["/baths/static/media/q8.c6b3f846.jpg","c6b3f846f46cc79dcc2d47ec9a287658"],["/baths/static/media/reputation.cc9d8ce2.png","cc9d8ce250cbc221b7f2ba704cfaf138"],["/baths/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/baths/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/baths/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/baths/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/baths/static/media/slide1.a9ef7a3d.jpg","a9ef7a3d8748b5710655e3466dd4b70a"],["/baths/static/media/slide2.4237a792.jpg","4237a7922a3782abe19310c3f642738b"],["/baths/static/media/slide3.cce48581.jpg","cce4858185d53fb65bd4088861a577c0"],["/baths/static/media/slide4.3a2192e2.jpg","3a2192e22358f7cb61018c93b0c5ccf1"],["/baths/static/media/slide5.59177cb8.jpg","59177cb8d09a0ce0162855cd97c32ef7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,t,c){var s=new URL(a);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,t){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return t.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],c=new URL(e,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!t.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return c.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var t=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var s="/baths/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(s,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});