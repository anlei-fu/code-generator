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
public class UserCompanyInfo @extends {

    @ApiModelProperty("企业编号")
    private Integer id;

    @ApiModelProperty("用户编号")
    private Integer userId;

    @ApiModelProperty("企业名称")
    private String companyName;

    @ApiModelProperty("企业地址")
    private String contactAddress;

    @ApiModelProperty("营业执照号")
    private String licenseNo;

    @ApiModelProperty("企业法人")
    private String legalPerson;

    @ApiModelProperty("法人联系电话")
    private String contactPhone;

    @ApiModelProperty("法人身份证号")
    private String idCardNo;

    @ApiModelProperty("法人身份证国徽照")
    private String idCardPicFront;

    @ApiModelProperty("法人身份证人像照")
    private String idCardPicBack;

    @ApiModelProperty("企业营业执照")
    private String licensePicFront;

    @ApiModelProperty("认证状态")
    private Integer verifyState;

    @ApiModelProperty("认证开始时间")
    private Date verifyStartTime;

    @ApiModelProperty("认证完成时间")
    private Date verifyEndTime;

    @ApiModelProperty("授权签署人")
    private String authorizer;

    @ApiModelProperty("授权人身份证号")
    private String authIdNo;

    @ApiModelProperty("授权文件")
    private String authFile;

    @ApiModelProperty("创建时间")
    private Date createTime;

}