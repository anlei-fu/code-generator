package com.authority.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("system group role info")
@Getter
@Setter
public class SystemRoleGroupInfo  {

    @ApiModelProperty("")
    private Integer id;

    @ApiModelProperty("related system")
    private Integer systemId;

    @ApiModelProperty("role")
    private String role;

    @ApiModelProperty("desccription")
    private String description;

    @ApiModelProperty("create user")
    private String createUser;

    @ApiModelProperty("create time")
    private Date createTime;

}