package com.contract.pojo.param;

import com.contract.pojo.req.UpdateNotaryChannelByIdReq;
import lombok.Getter;
import lombok.Setter;

public class UpdateNotaryChannelByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateNotaryChannelByIdReq req;

    public UpdateNotaryChannelByIdParams(Integer id, UpdateNotaryChannelByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getApiKey() {
        return req.getApiKey();
    }

    public String getApiUrl() {
        return req.getApiUrl();
    }

    public String getChannelName() {
        return req.getChannelName();
    }

    public String getRemark() {
        return req.getRemark();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

}
