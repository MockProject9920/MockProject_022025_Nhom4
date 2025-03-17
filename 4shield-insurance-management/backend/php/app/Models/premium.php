<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class premium extends Model
{
    use HasFactory;

    protected $fillable = [
        'insurance_product_id',
        'premium_name',
        'insurance_type',
        'effective_date',
        'state',
        'country',
        'rate_from',
        'rate_to',
        'amount',
    ];

    public $timestamps = false;

    protected $table = 'premium';
}
