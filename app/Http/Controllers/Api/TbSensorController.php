<?php

namespace App\Http\Controllers\Api;

use App\Models\tb_sensor;
use App\Models\tb_history;
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

    public function bacahistory()
    {
        $history = tb_history::select('*')
            ->orderBy('id', 'desc')
            ->limit(5)
            ->get();

        return response()->json($history);
    }

    public function store($jarak, $waktu)
    {
        $history = new tb_history();

        $history->jarak = $jarak;
        $history->waktu = $waktu;

        $history->save();

        return response()->json(['message' => 'Data jarak dan waktu berhasil ditambahkan'], 201);
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

    public function simpanbuzzer(Request $request)
    {
        $nilaijarak = $request->input('nilaibuzzer');

        try {
            tb_sensor::where('id', 1)->update(['buzzer' => request()->nilaibuzzer]);
            $response = [
                'success' => true,
                'message' => 'Data buzzer berhasil disimpan.',
            ];
            return response()->json($response);
        } catch (\Exception $e) {
            $response = [
                'success' => false,
                'message' => 'Terjadi kesalahan saat menyimpan data buzzer.',
                'error' => $e->getMessage(),
            ];
            return response()->json($response, 500);
        }
    }

    public function simpanrelay(Request $request)
    {
        $nilaijarak = $request->input('nilairelay');

        try {
            tb_sensor::where('id', 1)->update(['relay' => request()->nilairelay]);
            $response = [
                'success' => true,
                'message' => 'Data relay berhasil disimpan.',
            ];
            return response()->json($response);
        } catch (\Exception $e) {
            $response = [
                'success' => false,
                'message' => 'Terjadi kesalahan saat menyimpan data relay.',
                'error' => $e->getMessage(),
            ];
            return response()->json($response, 500);
        }
    }
}