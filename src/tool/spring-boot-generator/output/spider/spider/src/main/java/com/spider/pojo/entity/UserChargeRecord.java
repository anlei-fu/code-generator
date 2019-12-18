/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 14:55:53
 */
package com.undefined.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@import

@ApiModel("用户充值记录")
@Getter
@Setter
public class UserChargeRecord {

    @ApiModelProperty("数量")
    @NotNull
    private Float amount;

    @ApiModelProperty("支付账号")
    @NotNull
@NotNull
    private String chargeAccount;

    @ApiModelProperty("充值时间")
    @NotNull
@NotNull
    private Integer chargeTime;

    @ApiModelProperty("编号")
    @NotNull
@NotNull
    private Integer id;

    @ApiModelProperty("订单id")
    @NotNull
@NotNull
@NotNull
    private String orderId;

    @ApiModelProperty("支付状态")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Integer status;

    @ApiModelProperty("用户id")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private Integer userId;

    @ApiModelProperty("支付方式")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private Integer way;

}