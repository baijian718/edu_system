<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class EduCourseInvoice extends Model
{
    use HasFactory;

    protected $table = 'edu_course_invoice';

    //表常量定义
    const TableInvoiceStatusInit       = 1; //待发送
    const TableInvoiceStatusReady      = 2; //待支付
    const TableInvoiceStatusSuccess    = 3; //支付成功
    const TableInvoiceStatusFail       = 10;//支付失败


    protected static function boot(): void
    {
        parent::boot();
        static::creating(function ($user) {
            $time = now();
            $user->created_at = $time;
            $user->updated_at = $time;
        });
        static::updating(function ($user) {
            $user->updated_at = now();
        });
    }


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'course_id',
        'student_id',
        'fee',
        'invoice_status',
    ];

    public function send() : bool
    {
        if ($this['invoice_status'] != 1){
            return false;
        }
        $this['invoice_status'] = 2;
        if ($this->save()){
            return true;
        }
        return false;
    }

    public static function getStudentList(int $studentId) : LengthAwarePaginator
    {
        $list = self::where("id",$studentId)
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return $list;
    }

    public static function getInvoiceByCourseAndStudent($courseId,$studentId)
    {
        return self::where(['course_id' => $courseId,'student_id' => $studentId])
            ->first();
    }
}
