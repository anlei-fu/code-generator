package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import com.contract.validate.annotation.Ip;
import com.contract.validate.annotation.Password;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class AddUserAccountInfoReq extends PageReq {

    @ApiModelProperty("账号类: 1-手机 2-邮箱 3-支付宝小程序")
    @Enum("accountType")
    private Integer accountType;

    @ApiModelProperty("支付宝小程序UID")
    private String alipayMpid;

    @ApiModelProperty("上次登录IP")
    @Ip
    private String lastLoginIp;

    @ApiModelProperty("上次登录时间")
    private Date lastLoginTime;

    @ApiModelProperty("登录密码")
    @Password
    private String loginPwd;

    @ApiModelProperty("登录账号")
    private String userName;

    @ApiModelProperty("实名状态")
    @Enum("verifyState")
    private Integer verifyState;

}
