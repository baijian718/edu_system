<?php

namespace Tests\Unit;

use App\Exceptions\BusinessException;
use App\Models\EduCourse;
use App\Models\EduCourseInvoice;
use App\Models\EduCourseStudent;
use App\Models\StStudent;
use App\Services\EduCourseInvoiceService;
use Mockery\MockInterface;
use Tests\TestCase;

class EduCourseInvoiceServiceTest extends TestCase
{
    public function testCreateCourseInvoice_InvoiceExists_ThrowsException()
    {
        $course = new EduCourse();
        $course['id'] = 1;
        $student = new StStudent();
        $student['id'] = 1;
       /* EduCourseInvoice::factory()->create([
            'course_id' => $course['id'],
            'student_id' => $student['id'],
        ]);*/
        $this->mock('overload:'.EduCourseInvoice::class,function (MockInterface $mock) {
            $mock->shouldReceive('getInvoiceByCourseAndStudent')
                ->with(1,1)->andReturn([1]);
        });
        try {
            EduCourseInvoiceService::createCourseInvoice($course, $student, "");
        } catch (BusinessException $e) {
            $this->assertInstanceOf(BusinessException::class, $e);
            $this->assertEquals("该同学已经在课程上存在账单",$e->getMessage());
        }
        //$this->expectException(BusinessException::class);
    }

}
