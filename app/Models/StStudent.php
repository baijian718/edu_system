<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StStudent extends Model
{
    use HasFactory;

    protected $table = 'st_student';

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

    public static function GetStudentsByIds(array $studentId)
    {
        return self::whereIn("id",$studentId)
            ->get()->keyBy('id')->toArray();

    }
}
