package com.railway.pojo.param;

import com.railway.pojo.req.UpdateSysSystemDictionaryByDicidReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateSysSystemDictionaryByDicidParams {

    @Getter
    @Setter
    private Integer dicid;

    private UpdateSysSystemDictionaryByDicidReq req;

    public UpdateSysSystemDictionaryByDicidParams(Integer dicid, UpdateSysSystemDictionaryByDicidReq req) {
        this.dicid = dicid;
        this.req = req;
    }

    public String getEnumName() {
        return req.getEnumName();
    }

    public String getEnumType() {
        return req.getEnumType();
    }

    public Integer getSortId() {
        return req.getSortId();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

    public Integer getSystemId() {
        return req.getSystemId();
    }

    public String getText() {
        return req.getText();
    }

    public String getValue() {
        return req.getValue();
    }

}
