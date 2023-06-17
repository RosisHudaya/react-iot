<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tb_history extends Model
{
    use HasFactory;

    protected $table = 'tb_history';
    protected $primaryKey = 'id';
    protected $fillable = ['jarak', 'waktu'];
}