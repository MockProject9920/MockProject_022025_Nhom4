<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * claims
 *
 * Date: 15/02/2025
 *
 * Modification Logs:
 * DATE                 AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 15/02/2025         MinhTri            Create
 */

class claims extends Model
{
    use HasFactory;

    protected $fillable = [
        'policy_contract_id',
        'claim_date',
        'incident_date',
        'claim_type',
        'status',
        'incident_description',
        'incident_type',
        'claim_amount',
        'attachment',
        'settlement_date',
        'settlement_amount',
        'investigation_details',
        'manager_comment',
        'customer_id',
    ];

    public $timestamps = false;

    protected $table = 'claims';
}
