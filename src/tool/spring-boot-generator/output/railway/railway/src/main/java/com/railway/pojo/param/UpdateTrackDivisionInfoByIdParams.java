package com.railway.pojo.param;

import com.railway.pojo.req.UpdateTrackDivisionInfoByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateTrackDivisionInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateTrackDivisionInfoByIdReq req;

    public UpdateTrackDivisionInfoByIdParams(Integer id, UpdateTrackDivisionInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getBureauId() {
        return req.getBureauId();
    }

    public String getFullName() {
        return req.getFullName();
    }

    public String getInputCode() {
        return req.getInputCode();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getShortName() {
        return req.getShortName();
    }

}
