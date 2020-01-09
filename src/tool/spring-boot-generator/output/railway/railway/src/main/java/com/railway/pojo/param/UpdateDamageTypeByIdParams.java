package com.railway.pojo.param;

import com.railway.pojo.req.UpdateDamageTypeByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateDamageTypeByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateDamageTypeByIdReq req;

    public UpdateDamageTypeByIdParams(Integer id, UpdateDamageTypeByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getDamageDesc() {
        return req.getDamageDesc();
    }

    public String getDamageNo() {
        return req.getDamageNo();
    }

    public Integer getDamageType() {
        return req.getDamageType();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getSortNum() {
        return req.getSortNum();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

}
