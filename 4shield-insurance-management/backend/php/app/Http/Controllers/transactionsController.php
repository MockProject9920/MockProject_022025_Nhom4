<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\transactions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

/**
 * transactionsController
 *
 * Date: 15/02/2025
 *
 * Modification Logs:
 * DATE                 AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 15/02/2025         MinhTri            Create
 */

class transactionsController extends Controller
{

    public function getData()
    {
        $data = transactions::get();

        return Response()->json([
            'message' => 'Lấy danh sách giao dịch thành công',
            'data' => $data,
        ], Response::HTTP_OK);
    }

    public function createData(Request $request)
    {
        $transaction = transactions::create($request->all());

        return response()->json([
            'message' => 'Tạo giao dịch thành công',
            'data' => $transaction,
        ], Response::HTTP_CREATED);
    }

    public function updateData(Request $request)
    {
        $transaction = transactions::find($request->transaction_id);

        if (!$transaction) {
            return response()->json([
                'message' => 'Không tìm thấy giao dịch',
            ], Response::HTTP_BAD_REQUEST);
        }

        $transaction->update($request->all());

        return response()->json([
            'message' => 'Cập nhật giao dịch thành công',
            'data' => $transaction,
        ], Response::HTTP_OK);
    }

    public function deleteData($id)
    {
        try {
            $transaction = Transactions::where('transaction_id', $id)->first();

            if (!$transaction) {
                return response()->json(['error' => 'Không tìm thấy giao dịch'], 404);
            }

            DB::transaction(function () use ($transaction) {
                $transaction->invoices()->delete();
                $transaction->delete();
            });

            return response()->json(['message' => 'Xoá giao dịch thành công'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
