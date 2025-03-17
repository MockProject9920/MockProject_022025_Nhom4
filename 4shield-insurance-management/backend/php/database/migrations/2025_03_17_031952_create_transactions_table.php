<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * transactions
 *
 * Date: 15/02/2025
 *
 * Modification Logs:
 * DATE                 AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 15/02/2025         MinhTri            Create
 */

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->integer('transaction_id');
            $table->integer('policy_contract_id');
            $table->integer('claim_id');
            $table->string('type');
            $table->date('transaction_date');
            $table->decimal('amount');
            $table->string('method');
            $table->string('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
