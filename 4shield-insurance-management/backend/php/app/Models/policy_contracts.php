<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class policy_contracts extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'user_id',
        'property_details',
        'premium_code',
        'insurance_product_id',
        'coverage_amount',
        'policy_start_date',
        'policy_end_date',
        'frequency',
        'payment_schedule',
        'exclusions',
    ];

    public $timestamps = false;

    protected $table = 'policy_contracts';

    public function claims()
    {
        return $this->hasMany(claims::class, 'policy_contract_id', 'id');
    }
}
