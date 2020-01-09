package com.contract.pojo.param;

import com.contract.pojo.req.UpdateUserAccountInfoByIdReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateUserAccountInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateUserAccountInfoByIdReq req;

    public UpdateUserAccountInfoByIdParams(Integer id, UpdateUserAccountInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getAccountType() {
        return req.getAccountType();
    }

    public String getAlipayMpid() {
        return req.getAlipayMpid();
    }

    public String getLastLoginIp() {
        return req.getLastLoginIp();
    }

    public Date getLastLoginTime() {
        return req.getLastLoginTime();
    }

    public String getLoginPwd() {
        return req.getLoginPwd();
    }

    public String getUserName() {
        return req.getUserName();
    }

    public Integer getVerifyState() {
        return req.getVerifyState();
    }

}
