package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GetUserRoleListReq extends PageReq {

    @ApiModelProperty("related user ")
    private String userAccount;

    @ApiModelProperty("system id")
    private Integer systemId;

    @ApiModelProperty("create user")
    private String createUser;

    @ApiModelProperty("create time start time")
    private Date createTimeStart;

    @ApiModelProperty("create time end time")
    private Date createTimeEnd;

}