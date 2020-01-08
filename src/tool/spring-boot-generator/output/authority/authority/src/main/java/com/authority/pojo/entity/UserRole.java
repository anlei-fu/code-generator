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

    @ApiModelProperty("")
    private Integer id;

    @ApiModelProperty("related user ")
    private String userAccount;

    @ApiModelProperty("system id")
    private Integer systemId;

    @ApiModelProperty("create user")
    private String createUser;

    @ApiModelProperty("create time")
    private Date createTime;

}