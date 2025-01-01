<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseEnum;
use App\Http\Requests\InvoicePayWebhooksRequest;
use App\Http\Requests\StoreEduInvoicePayRequest;
use App\Http\Requests\UpdateEduInvoicePayRequest;
use App\Models\EduInvoicePay;
use App\Services\InvoicePayService;

class EduInvoicePayController extends BaseApiController
{

    public function webhooks(InvoicePayWebhooksRequest $request)
    {
        $data = $request->all();
        $eventKey = empty($data['key']) ? "" : $data['key'];
        if (empty($eventKey)){
            return response()->json([
                'code' => 1,
                'message' => 'key is is invalid',
                'data' => [],
            ]);
        }
        if(InvoicePayService::OmisePayWebhook($data)){
            return $this->success([]);
        }else{
            return $this->fail(ResponseEnum::HTTP_ERROR);
        }
    }

}
