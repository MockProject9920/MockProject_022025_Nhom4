<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class invoices extends Model
{
    use HasFactory;

    protected $primaryKey = 'invoice_id';

    public $incrementing = true;

    protected $keyType = 'int';

    protected $fillable = [
        'invoice_id',
        'transaction_id',
        'amount',
        'status',
    ];

    public $timestamps = false;

    protected $table = 'invoices';

    public function transaction()
    {
        return $this->belongsTo(Transactions::class, 'transaction_id', 'transaction_id');
    }
}
