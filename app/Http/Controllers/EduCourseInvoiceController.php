<?php

namespace App\Http\Controllers;

use App\Exceptions\BusinessException;
use App\Helpers\ApiResponse;
use App\Helpers\ResponseEnum;
use App\Http\Requests\CreateInvoicePayRequest;
use App\Http\Requests\InvoiceSendRequest;
use App\Http\Requests\StudentInvoiceListRequest;
use App\Http\Requests\TeacherInvoiceListRequest;
use App\Http\Requests\UpdateEduCourseInvoiceRequest;
use App\Models\EduCourse;
use App\Models\EduCourseInvoice;
use App\Models\StStudent;
use App\Services\EduCourseInvoiceService;
use App\Services\InvoiceService;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class EduCourseInvoiceController extends BaseApiController
{
    use ApiResponse;


    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'course_id' => 'required|integer|min:1',
            'student_id' => 'required|integer|min:1',
            'remark'=> 'string|max:150',
        ]);
        $courseId = $request->get('course_id');
        $studentId = $request->get('student_id');
        $remark = $request->get('remark');

        //校验基本信息
        $course = EduCourse::find($courseId);
        $student = StStudent::find($studentId);
        if (empty($course) || empty($student)){
            return $this->fail(ResponseEnum::HTTP_ERROR);
        }

        try{
            if (EduCourseInvoiceService::createCourseInvoice($course,$student,$remark)){
                return $this->success([
                    'code' => 0,
                    'message' => 'success',
                    'data' => []
                ]);
            }
            return $this->fail(ResponseEnum::HTTP_ERROR);
        }catch (BusinessException $e){
            return $this->fail([1,$e->getMessage()]);
        }catch (\Exception $e){
            return $this->fail(ResponseEnum::HTTP_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function teacherInvoiceList(TeacherInvoiceListRequest $request): \Illuminate\Http\JsonResponse
    {
        $model = EduCourseInvoice::query();
        /** @var LengthAwarePaginator $data */
        $data =  $model->orderBy('id', 'desc')->paginate(10);
        $courseId   = array_column($data->items(),'course_id');
        $studentId  = array_column($data->items(),'student_id');
        $studentList  = StStudent::whereIn("id",$studentId)->get()->keyBy('id')->toArray();
        $courseList   = EduCourse::whereIn("id",$courseId)->get()->keyBy('id')->toArray();
        $list = [];
        foreach ($data->items() as $item) {
            $tip = [
                'id'             => $item['id'],
                'invoice_status' => $item['invoice_status'],
                'fee'            => $item['fee'],
                'create_at'      => $item['created_at'],
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
            $list[] = $tip;
        }
        return $this->success([
            'page' => $data -> currentPage(),
            'pageSize' => $data->perPage(),
            'total' =>  $data->total(),
            'list' => $list
        ]);
    }

    public function send(InvoiceSendRequest $request): \Illuminate\Http\JsonResponse
    {
        $invoiceId = $request->post('invoice_id');
        /** @var EduCourseInvoice $m */
        $m = EduCourseInvoice::find($invoiceId);
        if (empty($m)){
            return  response()->json([
                'code' => 1,
                'message' => '账单信息有误',
                'data' => [],
                ]);
        }
        if(!$m->send()){
            return $this->fail([1,'账单发送异常']);
        }
        return $this->success([]);
    }

    public function studentInvoiceList(StudentInvoiceListRequest $request)
    {
        $model = EduCourseInvoice::query()->whereIn('student_id',[2]);
        /** @var LengthAwarePaginator $data */
        $data =  $model->orderBy('id', 'desc')->paginate(10);
        $list = InvoiceService::getInvoiceExtraInfo($data->items());
        if (empty($list)){
            $list = [];
        }
        return $this->success([
            'page' => $data -> currentPage(),
            'pageSize' => $data->perPage(),
            'total' =>  $data->total(),
            'list' => $list
        ]);
    }

    public function CreatePayLink(CreateInvoicePayRequest $request)
    {
        $invoiceId = $request->post('invoice_id');
        /** @var EduCourseInvoice $invoiceInfo */
        $invoiceInfo = EduCourseInvoice::find($invoiceId);
        if (empty($invoiceInfo)){
            return [];
        }
        $res = InvoiceService::CreateOmiseLink($invoiceInfo);
        if (empty($res)) {
            return $this->fail([1,'创建支付订单失败']);
        }
        return $this->success(["payment_url" => $res]);
    }
}
