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

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('holidays');
    }
};
