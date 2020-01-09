package com.railway.pojo.param;

import com.railway.pojo.req.UpdateDetectDeviceInfoByIdReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateDetectDeviceInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateDetectDeviceInfoByIdReq req;

    public UpdateDetectDeviceInfoByIdParams(Integer id, UpdateDetectDeviceInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Date getCommissioningDate() {
        return req.getCommissioningDate();
    }

    public String getDeivceNo() {
        return req.getDeivceNo();
    }

    public String getDeviceMode() {
        return req.getDeviceMode();
    }

    public String getDeviceName() {
        return req.getDeviceName();
    }

    public Integer getDurableYears() {
        return req.getDurableYears();
    }

    public Date getExFactoryDate() {
        return req.getExFactoryDate();
    }

    public String getFixedAssetsNo() {
        return req.getFixedAssetsNo();
    }

    public Float getFixedAssetsPrice() {
        return req.getFixedAssetsPrice();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Float getLength() {
        return req.getLength();
    }

    public String getManufacturer() {
        return req.getManufacturer();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public Float getPurchasePrice() {
        return req.getPurchasePrice();
    }

    public String getRemark() {
        return req.getRemark();
    }

    public Date getScrapDate() {
        return req.getScrapDate();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

    public Integer getUseStatus() {
        return req.getUseStatus();
    }

    public Float getWeight() {
        return req.getWeight();
    }

    public Float getWidth() {
        return req.getWidth();
    }

    public Integer getWorkareaId() {
        return req.getWorkareaId();
    }

}
