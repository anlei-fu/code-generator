package com.railway.pojo.param;

import com.railway.pojo.req.UpdateDevicePositionByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateDevicePositionByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateDevicePositionByIdReq req;

    public UpdateDevicePositionByIdParams(Integer id, UpdateDevicePositionByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getDeviceCode() {
        return req.getDeviceCode();
    }

    public String getDeviceNo() {
        return req.getDeviceNo();
    }

    public Integer getDirection() {
        return req.getDirection();
    }

    public Integer getLineCategory() {
        return req.getLineCategory();
    }

    public Integer getLineId() {
        return req.getLineId();
    }

    public String getLineName() {
        return req.getLineName();
    }

    public Float getMiles() {
        return req.getMiles();
    }

    public Integer getStationId() {
        return req.getStationId();
    }

    public Integer getStockExchange() {
        return req.getStockExchange();
    }

    public Integer getThighTrackId() {
        return req.getThighTrackId();
    }

    public Integer getTrackId() {
        return req.getTrackId();
    }

}
