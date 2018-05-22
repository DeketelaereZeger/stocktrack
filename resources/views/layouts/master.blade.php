<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
    <link href="{{ asset('manifest.json') }}" rel="manifest">
    <link href="{{ asset('images/icons/favicon-16x16.png') }}" rel="shortcut icon">
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/nav.css') }}" rel="stylesheet">
    <link href="{{ asset('css/screen.css') }}" rel="stylesheet">
</head>
<body>
@include('layouts.nav')
<div class=" container page-wrapper-container" id="page-wrapper">

    @yield('content')

</div>

<!-- Scripts -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>-->
<!--<script src="{{ asset('js/localforage.js') }}"></script>-->
<!--<script src="https://cdn.rawgit.com/mozilla/localForage/master/dist/localforage.js"></script>-->
<!--<script src="{{ asset('js/pouchdb-6.4.3.min.js') }}"></script>-->
<!--<script src="//cdn.jsdelivr.net/npm/pouchdb@6.4.3/dist/pouchdb.min.js"></script>-->

<script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/util.js') }}" async></script>
<script>
    if ('serviceWorker' in navigator ) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function(err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
</script>


<!--
<script src="{{ asset('resources/es6-promise/es6-promise.js') }}" async></script>
<script src="{{ asset('resources/fetch/fetch.js') }}" async></script>
<script src="{{ asset('resources/localforage/localforage.min.js') }}" async></script>
<script src="{{ asset('resources/localforage/localforage-getitems.js') }}" async></script>
<script src="{{ asset('resources/localforage/localforage-setitems.js') }}" async></script>
<script src="{{ asset('resources/systemjs/system.js') }}" async></script>
 -->
<!--
<script src="resources/es6-promise/es6-promise.js"></script>
<script src="resources/fetch/fetch.js"></script>
<script src="resources/localforage/localforage.min.js"></script>
<script src="resources/localforage/localforage-getitems.js"></script>
<script src="resources/localforage/localforage-setitems.js"></script>
<script src="resources/systemjs/system.js"></script>

<script>
    System.import('./js/app_sw.js');
</script>
-->
</body>
</html>