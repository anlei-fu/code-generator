package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import com.contract.validate.annotation.Path;
import com.contract.validate.annotation.Phone;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class AddUserCompanyInfoReq extends PageReq {

    @ApiModelProperty("授权文件")
    @Path
    private String authFile;

    @ApiModelProperty("授权人身份证号")
    private String authIdNo;

    @ApiModelProperty("授权签署人")
    private String authorizer;

    @ApiModelProperty("企业名称")
    private String companyName;

    @ApiModelProperty("企业地址")
    private String contactAddress;

    @ApiModelProperty("法人联系电话")
    @Phone
    private String contactPhone;

    @ApiModelProperty("法人身份证号")
    private String idCardNo;

    @ApiModelProperty("法人身份证人像照")
    private String idCardPicBack;

    @ApiModelProperty("法人身份证国徽照")
    private String idCardPicFront;

    @ApiModelProperty("企业法人")
    private String legalPerson;

    @ApiModelProperty("营业执照号")
    private String licenseNo;

    @ApiModelProperty("企业营业执照")
    private String licensePicFront;

    @ApiModelProperty("用户编号")
    private Integer userId;

    @ApiModelProperty("认证完成时间")
    private Date verifyEndTime;

    @ApiModelProperty("认证开始时间")
    private Date verifyStartTime;

    @ApiModelProperty("认证状态")
    @Enum("verifyState")
    private Integer verifyState;

}
