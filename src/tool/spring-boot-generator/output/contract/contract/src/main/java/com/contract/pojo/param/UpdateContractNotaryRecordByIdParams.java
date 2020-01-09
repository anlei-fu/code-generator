package com.contract.pojo.param;

import com.contract.pojo.req.UpdateContractNotaryRecordByIdReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateContractNotaryRecordByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateContractNotaryRecordByIdReq req;

    public UpdateContractNotaryRecordByIdParams(Integer id, UpdateContractNotaryRecordByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getContractId() {
        return req.getContractId();
    }

    public Integer getNotaryChannel() {
        return req.getNotaryChannel();
    }

    public Date getNotaryEndTime() {
        return req.getNotaryEndTime();
    }

    public Date getNotaryStartTime() {
        return req.getNotaryStartTime();
    }

    public Integer getNotaryStatus() {
        return req.getNotaryStatus();
    }

    public Integer getProposer() {
        return req.getProposer();
    }

}
