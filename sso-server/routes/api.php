<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/login', function(Request $request) {
    $state = Str::random(40);

    $query = http_build_query([
        'client_id' => '9385d2a0-3454-416b-88d8-a17c9edc3495',
        'redirect_uri' => 'http://localhost:8080/callback',
        'response_type' => 'code',
        'scope' => '',
        'state' => $state
    ]);

    return redirect("http://sso.local.com/oauth/authorize?" . $query);
});
