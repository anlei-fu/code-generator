package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GetSystemRoleGroupInfoListReq extends PageReq {

    @ApiModelProperty("related system")
    private Integer systemId;

    @ApiModelProperty("role")
    private String role;

    @ApiModelProperty("create user")
    private String createUser;

    @ApiModelProperty("create time start time")
    private Date createTimeStart;

    @ApiModelProperty("create time end time")
    private Date createTimeEnd;

}