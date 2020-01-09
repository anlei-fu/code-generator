package com.contract.pojo.param;

import com.contract.pojo.req.UpdateUserContactInfoByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateUserContactInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateUserContactInfoByIdReq req;

    public UpdateUserContactInfoByIdParams(Integer id, UpdateUserContactInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getContractEmail() {
        return req.getContractEmail();
    }

    public String getContractName() {
        return req.getContractName();
    }

    public String getContractPhone() {
        return req.getContractPhone();
    }

    public Integer getUserId() {
        return req.getUserId();
    }

}
