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
        Schema::create('payment_trackings', function (Blueprint $table) {
            $table->id();
            $table->integer('policy_contract_id');
            $table->integer('claim_id');
            $table->date('due_date');
            $table->decimal('amount', 15, 2);
            $table->string('status');
            $table->tinyInteger('reminder_sent');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_trackings');
    }
};
