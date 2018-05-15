@extends('layouts/master')
@section('content')

    <?php
    //dump($singlecompanyoverview);


    ?>
    <div class="row">
        <div class="company col-md-12 col-sm-12 mb-4">
            <h1> {{$singlecompanyoverview->name}} </h1>
        </div>
    </div>
    <div class="row">

        <div class="company col-md-4 col-sm-6 mb-4">
            <div class=" company-card ">
                <p>{{$singlecompanyoverview->description}}</p>
                <p>Last known price: {{$singlecompanyoverview->closing_price}}  euro</p>
                <p>Highest price: {{$singlecompanyoverview->highest_price}} euro</p>
                <p>lowest price: {{$singlecompanyoverview->lowest_price}} euro</p>
                <p>Trading volume: {{$singlecompanyoverview->trading_volume}} shares</p>
                <p>Trading day: {{$singlecompanyoverview->latest_date}}</p>
            </div>
        </div>
    </div>
@endsection
