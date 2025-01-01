<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $student_id
 * @property int $course_id
 */
class EduCourseStudent extends Model
{
    use HasFactory;
    protected $table = 'edu_course_student';


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


    public static function getCourseStudent(int $courseId, int $studentId): Model|\Illuminate\Database\Eloquent\Builder|null
    {
        return self::query()->where([
            'course_id'   => $courseId,
            'student_id'  => $studentId,
            ])->first();
    }

    public static function CreateCourseStudent(int $courseId, int $studentId): bool
    {
        $m = new self();
        $m -> student_id = $studentId;
        $m -> course_id = $courseId;
        if ($m->save()){
            return true;
        }
        return false;
    }
}
