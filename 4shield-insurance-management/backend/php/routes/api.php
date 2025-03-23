<?php

use App\Http\Controllers\claimsController;
use App\Http\Controllers\transactionsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => 'claim'], function () {
    Route::get('/', [ClaimsController::class, 'getData']); // Lấy danh sách claims
    Route::post('/', [ClaimsController::class, 'createData']); // Tạo claim mới
    Route::put('/{id}', [ClaimsController::class, 'updateData']); // Cập nhật claim
    Route::delete('/{id}', [ClaimsController::class, 'deleteData']); // Xóa claim
});


Route::group(['prefix' => 'transactions'], function () {
    Route::get('/', [transactionsController::class, 'getData']);
    Route::post('/', [transactionsController::class, 'createData']);
    Route::put('/', [transactionsController::class, 'updateData']);
    Route::delete('/{id}', [transactionsController::class, 'deleteData']);
});
