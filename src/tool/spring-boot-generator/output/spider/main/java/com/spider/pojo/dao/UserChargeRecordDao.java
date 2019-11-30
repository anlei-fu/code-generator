package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("用户充值记录")
@Getter
@Setter
public class UserChargeRecordDao {

    @ApiModelProperty("数量")
    @NotNull
    private Integer amount;

    @ApiModelProperty("支付账号")
    @NotNull
    private String chargeAccount;

    @ApiModelProperty("充值时间")
    private Long chargeTime;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("订单id")
    @NotNull
    private String orderId;

    @ApiModelProperty("支付状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("用户id")
    @NotNull
    private Integer userId;

    @ApiModelProperty("支付方式")
    @NotNull
    private Integer way;
}