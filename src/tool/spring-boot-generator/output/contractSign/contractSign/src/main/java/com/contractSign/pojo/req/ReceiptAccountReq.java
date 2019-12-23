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
public class GetReceiptAccountListReq @extends {

    @ApiModelProperty("账号类型")
    private Integer accountType;

    @ApiModelProperty("支付平台ID")
    private String platAppId;

    @ApiModelProperty("支付平台Secret")
    private String platAppSecret;

    @ApiModelProperty("商户编号")
    private String merchantNo;

    @ApiModelProperty("签名KEY")
    private String signKey;

    @ApiModelProperty("证书密码")
    private String certPwd;

    @ApiModelProperty("加密公钥")
    private String publicKey;

    @ApiModelProperty("解密验签私钥")
    private String privateKey;

    @ApiModelProperty("账户余额")
    private Float balance;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("创建时间")
    private Date createTime;

}