package com.contract.pojo.param;

import com.contract.pojo.req.UpdateUserContractTemplateByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateUserContractTemplateByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateUserContractTemplateByIdReq req;

    public UpdateUserContractTemplateByIdParams(Integer id, UpdateUserContractTemplateByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getBelongId() {
        return req.getBelongId();
    }

    public Integer getBelongType() {
        return req.getBelongType();
    }

    public String getContractFile() {
        return req.getContractFile();
    }

    public String getContractName() {
        return req.getContractName();
    }

    public Integer getUserId() {
        return req.getUserId();
    }

}
