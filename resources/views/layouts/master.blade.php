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
<!--<script src="{{ asset('js/pouchdb-6.4.3.min.js') }}"></script>-->

<script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/util.js') }}"></script>

</body>
</html>