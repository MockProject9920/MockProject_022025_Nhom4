<?php

use App\Http\Controllers\claimsController;
use App\Http\Controllers\transactionsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'claim'], function () {
    Route::get('/', [claimsController::class, 'getData']);
    Route::post('/', [claimsController::class, 'createData']);
    Route::put('/', [claimsController::class, 'updateData']);
    Route::delete('/{id}', [claimsController::class, 'deleteData']);
});

Route::group(['prefix' => 'transactions'], function () {
    Route::get('/', [transactionsController::class, 'getData']);
    Route::post('/', [transactionsController::class, 'createData']);
    Route::put('/', [transactionsController::class, 'updateData']);
    Route::delete('/{id}', [transactionsController::class, 'deleteData']);
});
