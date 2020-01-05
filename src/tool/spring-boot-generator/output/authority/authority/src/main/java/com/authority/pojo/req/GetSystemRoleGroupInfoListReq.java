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

    @ApiModelProperty("create time")
    private Date createTime;

    @ApiModelProperty("create user")
    private String createUser;

    @ApiModelProperty("role")
    private String role;

    @ApiModelProperty("related system")
    private Integer systemId;

}