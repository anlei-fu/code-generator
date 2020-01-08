package com.authority.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("role system user")
@Getter
@Setter
public class RoleSystemUserInfo  {

    @ApiModelProperty("account")
    private String account;

    @ApiModelProperty("password")
    private String password;

    @ApiModelProperty("create time")
    private Date createTime;

    @ApiModelProperty("")
    private String role;

}