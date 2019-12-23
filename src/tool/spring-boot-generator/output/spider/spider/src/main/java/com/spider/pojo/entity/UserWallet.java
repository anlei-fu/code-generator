package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("用户钱包")
@Getter
@Setter
public class UserWallet  {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("余额")
    private Float total;

    @ApiModelProperty("用户id")
    private String userId;

}