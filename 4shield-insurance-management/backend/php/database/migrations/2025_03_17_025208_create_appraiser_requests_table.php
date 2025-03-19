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
        Schema::create('appraiser_requests', function (Blueprint $table) {
            $table->id();
            $table->integer('appraiser_id');
            $table->integer('user_id');
            $table->integer('property_id');
            $table->integer('customer_id');
            $table->string('request_type');
            $table->integer('number');
            $table->timestamp('created_at');
            $table->string('assigned_to');
            $table->string('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appraiser_requests');
    }
};
