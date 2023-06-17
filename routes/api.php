<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TbSensorController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('bacajarak', [TbSensorController::class, 'bacajarak']);
Route::get('bacahistory', [TbSensorController::class, 'bacahistory']);

Route::put('simpansensor/{nilaijarak}', [TbSensorController::class, 'simpansensor']);
Route::put('simpanbuzzer/{nilaibuzzer}', [TbSensorController::class, 'simpanbuzzer']);
Route::put('simpanrelay/{nilairelay}', [TbSensorController::class, 'simpanrelay']);

Route::post('simpanhistory/{jarak}/{waktu}', [TbSensorController::class, 'store']);