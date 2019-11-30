package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("用户钱包")
@Getter
@Setter
public class UserWalletDao {

    @ApiModelProperty("创建时间")
    private Long createTime;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("余额")
    @NotNull
    private Integer total;

    @ApiModelProperty("用户id")
    @NotNull
    private String userId;
}