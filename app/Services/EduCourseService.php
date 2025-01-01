<?php

namespace App\Services;

use App\Models\EduCourseStudent;

class EduCourseService extends  BaseService
{

    public static function addCourseStudent(int $courseId,int $studentId) : bool
    {
        $m = EduCourseStudent::getCourseStudent($courseId,$studentId);
        if (!empty($m)){
            return  false;
        }
        return EduCourseStudent::CreateCourseStudent($courseId,$studentId);
    }

    public static function deleteCourseStudent(int $courseId,int $studentId)
    {
        $oldStudent = EduCourseStudent::getCourseStudent($courseId,$studentId);
        if (empty($oldStudent)){
            return  false;
        }
        return $oldStudent->delete();
    }

}
