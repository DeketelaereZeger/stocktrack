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
        exec('php artisan db:seed --class=AalbertsSeeder --force');
        exec('php artisan db:seed --class=AbnAmroSeeder --force');
        exec('php artisan db:seed --class=AegonSeeder --force');
        exec('php artisan db:seed --class=AholdDelhSeeder --force');
        exec('php artisan db:seed --class=AkzoNobelSeeder --force');
        exec('php artisan db:seed --class=AlticeSeeder --force');
        exec('php artisan db:seed --class=ArcelorMittalSeeder --force');
        exec('php artisan db:seed --class=AsmlSeeder --force');
        exec('php artisan db:seed --class=AsrNedSeeder --force');
        exec('php artisan db:seed --class=DsmSeeder --force');
        exec('php artisan db:seed --class=GalapagosAEXSeeder --force');
        exec('php artisan db:seed --class=GemaltoSeeder --force');
        exec('php artisan db:seed --class=HeinekenSeeder --force');
        exec('php artisan db:seed --class=IngAEXSeeder --force');
        exec('php artisan db:seed --class=KpnSeeder --force');
        exec('php artisan db:seed --class=NNGroupSeeder --force');
        exec('php artisan db:seed --class=PhilipsElecSeeder --force');
        exec('php artisan db:seed --class=PhilipsLightSeeder --force');
        exec('php artisan db:seed --class=RandstadSeeder --force');
        exec('php artisan db:seed --class=RelxSeeder --force');
        exec('php artisan db:seed --class=ShellSeeder --force');
        exec('php artisan db:seed --class=UniBailSeeder --force');
        exec('php artisan db:seed --class=UnileverSeeder --force');
        exec('php artisan db:seed --class=VopakSeeeder --force');
        exec('php artisan db:seed --class=WoltersKluwerSeeder --force');


        /*BEL20*/
        exec('php artisan db:seed --class=AbInbevSeeder --force');
        exec('php artisan db:seed --class=AblynxSeeder --force');
        exec('php artisan db:seed --class=AckVHaarenSeeder --force');
        exec('php artisan db:seed --class=AgeasSeeder --force');
        exec('php artisan db:seed --class=AperamSeeder --force');
        exec('php artisan db:seed --class=BpostSeeder --force');
        exec('php artisan db:seed --class=CofinimmoSeeder --force');
        exec('php artisan db:seed --class=ColruytSeeder --force');
        exec('php artisan db:seed --class=EngieSeeder --force');
        exec('php artisan db:seed --class=GalapagosAEXSeeder --force');
        exec('php artisan db:seed --class=GblSeeder --force');
        exec('php artisan db:seed --class=IngAEXSeeder --force');
        exec('php artisan db:seed --class=KbcSeeder --force');
        exec('php artisan db:seed --class=OntexSeeder --force');
        exec('php artisan db:seed --class=ProximusSeeder --force');
        exec('php artisan db:seed --class=SofinaSeeder --force');
        exec('php artisan db:seed --class=SolvaySeeder --force');
        exec('php artisan db:seed --class=TelenetSeeder --force');
        exec('php artisan db:seed --class=UcbSeeder --force');
        exec('php artisan db:seed --class=UmicoreSeeder --force');


    }
}
