<?php

namespace App\Http\Controllers\Api;

use App\Models\tb_sensor;
use App\Http\Requests\Storetb_sensorRequest;
use App\Http\Requests\Updatetb_sensorRequest;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

class TbSensorController extends Controller
{
    public function bacajarak()
    {
        $sensor = tb_sensor::select('*')->get();

        return response()->json($sensor);
    }

    public function simpansensor(Request $request)
    {
        $nilaijarak = $request->input('nilaijarak');

        try {
            tb_sensor::where('id', 1)->update(['jarak' => request()->nilaijarak]);
            $response = [
                'success' => true,
                'message' => 'Data jarak berhasil disimpan.',
            ];
            return response()->json($response);
        } catch (\Exception $e) {
            $response = [
                'success' => false,
                'message' => 'Terjadi kesalahan saat menyimpan data jarak.',
                'error' => $e->getMessage(),
            ];
            return response()->json($response, 500);
        }
    }
}