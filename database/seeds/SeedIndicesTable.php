<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class SeedIndicesTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('indices')->insert([
            'indices_id' => 1,
            'ticker' => 'AEX',
            'name' => 'EuroNext Amsterdam',
            'description'=>'The AEX-Index is a free-float adjusted market capitalization weighted index of the leading Dutch stocks traded on the Euronext Amsterdam Exchange. The index was adjusted to the Dutch Guilder fixing rate. The old value as of 12/31/98 was 1186.38 and the new value at start of trading on 1/4/99 was 538.36, after conversion. HP and GP can be adjusted back to Dutch Guilders by typing NLG.',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('indices')->insert([
            'indices_id' => 2,
            'ticker' => 'BEL20',
            'name' => 'EuroNext Brussel',
            'description'=>'The BEL 20 Index is a modified capitalization-weighted index of the 20 most capitalized and liquid Belgian stocks that are traded on the Euronext Brussels Stock Exchange. The equities use free float shares in the index calculation. The index was developed with a base value of 1,000 as of January 1, 1991.',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
