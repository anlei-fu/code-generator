package com.authority.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("system info")
@Getter
@Setter
public class SystemInfo  {

    @ApiModelProperty("create time")
    private Date createTime;

    @ApiModelProperty("crceate user")
    private String createUser;

    @ApiModelProperty("description")
    private String description;

    @ApiModelProperty("")
    private Integer id;

    @ApiModelProperty("name")
    private String name;

}