<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->integer('property_id');
            $table->string('type');
            $table->string('address');
            $table->string('city');
            $table->string('state');
            $table->string('zip_code');
            $table->string('country');
            $table->integer('year_built');
            $table->decimal('lot_size_sqft', 10, 2);
            $table->decimal('living_area_sqft', 10, 2);
            $table->integer('bedrooms');
            $table->decimal('bathrooms', 2, 1);
            $table->tinyInteger('attached_garage');
            $table->string('additional_features');
            $table->decimal('estimated_value', 15, 2);
            $table->string('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
