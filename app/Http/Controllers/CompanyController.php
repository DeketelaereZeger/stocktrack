<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;
use Illuminate\View\View;

class CompanyController extends Controller
{/*
    public function index(){
        $companies = Company::all();
        return $companies->toJson();
    }
*/
    public function index()
    {
        $companies = Company::all();
        //return view('companies/company')->with('companies', $companies);
        return view('companies/companiesoverview')->with(compact('companies'));
        //return $companies;
    }

    public function show($ticker)
    {
        $singlecompanyoverview = Company::where('ticker', $ticker)->first();

        return view('companies/company')->with(compact('singlecompanyoverview'));

        //return $companyoverview;
    }
}
