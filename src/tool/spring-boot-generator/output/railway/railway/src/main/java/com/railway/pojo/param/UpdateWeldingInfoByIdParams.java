package com.railway.pojo.param;

import com.railway.pojo.req.UpdateWeldingInfoByIdReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateWeldingInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateWeldingInfoByIdReq req;

    public UpdateWeldingInfoByIdParams(Integer id, UpdateWeldingInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getDirection() {
        return req.getDirection();
    }

    public Integer getHoleNum() {
        return req.getHoleNum();
    }

    public Float getInnerGlancingFlatness() {
        return req.getInnerGlancingFlatness();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getLineId() {
        return req.getLineId();
    }

    public Float getMiles() {
        return req.getMiles();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public Integer getPosition() {
        return req.getPosition();
    }

    public Integer getPositionCategory() {
        return req.getPositionCategory();
    }

    public Integer getReinforceWelding() {
        return req.getReinforceWelding();
    }

    public String getRemark() {
        return req.getRemark();
    }

    public Integer getSide() {
        return req.getSide();
    }

    public Integer getStationId() {
        return req.getStationId();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

    public Integer getThighTrackId() {
        return req.getThighTrackId();
    }

    public Integer getThignTrackCategory() {
        return req.getThignTrackCategory();
    }

    public Float getTrackGlancingFlatness() {
        return req.getTrackGlancingFlatness();
    }

    public Integer getTrackId() {
        return req.getTrackId();
    }

    public Integer getTurnoutId() {
        return req.getTurnoutId();
    }

    public Integer getTurnoutThignCategory() {
        return req.getTurnoutThignCategory();
    }

    public Date getWeldDate() {
        return req.getWeldDate();
    }

    public Float getWeldTrackTemperature() {
        return req.getWeldTrackTemperature();
    }

    public String getWeldUser() {
        return req.getWeldUser();
    }

    public String getWelderUnit() {
        return req.getWelderUnit();
    }

    public String getWeldingNo() {
        return req.getWeldingNo();
    }

    public Integer getWeldingType() {
        return req.getWeldingType();
    }

    public Integer getWeldingWay() {
        return req.getWeldingWay();
    }

    public Integer getWorkareaId() {
        return req.getWorkareaId();
    }

}
