<?php

namespace App\Services;

use App\Models\EduCourseInvoice;
use App\Models\EduInvoicePay;

class InvoicePayService extends BaseService
{
    public static function OmisePayWebhook(array $data)
    {
        switch ($data['key']){
            case "charge.create":
                $linkId = $data['data']['link'];
                $pay = EduInvoicePay::findPayByOtherId($linkId);
                if (empty($pay)){
                    return false;
                }
                //todo 不相信回调，需要主动去查询
                $pay['pay_id'] = $data['data']['id'];
                return self::paySuccess($pay);
                break;
            case "charge.update":
                //todo 监听临时取消
                break;
            default:
                return false;
        }
        return true;
    }

    public static function PaySuccess(EduInvoicePay $pay): bool
    {
        //todo 需要加锁防止并发
        if ($pay['pay_status'] != 1){
            return false;
        }
        /** @var EduCourseInvoice $invoice */
        $invoice = EduCourseInvoice::find($pay['invoice_id']);
        if ($invoice['invoice_status'] != 2){
            return false;
        }
        try {
            \DB::beginTransaction();
            $pay['pay_status'] = 3;
            if (!$pay->save()){
                \DB::rollBack();
                return false;
            }
            $invoice['invoice_status'] =3;
            if(!$invoice->save()){
                \DB::rollBack();
                return false;
            }
            \DB::commit();
        } catch (\Throwable $e) {
            \Log::error($e->getMessage());
            return false;
        }
        return true;
    }
}
