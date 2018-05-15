<?php
/**
 * Created by PhpStorm.
 * User: Zeger
 * Date: 28/02/2018
 * Time: 15:40
 */
?>

<header id="header" class="alt">

    <nav class="navbar navbar-expand-md navbar-dark" role="navigation">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
            <a class="navbar-brand" href="/">StockTrack</a>
            <ul class="navbar-nav mr-auto mt-2 mb-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="/indices">Indices</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/stocks">Stocks</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My StockTrack</a>
                </li>
            </ul>
            <form action="{{ URL::action( 'SearchController@search' ) }}" class="form-inline my-2 my-lg-0">

                <input name="search" class="form-control mr-sm-2" type="search" placeholder="Search.." aria-label="Search">

                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </div>
    </nav>
</header>


