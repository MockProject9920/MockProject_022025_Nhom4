<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class appraisers extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'status',
        'type',
        'company_name',
        'tax_number',
        'experience',
        'address',
    ];

    public $timestamps = false;

    protected $table = 'appraisers';
}
