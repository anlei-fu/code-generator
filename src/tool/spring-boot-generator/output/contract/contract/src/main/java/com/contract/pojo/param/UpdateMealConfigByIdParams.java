package com.contract.pojo.param;

import com.contract.pojo.req.UpdateMealConfigByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateMealConfigByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateMealConfigByIdReq req;

    public UpdateMealConfigByIdParams(Integer id, UpdateMealConfigByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getContracts() {
        return req.getContracts();
    }

    public Float getDiscount() {
        return req.getDiscount();
    }

    public String getMealName() {
        return req.getMealName();
    }

    public Integer getMealType() {
        return req.getMealType();
    }

    public Float getPrice() {
        return req.getPrice();
    }

    public String getRemark() {
        return req.getRemark();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

}
