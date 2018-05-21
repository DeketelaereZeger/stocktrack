<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index.index');
});

ResponseCache::clear();
Route::get('/', 'IndexController@index');           //url gives overview of all the indices AND will be cached

Route::get('/indices', 'IndiceController@index');           //url gives overview of all the indices AND will be cached
Route::get('/indices/{ticker}',['middleware' => 'doNotCacheResponse', 'uses' => 'IndiceController@show']);   //overview of all companies within an indice
Route::get('/stocks', ['middleware' => 'doNotCacheResponse', 'uses' => 'CompanyController@index']);           //overview of all the companies in the db
Route::get('/stocks/{ticker}',['middleware' => 'doNotCacheResponse', 'uses' => 'CompanyController@show']);   //overview of the company
Route::get('/search',['middleware' => 'doNotCacheResponse', 'uses' => 'SearchController@search']);            //overview of the searched company/index



Auth::routes();
Route::get('/account', 'HomeController@index')->name('account');
