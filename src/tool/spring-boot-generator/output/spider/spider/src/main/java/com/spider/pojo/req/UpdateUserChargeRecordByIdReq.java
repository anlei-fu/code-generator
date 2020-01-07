package com.spider.pojo.req;

import com.spider.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateUserChargeRecordByIdReq extends PageReq {

    @ApiModelProperty("用户id")
    private Integer userId;

    @ApiModelProperty("支付方式")
    private Integer way;

    @ApiModelProperty("支付账号")
    private String chargeAccount;

    @ApiModelProperty("订单id")
    private String orderId;

    @ApiModelProperty("数量")
    private Float amount;

    @ApiModelProperty("支付状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("充值时间")
    private Integer chargeTime;

}