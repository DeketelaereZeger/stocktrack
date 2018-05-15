<?php

namespace App\Http\Controllers;

use App\Indice;
use Illuminate\Http\Request;
use App\Company;

class SearchController extends Controller
{
    public function search()
    {

        $search = \Request::get('search');
        $results = Company::where('description', 'like', '%' . $search . '%')
            ->orWhere('name', 'like', '%' . $search . '%')
            ->orderBy('name')
            ->paginate(50);

        if (empty($results)) {
            $results = Indice::where('description', 'like', '%' . $search . '%')
                ->orWhere('name', 'like', '%' . $search . '%')
                ->orderBy('name')
                ->paginate(20);
            var_dump($results);

        }

        return view('layouts.search', compact('results'));
    }
}
