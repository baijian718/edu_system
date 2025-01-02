<?php

namespace App\Services;

use App\Models\EduCourse;
use App\Models\EduCourseInvoice;
use App\Models\EduInvoicePay;
use App\Models\StStudent;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Log;
use OmiseLink;

class InvoiceService extends BaseService {

    public static function GetStudentInvoiceByPage(array $studentId, int $page, int $pageSize): array
    {
        $model = EduCourseInvoice::query()->whereIn('student_id',$studentId);
        /** @var LengthAwarePaginator $data */
        $data =  $model->orderBy('id', 'desc')->paginate(10);
        return self::getInvoiceExtraInfo($data->items());
    }

    public static function getInvoiceExtraInfo(array $invoiceList) : array
    {
        $courseId   = array_column($invoiceList,'course_id');
        $studentId  = array_column($invoiceList,'student_id');
        $studentList  = StStudent::GetStudentsByIds($studentId);
        $courseList   = EduCourse::GetCourseByIds($courseId);
        $list = [];
        foreach ($invoiceList as $item) {
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
        return $list;
    }


    public static function CreateOmiseLink(EduCourseInvoice $invoice): bool|string
    {
        define('OMISE_PUBLIC_KEY', 'pkey_test_6296g0oqqwkfd6gu28w');
        define('OMISE_SECRET_KEY', 'skey_test_6296g0p92p57qhaztpi');
        define('OMISE_API_VERSION', '2017-11-02');
        if($invoice['invoice_status'] != 2){
            return false;
        }
        $courseInfo = EduCourse::find($invoice['course_id']);
        if (empty($courseInfo)){
            return false;
        }
        $studentInfo = StStudent::find($invoice['student_id']);
        if (empty($studentInfo)){
            return false;
        }
        $title = sprintf("课程账单:%d",$invoice['id']);
        $description = sprintf("课程:%s 学生：%s",$courseInfo['course_name'],$studentInfo['name']);

        $link = OmiseLink::create(array(
            'amount'      => $invoice['fee']/100,
            'currency'    => 'JPY',
            'title'       => $title,
            'description' => $description,
            'livemode'    => 'false',
            'multiple'    => 'false',
        ));
        if (empty($link)){
            return false;
        }
        self::CreateInvoicePayFromOmise($link, $invoice);
        return $link['payment_uri'];
    }

    public static function CreateInvoicePayFromOmise(OmiseLink $link, EduCourseInvoice $invoice) :bool
    {
       $t = new EduInvoicePay();
       $t['link_id']        = $link['id'];
       $t['title']         = $link['title'];
       $t['fee']           = $link['amount'] * 100;
       $t['description']   = $link['description'];
       $t['payment_uri']   = $link['payment_uri'];
       $t['currency']      = $link['currency'];
       $t['pay_status']    = 1;
       $t['invoice_id']    = $invoice['id'];
       $t['student_id']    = $invoice['student_id'];

       if (EduInvoicePay::createPay($t)){
           return true;
       }else{
           return false;
       }
    }
}

