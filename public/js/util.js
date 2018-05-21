$(document).ready(function () {
    /*
            // This works on all devices/browsers, and uses IndexedDBShim as a final fallback
            var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

        // Open (or create) the database
            var open = indexedDB.open("StockTrackIndexedDB", 1);

        // Create the schema
            open.onupgradeneeded = function() {
                var db = open.result;
                var store = db.createObjectStore("StockTrackObjectStore", {keyPath: "id"});
                var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
            };

            open.onsuccess = function() {
                // Start a new transaction
                var db = open.result;
                var tx = db.transaction("MyObjectStore", "readwrite");
                var store = tx.objectStore("MyObjectStore");
                var index = store.index("NameIndex");

                // Add some data
                store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
                store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});

                // Query the data
                var getJohn = store.get(12345);
                var getBob = index.get(["Smith", "Bob"]);

                getJohn.onsuccess = function() {
                    console.log(getJohn.result.name.first);  // => "John"
                };

                getBob.onsuccess = function() {
                    console.log(getBob.result.name.first);   // => "Bob"
                };

                // Close the db when the transaction is done
                tx.oncomplete = function() {
                    db.close();
                };
            }

    */
    /*
    POUCHDB
        var db = new PouchDB('stocktrack');
        //db.replicate.to('https://www.zegerdeketelaere.be/stocks');
        db.replicate.to('http://stocktrack.oo/stocks');
        db.changes().on('change', function () {
            console.log('changesss');
        })
        */
    /*
    LOCALFORAGE
    // Feel free to change the drivers order :)
        localforage.setDriver([
            localforage.INDEXEDDB,
            localforage.WEBSQL,
            localforage.LOCALSTORAGE
        ]).then(function () {
            var key = 'STORE_KEY';
            // var value = 'What we save offline';
            var value = 'xd';
            value[0] = 65
            // var value = undefined;
            var UNKNOWN_KEY = 'unknown_key';

            localforage.setItem(key, value, function () {
                console.log('Using:' + localforage.driver());
                console.log('Saved: ' + value);

                localforage.getItem(key).then(function (readValue) {
                    console.log('Read: ', readValue);
                });

                // Since this key hasn't been set yet, we'll get a null value
                localforage.getItem(UNKNOWN_KEY, function (err, readValue) {
                    console.log('Result of reading ' + UNKNOWN_KEY, readValue);
                });
            });
        });

    // this is just for demonstration purposes
        var originalConsoleLog = console.log;

        function consoleLogProxy() {
            originalConsoleLog.apply(console, arguments);
            var htmlConsole = document.getElementById('htmlConsole');
            if (htmlConsole) {
                var message = Array.prototype.slice.apply(arguments, []).join(' ');
                htmlConsole.innerHTML += '<li>' + message + '</li>';
            }
        }

        console.log = consoleLogProxy;
    */
});
