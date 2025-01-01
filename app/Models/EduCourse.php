<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EduCourse extends Model
{
    use HasFactory;

    protected $table = 'edu_course';

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
    public static function GetCourseByIds(array $courseId)
    {
        return self::whereIn("id",$courseId)
        ->get()->keyBy('id')->toArray();

    }
}
