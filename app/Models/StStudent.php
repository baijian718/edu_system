<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property string $name
 */
class StStudent extends Model
{
    use HasFactory;
    use SoftDeletes;

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
        return self::withTrashed()->whereIn("id",$studentId)
            ->get()->keyBy('id')->toArray();

    }
}
