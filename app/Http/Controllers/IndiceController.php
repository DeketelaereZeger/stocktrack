<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;
use App\Indice;
use Illuminate\Support\Facades\DB;

class IndiceController extends Controller
{
    public function index()
    {
        $indices = Indice::all();
        return view('indices/indicesoverview')->with(compact('indices'));

        //return $indices;

    }

    public function show($ticker)
    {
        $indice = Indice::where('ticker', $ticker)->first();

        $stocks_in_indice = DB::table('companies')->where('indices_id', $indice->indices_id)->get();
        //dump($stocks_in_indice);
        return view('indices/indice')->with(compact('stocks_in_indice'))
            ->with(compact('indice'));

        //return $stocks_in_indice;
    }

}
