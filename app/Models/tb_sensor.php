<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tb_sensor extends Model
{
    use HasFactory;

    protected $table = 'tb_sensors';
    protected $primaryKey = 'id';
    protected $fillable = ['jarak', 'buzzer', 'relay'];
}