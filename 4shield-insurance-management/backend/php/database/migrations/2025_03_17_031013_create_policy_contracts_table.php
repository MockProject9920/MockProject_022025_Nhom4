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
        Schema::create('policy_contracts', function (Blueprint $table) {
            $table->id();
            $table->integer('customer_id');
            $table->integer('user_id');
            $table->string('property_details');
            $table->string('premium_code');
            $table->integer('insurance_product_id');
            $table->decimal('coverage_amount', 15, 2);
            $table->date('policy_start_date');
            $table->date('policy_end_date');
            $table->string('frequency');
            $table->string('payment_schedule');
            $table->string('exclusions');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('policy_contracts');
    }
};
