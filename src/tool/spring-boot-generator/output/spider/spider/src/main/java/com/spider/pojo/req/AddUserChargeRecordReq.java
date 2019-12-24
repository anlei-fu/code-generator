package com.spider.pojo.req;

import com.spider.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddUserChargeRecordReq extends PageReq {

    @ApiModelProperty("数量")
    @NotNull
    private Float amount;

    @ApiModelProperty("支付账号")
    @NotNull
    private String chargeAccount;

    @ApiModelProperty("充值时间")
    private Integer chargeTime;

    @ApiModelProperty("订单id")
    @NotNull
    private String orderId;

    @ApiModelProperty("支付状态")
    @NotNull
    @Enum("status")
    private Integer status;

    @ApiModelProperty("用户id")
    @NotNull
    private Integer userId;

    @ApiModelProperty("支付方式")
    @NotNull
    private Integer way;

}