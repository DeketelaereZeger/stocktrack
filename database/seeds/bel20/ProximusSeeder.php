<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ProximusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $api_key = "hkUg2rq52ZUY8YuHaJG6";
        $quandl = new Quandl($api_key);
        $data = $quandl->getSymbol("EURONEXT/PROX");

        DB::table('companies')->insert([
            'companies_id' => 0,
            'indices_id' => 2,//id of bel20
            'name' => $data->dataset->name,
            'ticker' => $data->dataset->dataset_code,
            'description' => $data->dataset->description,

            'opening_price' => $data->dataset->data[0][1],
            'closing_price' => $data->dataset->data[0][4],
            'highest_price' => $data->dataset->data[0][2],
            'lowest_price' => $data->dataset->data[0][3],
            'trading_volume' => $data->dataset->data[0][5],
            'latest_date' => $data->dataset->data[0][0],

            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now(),
        ]);
    }
}
