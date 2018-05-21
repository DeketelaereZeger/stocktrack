@extends('layouts/master')
@section('content')

    <?php
    //dump($indices);

    ?>
    <div class="row">
        <div class="company col-md-4 col-sm-6 mb-4">
            <h1>Indices </h1>
        </div>
    </div>

    <div class="row">
        @foreach($indices as $indice)
            <div class="company col-lg-12 col-md-6 col-sm-6 mb-4">
                <div class=" company-card ">
                    <h2>{{$indice->name}} ({{$indice->ticker}})</h2>
                    <p>{{$indice->description}}. &#9400; Bloomberg.com</p>
                    <a href="{{ url('indices/'.$indice->ticker) }}">Click here to see the companies from this indice</a>
                </div>
            </div>
        @endforeach
    </div>

@endsection
