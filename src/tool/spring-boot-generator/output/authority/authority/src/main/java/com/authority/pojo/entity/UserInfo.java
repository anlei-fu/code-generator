package com.authority.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("user info")
@Getter
@Setter
public class UserInfo  {

    @ApiModelProperty("account")
    private String account;

    @ApiModelProperty("create time")
    private Date createTime;

    @ApiModelProperty("create user")
    private String createUser;

    @ApiModelProperty("password")
    private String password;

    @ApiModelProperty("user role")
    private Integer userRole;

}