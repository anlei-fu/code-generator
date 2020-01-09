package com.contract.pojo.param;

import com.contract.pojo.req.UpdateUserPurchaseRecordByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateUserPurchaseRecordByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateUserPurchaseRecordByIdReq req;

    public UpdateUserPurchaseRecordByIdParams(Integer id, UpdateUserPurchaseRecordByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getContractCount() {
        return req.getContractCount();
    }

    public Integer getContractType() {
        return req.getContractType();
    }

    public Integer getMealId() {
        return req.getMealId();
    }

    public Float getMealPrice() {
        return req.getMealPrice();
    }

    public Integer getPurchaseAfter() {
        return req.getPurchaseAfter();
    }

    public Integer getPurchaseBefore() {
        return req.getPurchaseBefore();
    }

    public Integer getUserId() {
        return req.getUserId();
    }

}
