package com.contract.pojo.param;

import com.contract.pojo.req.UpdateSystemLogByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateSystemLogByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateSystemLogByIdReq req;

    public UpdateSystemLogByIdParams(Integer id, UpdateSystemLogByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getContent() {
        return req.getContent();
    }

    public String getModule() {
        return req.getModule();
    }

    public String getSummary() {
        return req.getSummary();
    }

}
