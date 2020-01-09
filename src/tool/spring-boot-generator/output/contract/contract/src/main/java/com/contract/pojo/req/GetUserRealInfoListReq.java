package com.contract.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class GetUserRealInfoListReq extends PageReq {

    @ApiModelProperty("身份证号")
    private String idCardNo;

    @ApiModelProperty("认证完成时间")
    private Date verifyEndTime;

    @ApiModelProperty("认证开始时间")
    private Date verifyStartTime;

}
