<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class holiday extends Model
{
    use HasFactory;

    protected $fillable = [
        'holiday_id',
        'holiday_name',
        'holiday_date',
        'holiday_type',
        'state_name',
        'description',
        'approval_authority',
        'establishment_process',
        'government_offices',
        'businesses',
        'schools',
        'common_activities',
    ];

    public $timestamps = false;

    protected $table = 'holiday';
}
