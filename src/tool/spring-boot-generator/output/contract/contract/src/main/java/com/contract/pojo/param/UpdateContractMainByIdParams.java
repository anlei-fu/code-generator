package com.contract.pojo.param;

import com.contract.pojo.req.UpdateContractMainByIdReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateContractMainByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateContractMainByIdReq req;

    public UpdateContractMainByIdParams(Integer id, UpdateContractMainByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getContractPrice() {
        return req.getContractPrice();
    }

    public Integer getContractState() {
        return req.getContractState();
    }

    public String getContractTitle() {
        return req.getContractTitle();
    }

    public Integer getContractType() {
        return req.getContractType();
    }

    public Date getEffectTime() {
        return req.getEffectTime();
    }

    public Date getExpireTime() {
        return req.getExpireTime();
    }

    public String getRawContractFile() {
        return req.getRawContractFile();
    }

    public String getRawContractHash() {
        return req.getRawContractHash();
    }

    public String getSignContractFile() {
        return req.getSignContractFile();
    }

    public String getSignContractHash() {
        return req.getSignContractHash();
    }

    public Date getSignExpireTime() {
        return req.getSignExpireTime();
    }

    public Integer getUserId() {
        return req.getUserId();
    }

    public Integer getValidPeriod() {
        return req.getValidPeriod();
    }

}
