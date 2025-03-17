<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * appraiser_requests
 *
 * Date: 15/02/2025
 *
 * Modification Logs:
 * DATE                 AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 15/02/2025         MinhTri            Create
 */

class appraiser_requests extends Model
{
    use HasFactory;

    protected $fillable = [
        'appraiser_id',
        'user_id',
        'property_id',
        'customer_id',
        'request_type',
        'number',
        'created_at',
        'assigned_to',
        'status',
    ];

    public $timestamps = false;

    protected $table = 'appraiser_requests';
}
