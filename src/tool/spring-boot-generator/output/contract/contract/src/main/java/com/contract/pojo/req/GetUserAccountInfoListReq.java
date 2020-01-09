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
public class GetUserAccountInfoListReq extends PageReq {

    @ApiModelProperty("账号类: 1-手机 2-邮箱 3-支付宝小程序")
    @Enum("accountType")
    private Integer accountType;

    @ApiModelProperty("支付宝小程序UID")
    private String alipayMpid;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("上次登录时间")
    private Date lastLoginTime;

    @ApiModelProperty("实名状态")
    @Enum("verifyState")
    private Integer verifyState;

}
