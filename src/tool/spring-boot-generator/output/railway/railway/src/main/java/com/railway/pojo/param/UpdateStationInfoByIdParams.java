package com.railway.pojo.param;

import com.railway.pojo.req.UpdateStationInfoByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateStationInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateStationInfoByIdReq req;

    public UpdateStationInfoByIdParams(Integer id, UpdateStationInfoByIdReq req) {
        this.id = id;
        this.req = req;
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

    public Integer getJobType() {
        return req.getJobType();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getShortName() {
        return req.getShortName();
    }

    public String getStationCode() {
        return req.getStationCode();
    }

    public Integer getStationGrade() {
        return req.getStationGrade();
    }

    public Integer getStationType() {
        return req.getStationType();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

    public Integer getTernoutNum() {
        return req.getTernoutNum();
    }

    public Integer getThighTrackNum() {
        return req.getThighTrackNum();
    }

    public Integer getTrackDivisionId() {
        return req.getTrackDivisionId();
    }

}
