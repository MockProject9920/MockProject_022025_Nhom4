<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * holiday
 *
 * Date: 15/02/2025
 *
 * Modification Logs:
 * DATE                 AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 15/02/2025         MinhTri            Create
 */

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
