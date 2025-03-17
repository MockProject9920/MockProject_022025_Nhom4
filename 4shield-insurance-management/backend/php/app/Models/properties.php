<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * properties
 *
 * Date: 15/02/2025
 *
 * Modification Logs:
 * DATE                 AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 15/02/2025         MinhTri            Create
 */

class properties extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id',
        'type',
        'address',
        'city',
        'state',
        'zip_code',
        'country',
        'year_built',
        'lot_size_sqft',
        'living_area_sqft',
        'bedrooms',
        'bathrooms',
        'attached_garage',
        'additional_features',
        'estimated_value',
        'status',
    ];

    public $timestamps = false;

    protected $table = 'properties';
}
