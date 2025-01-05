<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseEnum;
use App\Http\Requests\StoreEduCourseRequest;
use App\Http\Requests\UpdateCourseStudentRequest;
use App\Http\Requests\UpdateEduCourseRequest;
use App\Models\EduCourse;
use App\Models\EduCourseInvoice;
use App\Models\EduCourseStudent;
use App\Models\StStudent;
use App\Services\EduCourseService;
use DateTime;
use DB;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class EduCourseController extends BaseApiController
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        $model = EduCourse::query();
        /** @var LengthAwarePaginator $data */
        $data =  $model->orderBy('id', 'desc')->paginate(10);
        $list = [];
        foreach ($data->items() as $item) {
            $list[] = [
                'id' => $item['id'],
                'course_name' => $item['course_name'],
                'fee' => $item['fee'],
                "sn"  => $item['course_sn'],
                'year_month' => $item['year_month'],
                'create_at' => empty($item['created_at']) ? '':(new DateTime($item['created_at']))->format('Y-m-d H:i:s'),
            ];
        }
        return $this->success([
            'page' => $data -> currentPage(),
            'pageSize' => $data->perPage(),
            'total' =>  $data->total(),
            'list' => $list
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): \Illuminate\Http\JsonResponse
    {
        $input = $request->validate([
            'name' => 'required|string',
            'sn'   => 'required|string|unique:edu_course,course_sn',
            'fee'  => 'required|numeric',
            'month' => 'required|date_format:Ym',
        ]);
        if (DB::table('edu_course')->where('course_sn', $input['sn'])->exists()) {
            return response()->json(['error' => '课程编号已存在'], 400);
        }
        //创建数据
        $dbResult = DB::table('edu_course')->insert([
            'course_name' => $input['name'],
            'year_month' => $input['month'],
            'fee' => $input['fee'] * 100,
            'created_at' => date('Y-m-d H:i:s'),
            'course_sn' => $input['sn']
        ]);
        if(!$dbResult){
          \Log::log('ERROR', '新增课程失败');
           return $this->fail(ResponseEnum::HTTP_ERROR);
        }
        return $this -> success([]);
    }




    public function GetCourseByName(Request $request): \Illuminate\Http\JsonResponse
    {
        $model = EduCourse::query();
        /** @var LengthAwarePaginator $data */
        if (request()->has('name')){
            $queryName = trim(request()->get('name'));
            if (!empty($queryName)) {
                $model->where('name', 'like', '%' . ($queryName) . '%');
            }
        }

        $data =  $model->orderBy('id', 'asc')->paginate(20);
        $list = [];
        foreach ($data->items() as $item) {
            $list[] = [
                'id' => $item['id'],
                'name' => $item['course_name'],
                "sn" => $item['course_sn']
            ];
        }
        return $this->success($list);
    }


    public function getCourseStudent(Request $request): \Illuminate\Http\JsonResponse
    {
        $input = $request->validate([
            'course_id' => 'required|integer|min:1',
        ]);
        $courseId = $input['course_id'];
        $relation = EduCourseStudent::query()->where('course_id', $courseId)->get();
        if(empty($relation)){
            return $this->success();
        }
        $studentIds = [];
        foreach ($relation as $column){
            $studentIds[] = $column['student_id'];
        }
        $studentList = DB::table('st_student')->whereIn('id', $studentIds)->get();
        $list = [];
        foreach ($studentList as $item){
            $list[] = [
                'id'   => $item->id,
                'name' => $item->name,
                'sn'   => $item->st_sn,
            ];
        }
        return $this->success($list);
    }

    public function getStudentCourses(Request $request): \Illuminate\Http\JsonResponse
    {
        $studentId = $request->user()->id;
        $pageSize = 10;
        $page = 1;
        $model = EduCourseStudent::query()->where('student_id', $studentId);
        $list = $model->orderBy("id",'desc')
            ->offset(($page - 1) * $pageSize)->paginate($pageSize);
        $data = [
            'page' => $list -> currentPage(),
            'pageSize' => $list->perPage(),
            'total' =>  $list->total(),
        ];
        if (count($list->items()) === 0){
            $data['list'] = [];
            return response()->json([
                'code' => 0,
                'message' => 'success',
                'data' => $data
            ]);
        }
        $courseId   = array_column($list->items(),'course_id');
        $studentId  = array_column($list->items(),'student_id');
        $studentList  = StStudent::GetStudentsByIds($studentId);
        $courseList   = EduCourse::GetCourseByIds($courseId);
        $rList = [];
        foreach ($list->items() as $item) {
            $tip = [
                'id'             => $item['course_id'],
                'create_at'      => empty($item['created_at']) ? '':(new DateTime($item['created_at']))->format('Y-m-d H:i:s'),
                'student_id'     => $item['student_id'],
            ];
            if (key_exists($item['student_id'],$studentList)){
                $tip['student_name'] = $studentList[$item['student_id']]['name'];
                $tip['student_sn'] = $studentList[$item['student_id']]['st_sn'];

            }else{
                $tip['student_name'] = '';
                $tip['student_sn'] = '';
            }
            if (key_exists($item['course_id'],$courseList)){
                $tip['course_name'] = $courseList[$item['course_id']]['course_name'];
                $tip['course_sn'] = $courseList[$item['course_id']]['course_sn'];
                $tip['course_year_month'] = $courseList[$item['course_id']]['year_month'];
            }else{
                $tip['course_name'] = '';
                $tip['course_sn'] = '';
                $tip['course_year_month'] = '';
            }
            $rList[] = $tip;
        }
        return $this->success([
            'page' => $list -> currentPage(),
            'pageSize' => $list->perPage(),
            'total' =>  $list->total(),
            'list' => $rList
        ]);
    }

    public function addCourseStudent(UpdateCourseStudentRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'course_id' => 'required|integer|min:1',
            'student_id' => 'required|integer|min:1',
        ]);
        $courseId  = $request->post('course_id');
        $studentId = $request->post('student_id');
        if (!EduCourseService::addCourseStudent($courseId,$studentId)){
            return  $this->fail(ResponseEnum::HTTP_ERROR);
        }
        return $this->success([]);
    }

    public function deleteCourseStudent(UpdateCourseStudentRequest $request): \Illuminate\Http\JsonResponse
    {
        $input = $request->validate([
            'course_id' => 'required|integer|min:1',
            'student_id' => 'required|integer|min:1',
        ]);
        $courseId  = $input['course_id'];
        $studentId = $input['student_id'];
        if (!EduCourseService::deleteCourseStudent($courseId,$studentId)){
            return  $this->fail(ResponseEnum::HTTP_ERROR);
        }
        return $this->success([]);
    }

}
