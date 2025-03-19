<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class customers extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'type',
        'address',
        'phone',
        'status',
    ];

    public $timestamps = false;

    protected $table = 'customers';
}
