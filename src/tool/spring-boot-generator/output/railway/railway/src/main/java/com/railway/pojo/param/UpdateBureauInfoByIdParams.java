package com.railway.pojo.param;

import com.railway.pojo.req.UpdateBureauInfoByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateBureauInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateBureauInfoByIdReq req;

    public UpdateBureauInfoByIdParams(Integer id, UpdateBureauInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getBureauCode() {
        return req.getBureauCode();
    }

    public String getBureauName() {
        return req.getBureauName();
    }

    public String getInputCode() {
        return req.getInputCode();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

}
