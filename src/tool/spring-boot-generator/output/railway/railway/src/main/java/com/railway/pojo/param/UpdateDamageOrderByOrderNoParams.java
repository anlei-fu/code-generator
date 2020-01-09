package com.railway.pojo.param;

import com.railway.pojo.req.UpdateDamageOrderByOrderNoReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateDamageOrderByOrderNoParams {

    @Getter
    @Setter
    private String orderNo;

    private UpdateDamageOrderByOrderNoReq req;

    public UpdateDamageOrderByOrderNoParams(String orderNo, UpdateDamageOrderByOrderNoReq req) {
        this.orderNo = orderNo;
        this.req = req;
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getSubmitStaff() {
        return req.getSubmitStaff();
    }

    public Date getSubmitTime() {
        return req.getSubmitTime();
    }

    public Integer getWorkareaId() {
        return req.getWorkareaId();
    }

}
