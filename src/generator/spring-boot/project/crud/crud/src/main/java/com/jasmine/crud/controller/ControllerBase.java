/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:33:38 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.resp.R;

public class ControllerBase {

    public R failed() {
        return create(R.RConstant.SUCCEED_CODE, "operate failed");
    }

    public R signIncorrect() {
        return null;
    }

    public R parameterAbsent(String... names) {
        return null;
    }

    public R parameterNotNull(String... names) {
        return null;
    }

    public R parameterIncorrect(String... names) {
        return null;
    }

    public R failed(String msg) {
        return create(R.RConstant.SUCCEED_CODE, "failed");
    }

    public R success() {
        return success("success");
    }

    public R success(String msg) {
        return create(R.RConstant.SUCCEED_CODE, "Success");
    }

    public R create(int code, String msg) {
        return new R(code, msg);
    }

    public <T> R<T> responseData(T result) {
        return responseData(result, "No data found");
    }

    public R responseBatch(int excepted, int actual) {
        boolean success = excepted == actual;
        return responseBoolean(
                success,
                String.format("excepted operate %d record,actually succeed %d record", excepted, actual)
        );
    }

    public R responseBoolean(boolean result, String failedMsg) {
        return result ? success() : create(R.RConstant.FAILED_CODE, failedMsg);
    }

    public R responseBoolean(boolean result) {
        return result ? success() : failed();
    }

    public <T> R<T> responseData(T result, String failedMsg) {
        return result != null
                ? new R(R.RConstant.SUCCEED_CODE, "Success", result)
                : create(R.RConstant.FAILED_CODE, failedMsg);
    }

}
