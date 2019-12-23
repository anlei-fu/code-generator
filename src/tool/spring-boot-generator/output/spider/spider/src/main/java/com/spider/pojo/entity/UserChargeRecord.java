package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("用户充值记录")
@Getter
@Setter
public class UserChargeRecord  {

    @ApiModelProperty("数量")
    private Float amount;

    @ApiModelProperty("支付账号")
    private String chargeAccount;

    @ApiModelProperty("充值时间")
    private Integer chargeTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("订单id")
    private String orderId;

    @ApiModelProperty("支付状态")
    private Integer status;

    @ApiModelProperty("用户id")
    private Integer userId;

    @ApiModelProperty("支付方式")
    private Integer way;

}