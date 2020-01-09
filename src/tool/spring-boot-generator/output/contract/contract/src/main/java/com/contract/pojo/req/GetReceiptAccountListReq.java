package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class GetReceiptAccountListReq extends PageReq {

    @ApiModelProperty("账号类型")
    @Enum("accountType")
    private Integer accountType;

    @ApiModelProperty("账户余额")
    private Float balance;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("商户编号")
    private String merchantNo;

    @ApiModelProperty("支付平台ID")
    private String platAppId;

    @ApiModelProperty("支付平台Secret")
    private String platAppSecret;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

}
