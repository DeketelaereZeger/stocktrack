"use strict";

//New

var StockTrackCacheName = 'StockTrackCacheV1';
var StockTrackCachePagesName = 'StockTrackCachePagesV1';
var StockTrackCacheImagesName = 'StockTrackCacheImagesV1';

var StockTrackCacheFiles = [
    'js/app_sw.js',
    'js/app.js',
    'js/jquery-3.3.1.min.js',
    'js/bootstrap.min.js',
    'js/nav.js',
    'js/swRegister.js',

    'css/app.css',
    'css/bootstrap.min.css',
    'css/nav.css',
    'css/screen.css',

    'js/carService.js',
    'js/clientStorage.js',

    './',
    'resources/es6-promise/es6-promise.js',
    'resources/fetch/fetch.js',
    'resources/localforage/localforage.min.js',
    'resources/localforage/localforage-getitems.js',
    'resources/localforage/localforage-setitems.js',
    'resources/systemjs/system.js',
    'resources/systemjs/system-polyfills.js'
];

var latestPath = '/pluralsight/courses/progressive-web-apps/service/latest-deals.php';
var imagePath = '/pluralsight/courses/progressive-web-apps/service/car-image.php';
var carPath = '/pluralsight/courses/progressive-web-apps/service/car.php';

self.addEventListener('install', function (event) {
    console.log('From SW: Install Event', event);
    self.skipWaiting();
    event.waitUntil(
        caches.open(StockTrackCacheName)
            .then(function (cache) {
                return cache.addAll(StockTrackCacheFiles);
            })
    );
});

self.addEventListener('activate', function (event) {
    console.log('From SW: Activate State', event);
    self.clients.claim();
    event.waitUntil(
        caches.keys()
            .then(function (cacheKeys) {
                var deletePromises = [];
                for (var i = 0; i < cacheKeys.length; i++) {
                    if (cacheKeys[i] != StockTrackCacheName &&
                        cacheKeys[i] != StockTrackCachePagesName &&
                        cacheKeys[i] != StockTrackCacheImagesName) {
                        deletePromises.push(caches.delete(cacheKeys[i]));
                    }
                }
                return Promise.all(deletePromises);
            })
    )
});

self.addEventListener('fetch', function (event) {
    var requestUrl = new URL(event.request.url);
    var requestPath = requestUrl.pathname;
    var fileName = requestPath.substring(requestPath.lastIndexOf('/') + 1);

    if (requestPath == latestPath || fileName == "sw.js") {
        event.respondWith(fetch(event.request));
    } else if (requestPath == imagePath) {
        event.respondWith(networkFirstStrategy(event.request));
    } else {
        event.respondWith(cacheFirstStrategy(event.request));
    }
});

function cacheFirstStrategy(request) {
    return caches.match(request).then(function (cacheResponse) {
        return cacheResponse || fetchRequestAndCache(request);
    });
}

function networkFirstStrategy(request) {
    return fetchRequestAndCache(request).catch(function (response) {
        return caches.match(request);
    });
}

function fetchRequestAndCache(request) {
    return fetch(request).then(function (networkResponse) {
        caches.open(getCacheName(request)).then(function (cache) {
            cache.put(request, networkResponse);
        });
        return networkResponse.clone();
    });
}

function getCacheName(request) {
    var requestUrl = new URL(request.url);
    var requestPath = requestUrl.pathname;

    if (requestPath == imagePath) {
        return StockTrackCacheImagesName;
    } else if (requestPath == carPath) {
        return StockTrackCachePagesName;
    } else {
        return StockTrackCacheName;
    }
}
