<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * payment_tracking
 *
 * Date: 15/02/2025
 *
 * Modification Logs:
 * DATE                 AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 15/02/2025         MinhTri            Create
 */

class payment_tracking extends Model
{
    use HasFactory;

    protected $fillable = [
        'policy_contract_id',
        'claim_id',
        'due_date',
        'amount',
        'status',
        'reminder_sent',
    ];

    public $timestamps = false;

    protected $table = 'payment_tracking';
}
