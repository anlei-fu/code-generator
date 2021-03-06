package com.@project.controller;

import com.@project.pojo.resp.R;

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
