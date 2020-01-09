package com.contract.pojo.param;

import com.contract.pojo.req.UpdateUserCompanyInfoByIdReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateUserCompanyInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateUserCompanyInfoByIdReq req;

    public UpdateUserCompanyInfoByIdParams(Integer id, UpdateUserCompanyInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getAuthFile() {
        return req.getAuthFile();
    }

    public String getAuthIdNo() {
        return req.getAuthIdNo();
    }

    public String getAuthorizer() {
        return req.getAuthorizer();
    }

    public String getCompanyName() {
        return req.getCompanyName();
    }

    public String getContactAddress() {
        return req.getContactAddress();
    }

    public String getContactPhone() {
        return req.getContactPhone();
    }

    public String getIdCardNo() {
        return req.getIdCardNo();
    }

    public String getIdCardPicBack() {
        return req.getIdCardPicBack();
    }

    public String getIdCardPicFront() {
        return req.getIdCardPicFront();
    }

    public String getLegalPerson() {
        return req.getLegalPerson();
    }

    public String getLicenseNo() {
        return req.getLicenseNo();
    }

    public String getLicensePicFront() {
        return req.getLicensePicFront();
    }

    public Integer getUserId() {
        return req.getUserId();
    }

    public Date getVerifyEndTime() {
        return req.getVerifyEndTime();
    }

    public Date getVerifyStartTime() {
        return req.getVerifyStartTime();
    }

    public Integer getVerifyState() {
        return req.getVerifyState();
    }

}
