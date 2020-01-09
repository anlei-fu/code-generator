package com.contract.pojo.param;

import com.contract.pojo.req.UpdateUserSignSealByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateUserSignSealByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateUserSignSealByIdReq req;

    public UpdateUserSignSealByIdParams(Integer id, UpdateUserSignSealByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getBelongId() {
        return req.getBelongId();
    }

    public Integer getBelongType() {
        return req.getBelongType();
    }

    public String getSignName() {
        return req.getSignName();
    }

    public String getSignPic() {
        return req.getSignPic();
    }

    public Integer getUserId() {
        return req.getUserId();
    }

}
