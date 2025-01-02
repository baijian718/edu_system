<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\ApiResponse;
use App\Helpers\ResponseEnum;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserTeacher;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Passport\Passport;
use Laravel\Passport\TokenRepository;

class LoginController extends Controller
{
    use ApiResponse;
    /**
     * 登录用户并返回访问令牌。
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'user_account' => 'required|string',
            'password'     => 'required|string',
            "login_role"         => 'required|in:student,teacher',
        ],[
            'user_account.required' => '用户名是必填项',
            'user_account.string'   => '用户名必须是字符串',
            'password.required'     => '密码是必填项',
            'password.string'       => '密码必须是字符串',
            'login_role.required'         => '角色是必填项',
            'login_role.in'               => '角色不合法',
        ]);
        $credentials = request(['user_account', 'password','login_role']);
        $token = UserService::login($credentials['login_role'],$credentials['user_account'],$credentials['password']);
        if (empty($token)){
            return $this-> fail(ResponseEnum::SERVICE_LOGIN_ACCOUNT_ERROR);
        }
        $user = \Auth::guard($credentials['login_role'])->user();
        $auth = UserService::getUserAuth($credentials['login_role']);
        $name = "";
        $avatar = '';
        $title = '教务管理平台';
        if ($credentials['login_role'] == UserTeacher::USER_TYPE_TEACHER){
            $name = $user['name'];
        }

        if ($credentials['login_role'] == UserTeacher::USER_TYPE_STUDENT){
            $name = $user['name'];
        }
        $data = $auth;
        $data['token'] = $token->accessToken;
        $data['user'] =  [
            'name' => $name,
            'avatar'=> $avatar,
            'position'=> [
                'CN' =>  $title,
            ]
        ];
        return $this->success($data);
    }

    /**
     * 注销用户并使访问令牌无效。
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request)
    {
        $tokenRepository = new TokenRepository(
            app(\Laravel\Passport\Passport::class)
        );

        $tokenId = $request->user()->token();
        $tokenRepository->revokeAccessToken($tokenId);

        return response()->json(['message' => 'Successfully logged out']);
    }
}
