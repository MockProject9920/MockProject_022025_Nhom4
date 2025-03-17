<?php

use App\Enums\status\status;
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
        Schema::create('claims', function (Blueprint $table) {
            $table->id();
            $table->integer('policy_contract_id');
            $table->date('claim_date');
            $table->date('incident_date');
            $table->char('claim_type');
            $table->char('status');
            $table->string('incident_description');
            $table->char('incident_type');
            $table->decimal('claim_amount', 15, 2);
            $table->string('attachment');
            $table->date('settlement_date');
            $table->decimal('settlement_amount', 15, 2);
            $table->string('investigation_details');
            $table->char('manager_comment');
            $table->integer('customer_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('claims');
    }
};
