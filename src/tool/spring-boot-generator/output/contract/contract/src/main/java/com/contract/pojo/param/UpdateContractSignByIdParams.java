package com.contract.pojo.param;

import com.contract.pojo.req.UpdateContractSignByIdReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateContractSignByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateContractSignByIdReq req;

    public UpdateContractSignByIdParams(Integer id, UpdateContractSignByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getNeedPay() {
        return req.getNeedPay();
    }

    public Integer getNotifyCount() {
        return req.getNotifyCount();
    }

    public String getNotifyEmail() {
        return req.getNotifyEmail();
    }

    public String getNotifyPhone() {
        return req.getNotifyPhone();
    }

    public String getShortMsg() {
        return req.getShortMsg();
    }

    public String getSignIp() {
        return req.getSignIp();
    }

    public String getSignPerson() {
        return req.getSignPerson();
    }

    public Integer getSignSort() {
        return req.getSignSort();
    }

    public Integer getSignStatus() {
        return req.getSignStatus();
    }

    public String getSignSubject() {
        return req.getSignSubject();
    }

    public Date getSignTime() {
        return req.getSignTime();
    }

    public String getSignUrl() {
        return req.getSignUrl();
    }

    public Integer getSubjectType() {
        return req.getSubjectType();
    }

    public Integer getUserId() {
        return req.getUserId();
    }

}
