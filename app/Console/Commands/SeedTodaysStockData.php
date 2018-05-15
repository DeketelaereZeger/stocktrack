<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SeedTodaysStockData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'SeedTodaysStockData';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seeds the latest stock data to the database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        exec('php artisan db:seed --class=DeleteTableRows');

        /*AEX*/
        exec('php artisan db:seed --class=AalbertsSeeder');
        exec('php artisan db:seed --class=AbnAmroSeeder');
        exec('php artisan db:seed --class=AegonSeeder');
        exec('php artisan db:seed --class=AholdDelhSeeder');
        exec('php artisan db:seed --class=AkzoNobelSeeder');
        exec('php artisan db:seed --class=AlticeSeeder');
        exec('php artisan db:seed --class=ArcelorMittalSeeder');
        exec('php artisan db:seed --class=AsmlSeeder');
        exec('php artisan db:seed --class=AsrNedSeeder');
        exec('php artisan db:seed --class=DsmSeeder');
        exec('php artisan db:seed --class=GalapagosAEXSeeder');
        exec('php artisan db:seed --class=GemaltoSeeder');
        exec('php artisan db:seed --class=HeinekenSeeder');
        exec('php artisan db:seed --class=IngAEXSeeder');
        exec('php artisan db:seed --class=KpnSeeder');
        exec('php artisan db:seed --class=NNGroupSeeder');
        exec('php artisan db:seed --class=PhilipsElecSeeder');
        exec('php artisan db:seed --class=PhilipsLightSeeder');
        exec('php artisan db:seed --class=RandstadSeeder');
        exec('php artisan db:seed --class=RelxSeeder');
        exec('php artisan db:seed --class=ShellSeeder');
        exec('php artisan db:seed --class=UniBailSeeder');
        exec('php artisan db:seed --class=UnileverSeeder');
        exec('php artisan db:seed --class=VopakSeeeder');
        exec('php artisan db:seed --class=WoltersKluwerSeeder');


        /*BEL20*/
        exec('php artisan db:seed --class=AbInbevSeeder');
        exec('php artisan db:seed --class=AblynxSeeder');
        exec('php artisan db:seed --class=AckVHaarenSeeder');
        exec('php artisan db:seed --class=AgeasSeeder');
        exec('php artisan db:seed --class=AperamSeeder');
        exec('php artisan db:seed --class=BpostSeeder');
        exec('php artisan db:seed --class=CofinimmoSeeder');
        exec('php artisan db:seed --class=ColruytSeeder');
        exec('php artisan db:seed --class=EngieSeeder');
        exec('php artisan db:seed --class=GalapagosAEXSeeder');
        exec('php artisan db:seed --class=GblSeeder');
        exec('php artisan db:seed --class=IngAEXSeeder');
        exec('php artisan db:seed --class=KbcSeeder');
        exec('php artisan db:seed --class=OntexSeeder');
        exec('php artisan db:seed --class=ProximusSeeder');
        exec('php artisan db:seed --class=SofinaSeeder');
        exec('php artisan db:seed --class=SolvaySeeder');
        exec('php artisan db:seed --class=TelenetSeeder');
        exec('php artisan db:seed --class=UcbSeeder');
        exec('php artisan db:seed --class=UmicoreSeeder');


    }
}
