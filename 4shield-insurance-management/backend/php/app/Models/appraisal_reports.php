<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class appraisal_reports extends Model
{
    use HasFactory;

    protected $fillable = [
        'policy_contract_id',
        'claim_id',
        'appraiser_request_id',
        'appraisal_date',
        'replacement_cost',
        'market_value',
        'status',
        'comparison_sales',
        'risk_level',
        'appraised_value',
        'appraisal_method',
        'appraisal_factors',
        'attachment',
        'purpose',
    ];

    public $timestamps = false;

    protected $table = 'appraisal_reports';
}
