package com.contractSign.pojo.entity;

@packages
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
@packages


@ApiModel("")
@Getter
@Setter
public class GetUserRealInfoListReq @extends {

    @ApiModelProperty("身份证号")
    private String idCardNo;

    @ApiModelProperty("认证开始时间")
    private Date verifyStartTime;

    @ApiModelProperty("认证完成时间")
    private Date verifyEndTime;

}