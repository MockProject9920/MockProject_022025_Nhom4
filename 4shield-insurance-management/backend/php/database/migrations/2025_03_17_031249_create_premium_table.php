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
            $table->integer('insurance_product_id');
            $table->string('premium_name');
            $table->string('insurance_type');
            $table->date('effective_date');
            $table->string('state');
            $table->string('country');
            $table->decimal('rate_from', 15, 2);
            $table->decimal('rate_to', 15, 2);
            $table->decimal('amount', 15, 2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('premium');
    }
};
