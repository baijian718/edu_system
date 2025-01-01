<?php

namespace App\Services;

use App\Exceptions\BusinessException;
use App\Helpers\ResponseEnum;
use App\Models\EduCourse;
use App\Models\EduCourseInvoice;
use App\Models\StStudent;

class EduCourseInvoiceService extends BaseService
{
    public static function getInvoiceStudent(int $courseId): \Illuminate\Database\Eloquent\Collection|array
    {
        return EduCourseInvoice::query()->where([
            'course_id' =>  $courseId,
        ])->whereIn('invoice_status', [2,3,4])->get();
    }

    /**
     * @throws BusinessException
     */
    public static function createCourseInvoice(EduCourse $course, StStudent $student, $remark): bool
    {
        $info = EduCourseInvoice::getInvoiceByCourseAndStudent($course->id,$student->id);
        if (!empty($info)){
            throw new BusinessException([1, '该同学已经在课程上存在账单'],"");
        }
        $invoice = EduCourseInvoice::create([
            "course_id" => $course->id,
            "student_id" => $student->id,
            //"remark" => $remark,
            "fee" => $course->fee,
            "invoice_status" => 1,
        ]);
        if ($invoice){
            return true;
        }
        throw new BusinessException([1, '创建订单失败'],"");
    }
}
