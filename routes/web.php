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

//NEW
Route::get('/indices', 'IndiceController@index');           //url gives overview of all the indices
Route::get('/indices/{ticker}', 'IndiceController@show');   //url gives overview of all companies within an indice
Route::get('/stocks', 'CompanyController@index');           //url gives overview of all the companies in the db
Route::get('/stocks/{ticker}', 'CompanyController@show');   //url gives overview of the company
Route::get('/search', 'SearchController@search');            //url gives overview of the searched company/index




/* OLD IDEAS
Route::get('/news', 'NewsController@index');
//Route::get('/indices', 'IndiceController@index');   //url gives overview of different indices, bv: aex, bel20,...
Route::get('/indices/{indicecode}', 'IndiceController@show');   //url gives overview of different companies in an indice: AB Inbev, Ackermans & van Haaren


Route::get('/api/getstocks', 'IndiceController@index');         //url gives overview of all companies
Route::get('/stocks', 'CompanyController@index');               //url gives overview of all companies
Route::get('/stocks/{tickercode}', 'CompanyController@show');    //url gives overview of a company
Route::get('/account/portfolio', 'PortfolioController@index');  //url gives overview of a users portfolio
*/

Auth::routes();
Route::get('/account', 'HomeController@index')->name('account');
