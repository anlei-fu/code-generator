package com.authority.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("system role info")
@Getter
@Setter
public class SystemRoleInfo  {

    @ApiModelProperty("")
    private Date createTime;

    @ApiModelProperty("")
    private String createUser;

    @ApiModelProperty("description")
    private String description;

    @ApiModelProperty("id")
    private Integer id;

    @ApiModelProperty("role")
    private String role;

    @ApiModelProperty("related system")
    private Integer systemId;

}