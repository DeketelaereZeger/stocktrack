<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SeedFixedData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'SeedFixedData';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seed all of the fixed stock data';

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
        exec('php artisan db:seed --class=SeedIndicesTable --force');
        exec('php artisan db:seed --class=SeedCompaniesTable --force');

    }
}
