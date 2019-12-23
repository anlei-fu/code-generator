package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("管理员")
@Getter
@Setter
public class AdminInfo  {

    @ApiModelProperty("账号")
    private String account;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("权限等级")
    private Integer level;

    @ApiModelProperty("密码")
    private String password;

}