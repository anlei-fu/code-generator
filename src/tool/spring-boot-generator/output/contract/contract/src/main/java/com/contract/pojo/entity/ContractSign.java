package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class ContractSign  {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("签约编号")
    private Integer id;

    @ApiModelProperty("需要付费")
    private Integer needPay;

    @ApiModelProperty("通知次数")
    private Integer notifyCount;

    @ApiModelProperty("通知邮箱")
    private String notifyEmail;

    @ApiModelProperty("通知号码")
    private String notifyPhone;

    @ApiModelProperty("私信内容")
    private String shortMsg;

    @ApiModelProperty("签署IP")
    private String signIp;

    @ApiModelProperty("签署人")
    private String signPerson;

    @ApiModelProperty("签署顺序")
    private Integer signSort;

    @ApiModelProperty("签署状态")
    private Integer signStatus;

    @ApiModelProperty("签署主体")
    private String signSubject;

    @ApiModelProperty("签署时间")
    private Date signTime;

    @ApiModelProperty("签署URL")
    private String signUrl;

    @ApiModelProperty("主体类型")
    private Integer subjectType;

    @ApiModelProperty("用户编号")
    private Integer userId;

}
