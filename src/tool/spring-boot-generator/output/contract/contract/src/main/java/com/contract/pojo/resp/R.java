package com.contract.pojo.resp;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
@ApiModel("Response wrapper")
public class R<T> {

    @ApiModelProperty("Response code")
    private int code;

    @ApiModelProperty("Response message")
    private String message;

    @ApiModelProperty("Response data")
    private T data;

    public R(int code, String msg) {
        this.code = code;
        this.message = msg;
    }

    public static R success() {
        return success("success");
    }

    public static R success(String msg) {
        return create(RConstant.SUCCESSED_CODE, "Success");
    }

    public static R create(int code, String msg) {
        return new R(code, msg);
    }

    public static R doResponse(boolean result) {
        return doResponse(result, "Operate failed");
    }

    public static <T> R<T> doResponse(T result) {
        return doResponse(result, "No data found");
    }

    public static R doResponse(boolean result, String failedMsg) {
        return result ? success() : create(RConstant.FAILED_CODE, failedMsg);
    }

    public static <T> R<T> doResponse(T result, String failedMsg) {
        return result == null ? success() : create(RConstant.FAILED_CODE, failedMsg);
    }

    public static class RConstant {
        public static final int SUCCESSED_CODE = 100;
        public static final int FAILED_CODE = 200;
        public static final int REQUIRED_PARAMETER_NOT_FOUND = 201;
        public static final int PARAMETER_NOT_NULL = 202;
        public static final int PARAMETER_OUT_OF_RANGE = 203;
        public static final int PARAMETER_INCORRECT = 204;
        public static final int OPERATE_FAILED = 205;
        public static final int SERVER_BUSY = 206;
    }
}
