package com.railway.pojo.param;

import com.railway.pojo.req.UpdateDetectStaffInfoByIdReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateDetectStaffInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateDetectStaffInfoByIdReq req;

    public UpdateDetectStaffInfoByIdParams(Integer id, UpdateDetectStaffInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Date getBirthday() {
        return req.getBirthday();
    }

    public String getContact() {
        return req.getContact();
    }

    public Integer getEduDegree() {
        return req.getEduDegree();
    }

    public Integer getGender() {
        return req.getGender();
    }

    public Date getGradeGainDate() {
        return req.getGradeGainDate();
    }

    public Integer getGradeId() {
        return req.getGradeId();
    }

    public String getIdCardNo() {
        return req.getIdCardNo();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public String getName() {
        return req.getName();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public Integer getPositionId() {
        return req.getPositionId();
    }

    public Date getQualificationAuditDate() {
        return req.getQualificationAuditDate();
    }

    public Date getQualificationGainDate() {
        return req.getQualificationGainDate();
    }

    public Integer getQualificationGrade() {
        return req.getQualificationGrade();
    }

    public Date getQualificationInvalidDate() {
        return req.getQualificationInvalidDate();
    }

    public Integer getQualificationValidTime() {
        return req.getQualificationValidTime();
    }

    public String getRemark() {
        return req.getRemark();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

    public Integer getTecCategory() {
        return req.getTecCategory();
    }

    public Integer getWorkareaId() {
        return req.getWorkareaId();
    }

}
