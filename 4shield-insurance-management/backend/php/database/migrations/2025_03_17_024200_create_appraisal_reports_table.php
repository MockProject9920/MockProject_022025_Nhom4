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
        Schema::create('appraisal_reports', function (Blueprint $table) {
            $table->id();
            $table->integer('policy_contract_id');
            $table->integer('claim_id');
            $table->integer('appraiser_request_id');
            $table->string('appraisal_date');
            $table->string('replacement_cost');
            $table->string('market_value');
            $table->string('status');
            $table->string('comparison_sales');
            $table->string('risk_level');
            $table->string('appraised_value');
            $table->string('appraisal_method');
            $table->string('appraisal_factors');
            $table->string('attachment');
            $table->string('purpose');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appraisal_reports');
    }
};
