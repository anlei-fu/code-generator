package com.contract.pojo.param;

import com.contract.pojo.req.UpdateContractSignRecordByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateContractSignRecordByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateContractSignRecordByIdReq req;

    public UpdateContractSignRecordByIdParams(Integer id, UpdateContractSignRecordByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getContractId() {
        return req.getContractId();
    }

    public String getSignAfterFile() {
        return req.getSignAfterFile();
    }

    public String getSignAfterHash() {
        return req.getSignAfterHash();
    }

    public String getSignBeforeFile() {
        return req.getSignBeforeFile();
    }

    public String getSignBeforeHash() {
        return req.getSignBeforeHash();
    }

    public Integer getSignId() {
        return req.getSignId();
    }

    public String getSignPerson() {
        return req.getSignPerson();
    }

}
