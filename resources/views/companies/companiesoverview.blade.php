@extends('layouts/master')
@section('content')

    <?php
    //dump($companies);

    ?>
    <div class="row">
        <div class="company col-md-12 col-sm-12 mb-4">
            <h1>All the companies from our database are listed below... </h1>
        </div>
    </div>
    <div class="row">
        @foreach($companies as $company)
            <div class="company col-md-4 col-sm-6 mb-4">
                <div class=" company-card ">
                    <h2>{{$company->ticker}}</h2>
                    <p>{{$company->description}}</p>
                    <p>Last known price: {{$company->closing_price}} euro</p>
                    <p>Data from: {{$company->latest_date}}</p>
                    <a href="{{ url('stocks/'.$company->ticker) }}">Click here to see more details of this company</a>

                </div>
            </div>
        @endforeach
    </div>
@endsection
