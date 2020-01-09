package com.railway.pojo.param;

import com.railway.pojo.req.UpdateDetectGroupByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateDetectGroupByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateDetectGroupByIdReq req;

    public UpdateDetectGroupByIdParams(Integer id, UpdateDetectGroupByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getGroupName() {
        return req.getGroupName();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getLeaderId() {
        return req.getLeaderId();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

}
