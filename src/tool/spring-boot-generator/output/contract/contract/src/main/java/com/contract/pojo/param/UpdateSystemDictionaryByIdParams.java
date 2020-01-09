package com.contract.pojo.param;

import com.contract.pojo.req.UpdateSystemDictionaryByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateSystemDictionaryByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateSystemDictionaryByIdReq req;

    public UpdateSystemDictionaryByIdParams(Integer id, UpdateSystemDictionaryByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getRemark() {
        return req.getRemark();
    }

    public Integer getSortNum() {
        return req.getSortNum();
    }

    public String getType() {
        return req.getType();
    }

    public String getValue() {
        return req.getValue();
    }

}
