package com.contract.pojo.param;

import com.contract.pojo.req.UpdateUserWalletByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateUserWalletByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateUserWalletByIdReq req;

    public UpdateUserWalletByIdParams(Integer id, UpdateUserWalletByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getCompanyBalance() {
        return req.getCompanyBalance();
    }

    public Integer getPersonBalance() {
        return req.getPersonBalance();
    }

    public Integer getUserId() {
        return req.getUserId();
    }

}
