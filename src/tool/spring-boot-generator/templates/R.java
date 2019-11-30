package com.spider.pojo.resp;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.function.Supplier;

@Getter
@ApiModel("请求回复")
public class R<T> {

    @ApiModelProperty("响应码")
    private int code;

    @ApiModelProperty("信息")
    private String message;

    @ApiModelProperty("数据")
    private T data;

    public R(int code, String msg) {
        this.code = code;
        this.message = msg;
    }

    public static R success() {
        return success("成功");
    }

    public static R success(String msg) {
        return create(RConstant.SUCCESSED_CODE, "成功");
    }

    public static R create(int code, String msg) {
        return new R(code, msg);
    }

    public static R add(Supplier<Boolean> supplier) {
        return supplier.get() ? success() : create(RConstant.OPERATE_FAILED, "插入数据失败");
    }

    public static R deleteById(Integer id, Supplier<Boolean> supplier) {
        return boolResult(id, supplier, "删除");
    }

    public static R updateById(Integer id, Supplier<Boolean> supplier) {
        return boolResult(id, supplier, "更新");
    }

    public static R findById(Integer id, Supplier<?> supplier) {
        Object result = supplier.get();
        return result != null ? success() : create(RConstant.OPERATE_FAILED, "通过id(" + id.toString() + ")查询数据失败");
    }

    private static R boolResult(Integer id, Supplier<Boolean> supplier, String operate) {
        return supplier.get() ? success() : create(RConstant.OPERATE_FAILED, "通过id(" + id.toString() + ")" + operate + "数据失败");
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
