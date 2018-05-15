<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'companies';
    protected $primaryKey = 'companies_id';
    protected $foreignKey = 'indices_id';
    protected $name = 'name';
    protected $ticker = 'ticker';
    protected $description = 'description';
    protected $opening = 'opening_price';
    protected $closing = 'closing_price';
    protected $highest = 'highest_price';
    protected $lowest = 'lowest_price';
    protected $tradingvol = 'trading_volume';
    protected $data = 'description';

}
