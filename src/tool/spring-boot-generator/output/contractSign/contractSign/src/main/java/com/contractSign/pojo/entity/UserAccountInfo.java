package com.contractSign.pojo.entity;

@packages
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
@packages


@ApiModel("")
@Getter
@Setter
public class UserAccountInfo @extends {

    @ApiModelProperty("用户编号")
    private Integer id;

    @ApiModelProperty("账号类: 1-手机 2-邮箱 3-支付宝小程序")
    private Integer accountType;

    @ApiModelProperty("登录账号")
    private String userName;

    @ApiModelProperty("登录密码")
    private String loginPwd;

    @ApiModelProperty("实名状态")
    private Integer verifyState;

    @ApiModelProperty("支付宝小程序UID")
    private String alipayMpid;

    @ApiModelProperty("上次登录IP")
    private String lastLoginIp;

    @ApiModelProperty("上次登录时间")
    private Date lastLoginTime;

    @ApiModelProperty("创建时间")
    private Date createTime;

}