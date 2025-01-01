<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Passport;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::post('login', 'App\Http\Controllers\Auth\LoginController@login');


Route::post('logout', 'App\Http\Controllers\Auth\LoginController@logout');
Route::post('refresh', 'App\Http\Controllers\Auth\LoginController@refresh');
Route::post('invoice/pay/webhook', 'App\Http\Controllers\EduInvoicePayController@webhooks');

Route::group([],function (){ //根据实际情况来判断是否需要登录
    Route::get('user/info', 'App\Http\Controllers\Auth\LoginController@info');
});

Route::group(['middleware' => 'auth:teacher'], function () {
    Route::get('course/list', 'App\Http\Controllers\EduCourseController@index');
    Route::post('course/create', 'App\Http\Controllers\EduCourseController@create');
    Route::get('course/all', 'App\Http\Controllers\EduCourseController@GetCourseByName');
    Route::post('course/student/add', 'App\Http\Controllers\EduCourseController@addCourseStudent');
    Route::post('course/student/del', 'App\Http\Controllers\EduCourseController@deleteCourseStudent');
    Route::get('course/student', 'App\Http\Controllers\EduCourseController@getCourseStudent');
    Route::get('student/select', 'App\Http\Controllers\StStudentController@GetStudentByName');
    Route::post('invoice/create', 'App\Http\Controllers\EduCourseInvoiceController@create');
    Route::post('invoice/send', 'App\Http\Controllers\EduCourseInvoiceController@send');
    Route::get('invoice/teacher-list', 'App\Http\Controllers\EduCourseInvoiceController@teacherInvoiceList');

});

Route::group(['middleware' => 'auth:student'], function () {
    Route::get('invoice/student-list', 'App\Http\Controllers\EduCourseInvoiceController@studentInvoiceList');
    Route::post('invoice/pay/create', 'App\Http\Controllers\EduCourseInvoiceController@CreatePayLink');
    Route::get('course/student/list', 'App\Http\Controllers\EduCourseController@getStudentCourses');
});

