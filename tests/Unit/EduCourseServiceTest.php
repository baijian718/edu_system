<?php

namespace Tests\Unit;

use App\Models\EduCourseStudent;
use App\Services\EduCourseService;
use Mockery\MockInterface;
use Tests\TestCase;

class EduCourseServiceTest extends TestCase
{
    public function testAddCourseStudent_StudentAlreadyExists_ReturnsFalse()
    {
        // 模拟 getCourseStudent 返回非空结果
        $this->mock('overload:'.EduCourseStudent::class, function (MockInterface $mock) {
            $mock->shouldReceive('getCourseStudent')
                ->with(1, 1)
                ->andReturn(['id' => 1]);
        });
        $result = EduCourseService::AddCourseStudent(1, 1);
        var_dump(EduCourseStudent::getCourseStudent(1,1));
        $this->assertFalse($result);
    }
}
