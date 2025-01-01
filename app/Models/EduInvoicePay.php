<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EduInvoicePay extends Model
{
    use HasFactory;

    protected $table = 'edu_invoice_pay';

    //表常量定义
    const TablePayStatusInit       = 1; //待支付
    const TablePayStatusDoing      = 2; //支付中
    const TablePayStatusSuccess    = 3; //支付成功
    const TablePayStatusFail       = 10;//支付失败

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

    public static function findPayByOtherId(string $linkId) : EduInvoicePay|null
    {
        return self::where("link_id",$linkId)->limit(1)->first();
    }

    public static function createPay(EduInvoicePay $model) : bool
    {
        return $model->save();
    }
}

