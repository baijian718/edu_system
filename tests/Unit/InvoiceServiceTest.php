<?php

namespace Tests\Unit;

use App\Models\EduCourse;
use App\Models\EduCourseInvoice;
use App\Models\EduInvoicePay;
use App\Models\StStudent;
use App\Services\InvoiceService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class InvoiceServiceTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // 创建测试数据
        EduCourse::create(['id' => 1, 'course_name' => '数学', 'course_sn' => 'MATH101']);
        EduCourse::create(['id' => 2, 'course_name' => '英语', 'course_sn' => 'ENG101']);

        StStudent::create(['id' => 1, 'name' => '张三', 'st_sn' => 'S123']);
        StStudent::create(['id' => 2, 'name' => '李四', 'st_sn' => 'S456']);

        EduCourseInvoice::create(['id' => 1, 'course_id' => 1, 'student_id' => 1, 'invoice_status' => 2, 'fee' => 10000]);
        EduCourseInvoice::create(['id' => 2, 'course_id' => 2, 'student_id' => 2, 'invoice_status' => 1, 'fee' => 20000]);
    }

    public function testGetStudentInvoiceByPage()
    {
        $invoices = InvoiceService::GetStudentInvoiceByPage([1, 2], 1, 10);

        $this->assertCount(1, $invoices);
        $this->assertEquals('张三', $invoices[0]['student_name']);
        $this->assertEquals('数学', $invoices[0]['course_name']);
    }

    public function testGetInvoiceExtraInfo()
    {
        $invoices = EduCourseInvoice::all()->toArray();
        $result = InvoiceService::getInvoiceExtraInfo($invoices);

        $this->assertCount(2, $result);
        $this->assertEquals('张三', $result[0]['student_name']);
        $this->assertEquals('李四', $result[1]['student_name']);
    }

    public function testCreateOmiseLink()
    {
        $invoice = EduCourseInvoice::find(1);
        $link = InvoiceService::CreateOmiseLink($invoice);

        $this->assertIsString($link);
        $this->assertNotEmpty($link);
    }

    public function testCreateOmiseLinkWithInvalidInvoiceStatus()
    {
        $invoice = EduCourseInvoice::find(2); // 状态为1，不是2
        $link = InvoiceService::CreateOmiseLink($invoice);

        $this->assertFalse($link);
    }

    public function testCreateOmiseLinkWithMissingCourse()
    {
        $invoice = EduCourseInvoice::create(['id' => 3, 'course_id' => 999, 'student_id' => 1, 'invoice_status' => 2, 'fee' => 10000]);
        $link = InvoiceService::CreateOmiseLink($invoice);

        $this->assertFalse($link);
    }

    public function testCreateOmiseLinkWithMissingStudent()
    {
        $invoice = EduCourseInvoice::create(['id' => 4, 'course_id' => 1, 'student_id' => 999, 'invoice_status' => 2, 'fee' => 10000]);
        $link = InvoiceService::CreateOmiseLink($invoice);

        $this->assertFalse($link);
    }
}
