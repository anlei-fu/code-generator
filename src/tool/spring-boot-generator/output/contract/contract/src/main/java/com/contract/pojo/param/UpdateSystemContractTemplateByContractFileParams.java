package com.contract.pojo.param;

import com.contract.pojo.req.UpdateSystemContractTemplateByContractFileReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateSystemContractTemplateByContractFileParams {

    @Getter
    @Setter
    private String contractFile;

    private UpdateSystemContractTemplateByContractFileReq req;

    public UpdateSystemContractTemplateByContractFileParams(String contractFile, UpdateSystemContractTemplateByContractFileReq req) {
        this.contractFile = contractFile;
        this.req = req;
    }

    public String getContractName() {
        return req.getContractName();
    }

    public Integer getContractType() {
        return req.getContractType();
    }

    public Integer getId() {
        return req.getId();
    }

}
