<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * customers
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
        Schema::create('holidays', function (Blueprint $table) {
            $table->integer('holiday_id');
            $table->string('holiday_name');
            $table->string('holiday_date');
            $table->string('holiday_type');
            $table->string('state_name');
            $table->string('description');
            $table->string('approval_authority');
            $table->string('establishment_process');
            $table->string('government_offices');
            $table->string('businesses');
            $table->string('schools');
            $table->string('common_activities');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('holidays');
    }
};
