package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import com.contract.validate.annotation.Password;
import com.contract.validate.annotation.Path;
import com.contract.validate.annotation.Url;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class AddReceiptAccountReq extends PageReq {

    @ApiModelProperty("账号名称")
    private String accountName;

    @ApiModelProperty("账号类型")
    @Enum("accountType")
    private Integer accountType;

    @ApiModelProperty("API授权跳转URL")
    @Url
    private String authRedirectUrl;

    @ApiModelProperty("账户余额")
    private Float balance;

    @ApiModelProperty("证书路径")
    @Path
    private String certPath;

    @ApiModelProperty("证书密码")
    @Password
    private String certPwd;

    @ApiModelProperty("商户编号")
    private String merchantNo;

    @ApiModelProperty("支付结果回调URL")
    @Url
    private String payCallbackUrl;

    @ApiModelProperty("支付完跳转URL")
    @Url
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
    @Url
    private String refundCallbackUrl;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("签名KEY")
    private String signKey;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

}
