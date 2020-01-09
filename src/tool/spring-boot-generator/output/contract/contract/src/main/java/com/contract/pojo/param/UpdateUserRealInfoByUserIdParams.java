package com.contract.pojo.param;

import com.contract.pojo.req.UpdateUserRealInfoByUserIdReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateUserRealInfoByUserIdParams {

    @Getter
    @Setter
    private Integer userId;

    private UpdateUserRealInfoByUserIdReq req;

    public UpdateUserRealInfoByUserIdParams(Integer userId, UpdateUserRealInfoByUserIdReq req) {
        this.userId = userId;
        this.req = req;
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

    public String getIdCardPicHand() {
        return req.getIdCardPicHand();
    }

    public String getRealName() {
        return req.getRealName();
    }

    public Date getVerifyEndTime() {
        return req.getVerifyEndTime();
    }

    public Date getVerifyStartTime() {
        return req.getVerifyStartTime();
    }

}
