<?php
namespace Tests\Unit;

//use App\Models\EduCourseInvoice;
use Mockery;
use Mockery\MockInterface;
use Tests\TestCase;
use App\Models\EduInvoicePay;
use App\Services\InvoicePayService;

class InvoicePayServiceTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
    }

    const EXIST_LINK_ID  = [
        "link_test_62a0udzwb5ore8ob61v",
        "link_test_62a0veqlb363780xa44",
    ];

    const NOT_EXIST_LINK_ID  = [
        "xxxx",
        "AAAA",
    ];

    public function getThePayModel($link_id='link_test_62a0udzwb5ore8ob61v'): EduInvoicePay
    {
        $pay = new EduInvoicePay();
        $pay['id'] = 1;
        $pay['link_id'] = 'link_id';
        $pay['fee'] = 100;
        return $pay;
    }

    public function getPayWebhookData($link_id = 'link_test_62a0udzwb5ore8ob61v'): array
    {
        return [
            'key' => 'charge.create',
            'data' => [
                'link' => $link_id,
                'id' => 'charge_id',
                'paid_at' => '2023-01-01T00:00:00Z'
            ]
        ];
    }
    public function testOmisePayWebhook_ChargeCreate_PayFound()
    {
        $data = $this->getPayWebhookData();
        $pay = $this->getThePayModel();
        $this->mock(EduInvoicePay::class, function (MockInterface $mock) use ($pay) {
            $mock->shouldReceive('findPayByOtherId')
                ->andReturnSelf()
                ->with('link_id')->andReturn($pay);
        });

        $this->mock(EduInvoicePay::class,function (MockInterface $mock){
            $mock -> shouldReceive('paySuccess')->andReturn(true);
        });
        $result = InvoicePayService::OmisePayWebhook($data);
        $this->assertTrue($result);
    }

    public function testOmisePayWebhook_ChargeCreate_PayNotFound()
    {
        $data = $this->getPayWebhookData();
        $this->mock(EduInvoicePay::class,function (MockInterface $mock){
            $mock->shouldReceive('findPayByOtherId')
                ->andReturnSelf()
                ->with('link_id')->andReturn(null);
        });
        $result = InvoicePayService::OmisePayWebhook($data);
        $this->assertFalse($result);
    }

    public function testOmisePayWebhook_ChargeUpdate_NoAction()
    {
        $data = $this->getPayWebhookData();
        $result = InvoicePayService::OmisePayWebhook($data);
        $this->assertTrue($result);
    }

    public function testOmisePayWebhook_OtherKey_ReturnsFalse()
    {
        $data = $this->getPayWebhookData();
        $result = InvoicePayService::OmisePayWebhook($data);
        $this->assertFalse($result);
    }
}
