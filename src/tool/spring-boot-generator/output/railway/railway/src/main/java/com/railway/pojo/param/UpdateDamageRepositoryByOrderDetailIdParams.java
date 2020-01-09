package com.railway.pojo.param;

import com.railway.pojo.req.UpdateDamageRepositoryByOrderDetailIdReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateDamageRepositoryByOrderDetailIdParams {

    @Getter
    @Setter
    private Integer orderDetailId;

    private UpdateDamageRepositoryByOrderDetailIdReq req;

    public UpdateDamageRepositoryByOrderDetailIdParams(Integer orderDetailId, UpdateDamageRepositoryByOrderDetailIdReq req) {
        this.orderDetailId = orderDetailId;
        this.req = req;
    }

    public Integer getAnalysisResult() {
        return req.getAnalysisResult();
    }

    public Integer getAuditStatus() {
        return req.getAuditStatus();
    }

    public Integer getCancel() {
        return req.getCancel();
    }

    public Integer getCheckEquipment() {
        return req.getCheckEquipment();
    }

    public String getDamageCode() {
        return req.getDamageCode();
    }

    public String getDamageDetail() {
        return req.getDamageDetail();
    }

    public Integer getDamageLevel() {
        return req.getDamageLevel();
    }

    public Integer getDamageOld() {
        return req.getDamageOld();
    }

    public Integer getDamageOldId() {
        return req.getDamageOldId();
    }

    public Integer getDamageType() {
        return req.getDamageType();
    }

    public Integer getDealStatus() {
        return req.getDealStatus();
    }

    public Date getDeleteTime() {
        return req.getDeleteTime();
    }

    public Integer getDetectStuff() {
        return req.getDetectStuff();
    }

    public Date getDetectTime() {
        return req.getDetectTime();
    }

    public Integer getImportStatus() {
        return req.getImportStatus();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Date getLastDetectTime() {
        return req.getLastDetectTime();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getOrderNo() {
        return req.getOrderNo();
    }

    public String getReceivingUnit() {
        return req.getReceivingUnit();
    }

    public String getReceivingUser() {
        return req.getReceivingUser();
    }

    public Integer getReceivingWorkareaInfo() {
        return req.getReceivingWorkareaInfo();
    }

    public String getRemark() {
        return req.getRemark();
    }

}
