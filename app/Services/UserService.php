<?php

namespace App\Services;

use App\Models\User;
use App\Models\UserStudent;
use App\Models\UserTeacher;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\PersonalAccessTokenResult;

class UserService extends BaseService
{
    public static function login(string $type,$sn,$password): PersonalAccessTokenResult|null|bool
    {
        switch ($type){
            case "teacher":
                return self::CreateTeacherToken($sn,$password);
                break;
            case "student":
                return self::CreateStudentToken($sn,$password);
                break;
            default:
                return false;
        }
    }
    public static function CreateTeacherToken(string $sn, string $password): PersonalAccessTokenResult|null|bool{
        $user = UserTeacher::where("t_sn",$sn)->first();
        if (!$user || !Hash::check($password, $user->password)) {
            return false;
        }
        \Auth::guard(User::USER_TYPE_TEACHER)->setUser($user);
        return $user->createToken('Teacher Token',[User::USER_TYPE_TEACHER]);
    }

    public static function CreateStudentToken(string $sn, string $password): PersonalAccessTokenResult|null|bool
    {
        $user = UserStudent::where("st_sn", $sn)->first();
        if (!$user || !Hash::check($password, $user->password)) {
            return false;
        }
        \Auth::guard(User::USER_TYPE_STUDENT)->setUser($user);
        return $user->createToken('Student Token',[User::USER_TYPE_STUDENT]);
    }

    public static function getUserAuth(string $role): array
    {
        switch ($role){
            case User::USER_TYPE_TEACHER:
                return self::getTeacherAuth();
                break;
            case User::USER_TYPE_STUDENT:
                return self::getStudentAuth();
                break;
            default:
                return [];
        }
    }

    public static function getTeacherAuth() : array
    {
        return [
            'roles' => [
                ['id'=> 'teacher', 'operation' => ['add', 'edit', 'delete']]
            ],
            'permissions' => [
                ['id'=> 'course', 'operation' => ['add', 'edit', 'delete']],
                ['id'=> 'invoice', 'operation' => ['add', 'edit', 'delete']],
            ]
        ];
    }

    public static function getStudentAuth() : array
    {
        return [
            'roles' => [
                ['id'=> 'student', 'operation' => ['add', 'edit', 'delete']]
            ],
            'permissions' => [
                ['id'=> 'course/student', 'operation' => ['add', 'edit', 'delete']],
                ['id'=> 'invoice/student', 'operation' => ['add', 'edit', 'delete']],
            ]
        ];
    }

}
