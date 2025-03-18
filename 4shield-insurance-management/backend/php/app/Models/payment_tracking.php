<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
