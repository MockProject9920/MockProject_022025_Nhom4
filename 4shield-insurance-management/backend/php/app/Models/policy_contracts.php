<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * policy_contracts
 *
 * Date: 15/02/2025
 *
 * Modification Logs:
 * DATE                 AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 15/02/2025         MinhTri            Create
 */

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
}
