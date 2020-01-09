package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class ReceiptAccount  {

    @ApiModelProperty("账号名称")
    private String accountName;

    @ApiModelProperty("账号类型")
    private Integer accountType;

    @ApiModelProperty("API授权跳转URL")
    private String authRedirectUrl;

    @ApiModelProperty("账户余额")
    private Float balance;

    @ApiModelProperty("证书路径")
    private String certPath;

    @ApiModelProperty("证书密码")
    private String certPwd;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("商户编号")
    private String merchantNo;

    @ApiModelProperty("支付结果回调URL")
    private String payCallbackUrl;

    @ApiModelProperty("支付完跳转URL")
    private String payRedirectUrl;

    @ApiModelProperty("支付平台ID")
    private String platAppId;

    @ApiModelProperty("支付平台Secret")
    private String platAppSecret;

    @ApiModelProperty("解密验签私钥")
    private String privateKey;

    @ApiModelProperty("加密公钥")
    private String publicKey;

    @ApiModelProperty("退款结果回调URL")
    private String refundCallbackUrl;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("签名KEY")
    private String signKey;

    @ApiModelProperty("状态")
    private Integer status;

}
