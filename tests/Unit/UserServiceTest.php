<?php
namespace Tests\Unit;


use App\Models\User;
use App\Services\UserService;
use Laravel\Passport\PersonalAccessTokenResult;
use Mockery;
use Tests\TestCase;

class UserServiceTest extends TestCase
{
    protected function tearDown(): void
    {
        parent::tearDown();
        Mockery::close(); // 清理所有 mock 对象
    }

    public function testLogin_Teacher_ReturnsToken()
    {
        $sn = 'T006';
        $password = 'Test@comiru.com';
        //Hash::shouldReceive('check')->with('password', $user->password)->andReturn(true);
        /*Auth::shouldReceive('guard')->with(User::USER_TYPE_TEACHER)->andReturnSelf()
            ->shouldReceive('setUser')->with($user)->andReturnSelf();*/

        /*$this->mock(PersonalAccessTokenResult::class, function (MockInterface $mock) {
            $mock->shouldReceive('createToken')
                ->with('Teacher Token', [User::USER_TYPE_TEACHER])->andReturnSelf();
        });*/
        $result = UserService::login('teacher', $sn, $password);
        var_dump($result);
        $this->assertInstanceOf(PersonalAccessTokenResult::class, $result);

        //$this->assertTrue($result);
    }

    public function testLogin_Teacher_ReturnsTokenFalse()
    {
        $sn = 'T006';
        $password = 'Test@comiru.com!!';
        $result = UserService::login('teacher', $sn, $password);
        var_dump($result);
        $this->assertFalse($result);
    }

    public function testLogin_Student_ReturnsTokenTrue()
    {
        $sn = 'S004';
        $password = 'Test@comiru.com';
        $result = UserService::login('student', $sn, $password);
        var_dump($result);
        $this->assertInstanceOf(PersonalAccessTokenResult::class, $result);
    }

    public function testLogin_Student_ReturnsTokenFalse()
    {
        $sn = 'S004';
        $password = 'Test@comiru.com!!!';
        $result = UserService::login('student', $sn, $password);
        var_dump($result);
        $this->assertFalse($result);
    }

    public function testGetUserAuth_Teacher_ReturnsAuth()
    {
        $auth = UserService::getUserAuth(User::USER_TYPE_TEACHER);
        $this->assertArrayHasKey('roles', $auth);
        $this->assertArrayHasKey('permissions', $auth);
    }

    public function testGetUserAuth_Student_ReturnsAuth()
    {
        $auth = UserService::getUserAuth(User::USER_TYPE_STUDENT);
        $this->assertArrayHasKey('roles', $auth);
        $this->assertArrayHasKey('permissions', $auth);
    }

    public function testGetUserAuth_InvalidRole_ReturnsEmptyArray()
    {
        $auth = UserService::getUserAuth('invalid');
        $this->assertEmpty($auth);
    }

}
