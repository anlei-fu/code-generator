package com.authority.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("role")
@Getter
@Setter
public class UserRole  {

    @ApiModelProperty("create time")
    private Date createTime;

    @ApiModelProperty("create user")
    private String createUser;

    @ApiModelProperty("")
    private Integer id;

    @ApiModelProperty("system id")
    private Integer systemId;

    @ApiModelProperty("related user ")
    private String userAccount;

}