package com.railway.pojo.param;

import com.railway.pojo.req.UpdateLoginUserByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateLoginUserByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateLoginUserByIdReq req;

    public UpdateLoginUserByIdParams(Integer id, UpdateLoginUserByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getName() {
        return req.getName();
    }

    public String getPassword() {
        return req.getPassword();
    }

    public String getState() {
        return req.getState();
    }

    public String getType() {
        return req.getType();
    }

}
