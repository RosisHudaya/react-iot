<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TbHistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $currentTime = DB::select(DB::raw('SELECT CURRENT_TIME() AS time'))[0]->time;

        DB::table('tb_history')->insert([
            [
                'jarak' => 12,
                'waktu' => $currentTime,
            ],
            [
                'jarak' => 15,
                'waktu' => $currentTime,
            ],
            [
                'jarak' => 17,
                'waktu' => $currentTime,
            ],
            [
                'jarak' => 19,
                'waktu' => $currentTime,
            ],
            [
                'jarak' => 10,
                'waktu' => $currentTime,
            ],
        ]);
    }
}