package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("管理员")
@Getter
@Setter
public class AdminInfoDao {

    @ApiModelProperty("账号")
    @NotNull
    private String account;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("权限等级")
    private Integer level;

    @ApiModelProperty("密码")
    @NotNull
    private String password;
}