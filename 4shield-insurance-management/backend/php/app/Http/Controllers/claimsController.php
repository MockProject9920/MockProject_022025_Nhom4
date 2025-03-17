<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\claims;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class claimsController extends Controller
{

    public function getData()
    {
        $data = claims::get();

        return response()->json([
            'message' => 'Lấy danh sách khiếu nại thành công',
            'data' => $data,
        ], Response::HTTP_OK);
    }

    public function createData(Request $request)
    {
        $claim = claims::create($request->all());

        return response()->json([
            'message' => 'Tạo khiếu nại thành công',
            'data' => $claim,
        ], Response::HTTP_CREATED);
    }

    public function updateData(Request $request)
    {
        $claim = claims::find($request->id);

        if (!$claim) {
            return response()->json([
                'message' => 'Không tìm thấy khiếu nại',
            ], Response::HTTP_BAD_REQUEST);
        }

        $claim->update($request->all());

        return response()->json([
            'message' => 'Cập nhật khiếu nại thành công',
            'data' => $claim,
        ], Response::HTTP_OK);
    }

    public function deleteData($id)
    {
        $claim = claims::find($id);

        if (!$claim) {
            return response()->json([
                'message' => 'Không tìm thấy khiếu nại',
            ], Response::HTTP_BAD_REQUEST);
        }

        $claim->delete();

        return response()->json([
            'message' => 'Xóa khiếu nại thành công',
            'id' => $id,
        ], Response::HTTP_OK);
    }
}
