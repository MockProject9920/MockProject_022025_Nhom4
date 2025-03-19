<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    use HasFactory;

    protected $table = 'transactions';
    protected $primaryKey = 'transaction_id';
    public $incrementing = false;
    protected $keyType = 'int';
    public $timestamps = false;

    protected $fillable = [
        'transaction_id',
        'policy_contract_id',
        'claim_id',
        'type',
        'transaction_date',
        'amount',
        'method',
        'status',
    ];

    public function invoices()
    {
        return $this->hasMany(Invoices::class, 'transaction_id', 'transaction_id');
    }
}
