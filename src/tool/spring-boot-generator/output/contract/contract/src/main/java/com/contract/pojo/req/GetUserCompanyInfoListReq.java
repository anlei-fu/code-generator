package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import com.contract.validate.annotation.Phone;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class GetUserCompanyInfoListReq extends PageReq {

    @ApiModelProperty("授权人身份证号")
    private String authIdNo;

    @ApiModelProperty("授权签署人")
    private String authorizer;

    @ApiModelProperty("企业地址")
    private String contactAddress;

    @ApiModelProperty("法人联系电话")
    @Phone
    private String contactPhone;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("法人身份证号")
    private String idCardNo;

    @ApiModelProperty("企业法人")
    private String legalPerson;

    @ApiModelProperty("营业执照号")
    private String licenseNo;

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
