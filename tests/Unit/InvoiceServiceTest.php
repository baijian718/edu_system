<?php

namespace Tests\Unit;

use App\Models\EduCourseInvoice;
use App\Services\InvoiceService;
use Illuminate\Pagination\LengthAwarePaginator;
use Tests\TestCase;

class InvoiceServiceTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

    }

    public function testGetStudentInvoiceByPageWithValidInput()
    {
        $studentId = [10];
        $page = 1;
        $pageSize = 10;

        // 模拟 EduCourseInvoice 查询结果
        $mockInvoices = EduCourseInvoice::factory()->count(10)->make();
        $paginator = new LengthAwarePaginator($mockInvoices, 10, $pageSize, $page);

        $this->mock(EduCourseInvoice::class)
            ->shouldReceive('query')
            ->andReturnSelf()
            ->shouldReceive('whereIn')
            ->with('student_id', $studentId)
            ->andReturnSelf()
            ->shouldReceive('orderBy')
            ->with('id', 'desc')
            ->andReturnSelf()
            ->shouldReceive('paginate')
            ->with($pageSize, ['*'], 'page', $page)
            ->andReturn($paginator);

        $result = InvoiceService::GetStudentInvoiceByPage($studentId, $page, $pageSize);
        $this->assertCount(4, $result);
    }

    public function testGetInvoiceExtraInfoWithValidInput()
    {
        $mockInvoices = EduCourseInvoice::factory()->count(3)->make([
            'id' => 1,
            'student_id' => 10,
            'course_id'  => 1,
            'fee' => 100.00,
            'invoice_status' => 2,
            'created_at' => now(),
        ]);

        $result = InvoiceService::getInvoiceExtraInfo($mockInvoices->toArray());
        $this->assertCount(3, $result);
        foreach ($result as $index => $invoiceInfo) {
            $this->assertEquals($mockInvoices[$index]->id, $invoiceInfo['id']);
            $this->assertEquals($mockInvoices[$index]->student_id, $invoiceInfo['student_id']);
            $this->assertEquals($mockInvoices[$index]->fee, $invoiceInfo['fee']);
            $this->assertEquals($mockInvoices[$index]->created_at->timestamp, strtotime($invoiceInfo['create_at']));
        }
    }

    public function testGetInvoiceExtraInfoWithEmptyInput()
    {
        $mockInvoices = [];
        $result = InvoiceService::getInvoiceExtraInfo($mockInvoices);
        $this->assertEmpty($result);
    }

}
