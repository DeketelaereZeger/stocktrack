<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*
        Schema::create('prices', function (Blueprint $table) {
            $table->increments('price_id');
            $table->integer('companies_id')->unsigned();
            $table->foreign('companies_id')->references('companies_id')->on('companies');
            $table->string('opening_price');
            $table->string('closing_price');
            $table->string('highest_price');
            $table->string('lowest_price');
            $table->string('trading_volume');
            $table->string('latest_date');


            $table->timestamps();
        });
        */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prices');
    }
}