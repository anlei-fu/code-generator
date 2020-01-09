package com.contract.pojo.param;

import com.contract.pojo.req.UpdateUserConsumeRecordByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateUserConsumeRecordByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateUserConsumeRecordByIdReq req;

    public UpdateUserConsumeRecordByIdParams(Integer id, UpdateUserConsumeRecordByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getAccountId() {
        return req.getAccountId();
    }

    public Integer getConsumeAfter() {
        return req.getConsumeAfter();
    }

    public Integer getConsumeAmount() {
        return req.getConsumeAmount();
    }

    public Integer getConsumeBefore() {
        return req.getConsumeBefore();
    }

    public Integer getConsumeType() {
        return req.getConsumeType();
    }

    public Integer getContractId() {
        return req.getContractId();
    }

    public String getRemark() {
        return req.getRemark();
    }

}
