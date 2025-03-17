<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * appraisers
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
        Schema::create('appraisers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('status');
            $table->string('type');
            $table->string('company_name');
            $table->string('tax_number');
            $table->integer('experience');
            $table->string('address');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('appraisers');
    }
};
