package com.contract.pojo.req;

import com.contract.validate.annotation.Email;
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
public class GetContractSignListReq extends PageReq {

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("需要付费")
    private Integer needPay;

    @ApiModelProperty("通知次数 min")
    private Integer notifyCountMin;

    @ApiModelProperty("通知次数 max")
    private Integer notifyCountMax;

    @ApiModelProperty("通知邮箱")
    @Email
    private String notifyEmail;

    @ApiModelProperty("通知号码")
    @Phone
    private String notifyPhone;

    @ApiModelProperty("签署顺序")
    private Integer signSort;

    @ApiModelProperty("签署状态")
    @Enum("signStatus")
    private Integer signStatus;

    @ApiModelProperty("签署时间")
    private Date signTime;

    @ApiModelProperty("主体类型")
    @Enum("subjectType")
    private Integer subjectType;

    @ApiModelProperty("用户编号")
    private Integer userId;

}
