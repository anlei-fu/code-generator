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

    @ApiModelProperty("create time")
    private Date createTime;

    @ApiModelProperty("create user")
    private String createUser;

    @ApiModelProperty("system id")
    private Integer systemId;

    @ApiModelProperty("related user ")
    private String userAccount;

}