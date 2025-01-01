<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateStStudentRequest;
use App\Models\StStudent;
use Illuminate\Pagination\LengthAwarePaginator;

class StStudentController extends BaseApiController
{

    public function GetStudentByName(): \Illuminate\Http\JsonResponse
    {
        $model = StStudent::query();
        /** @var LengthAwarePaginator $data */
        if (!empty(trim(request()->has('name')))) {
            $model->where('name', 'like', '%' . (trim(request()->has('name'))) . '%');
        }
        if (!empty(request()->has('id')) && is_array(request()->get('id'))) {
            $model->whereIn('id', request()->get('id'));
        }
        $data =  $model->orderBy('id', 'asc')->paginate(20);
        $list = [];
        foreach ($data->items() as $item) {
            $list[] = [
                'id' => $item['id'],
                'name' => $item['name'],
                "sn" => $item['st_sn']
            ];
        }
        return $this->success($list);
    }
}
