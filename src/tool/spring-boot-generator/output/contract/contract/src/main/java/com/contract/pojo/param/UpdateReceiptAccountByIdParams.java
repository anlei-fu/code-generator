package com.contract.pojo.param;

import com.contract.pojo.req.UpdateReceiptAccountByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateReceiptAccountByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateReceiptAccountByIdReq req;

    public UpdateReceiptAccountByIdParams(Integer id, UpdateReceiptAccountByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getAccountName() {
        return req.getAccountName();
    }

    public Integer getAccountType() {
        return req.getAccountType();
    }

    public String getAuthRedirectUrl() {
        return req.getAuthRedirectUrl();
    }

    public Float getBalance() {
        return req.getBalance();
    }

    public String getCertPath() {
        return req.getCertPath();
    }

    public String getCertPwd() {
        return req.getCertPwd();
    }

    public String getMerchantNo() {
        return req.getMerchantNo();
    }

    public String getPayCallbackUrl() {
        return req.getPayCallbackUrl();
    }

    public String getPayRedirectUrl() {
        return req.getPayRedirectUrl();
    }

    public String getPlatAppId() {
        return req.getPlatAppId();
    }

    public String getPlatAppSecret() {
        return req.getPlatAppSecret();
    }

    public String getPrivateKey() {
        return req.getPrivateKey();
    }

    public String getPublicKey() {
        return req.getPublicKey();
    }

    public String getRefundCallbackUrl() {
        return req.getRefundCallbackUrl();
    }

    public String getRemark() {
        return req.getRemark();
    }

    public String getSignKey() {
        return req.getSignKey();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

}
