<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class appraiser_requests extends Model
{
    use HasFactory;

    protected $fillable = [
        'appraiser_id',
        'user_id',
        'property_id',
        'customer_id',
        'request_type',
        'number',
        'created_at',
        'assigned_to',
        'status',
    ];

    public $timestamps = false;

    protected $table = 'appraiser_requests';
}
