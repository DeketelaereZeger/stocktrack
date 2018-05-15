
@extends('layouts/master')
@section('content')

    <?php
    //dump($results);

    ?>
    <div class="row">
        <div class="company col-md-12 col-sm-12 mb-4">
            <h1>Your search results are the following... </h1>
        </div>
    </div>
    <div class="row">
        @foreach($results as $company)
            <div class="company col-md-4 col-sm-6 mb-4">
                <div class=" company-card ">
                    <h2>{{$company->name}}</h2>
                   <!-- <p>{{$company->description}}</p>
                    <p>Last known price: {{$company->closing_price}}</p>
                    <p>Data from: {{$company->latest_date}}</p>-->
                    <a href="{{ url('stocks/'.$company->ticker) }}">Click here to see more details of this company</a>

                </div>
            </div>
        @endforeach
    </div>
@endsection




