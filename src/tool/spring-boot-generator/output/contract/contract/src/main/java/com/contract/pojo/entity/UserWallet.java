package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class UserWallet  {

    @ApiModelProperty("企业余额(份数)")
    private Integer companyBalance;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("个人余额(份数)")
    private Integer personBalance;

    @ApiModelProperty("用户编号")
    private Integer userId;

}
