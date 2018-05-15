<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('companies');

        Schema::create('companies', function (Blueprint $table) {
            $table->increments('companies_id');
            $table->integer('indices_id')->unsigned();
            $table->foreign('indices_id')->references('indices_id')->on('indices');
            $table->string('name');
            $table->string('ticker');
            $table->string('description');
            $table->string('opening_price');
            $table->string('closing_price');
            $table->string('highest_price');
            $table->string('lowest_price');
            $table->string('trading_volume');
            $table->string('latest_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}

