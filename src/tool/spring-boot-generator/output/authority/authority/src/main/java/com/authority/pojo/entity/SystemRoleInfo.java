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

    @ApiModelProperty("id")
    private Integer id;

    @ApiModelProperty("related system")
    private Integer systemId;

    @ApiModelProperty("role")
    private String role;

    @ApiModelProperty("description")
    private String description;

    @ApiModelProperty("")
    private String createUser;

    @ApiModelProperty("")
    private Date createTime;

}