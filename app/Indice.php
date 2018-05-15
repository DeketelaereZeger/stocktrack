<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Indice extends Model
{
    protected $table = 'indices';
    protected $primaryKey = 'indices_id';
    protected $ticker = 'ticker';
    protected $name = 'name';

}
