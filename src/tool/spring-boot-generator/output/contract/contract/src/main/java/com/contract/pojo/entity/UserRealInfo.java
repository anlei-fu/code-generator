package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class UserRealInfo  {

    @ApiModelProperty("身份证号")
    private String idCardNo;

    @ApiModelProperty("身份证人像照")
    private String idCardPicBack;

    @ApiModelProperty("身份证国徽照")
    private String idCardPicFront;

    @ApiModelProperty("身份证手持照")
    private String idCardPicHand;

    @ApiModelProperty("用户姓名")
    private String realName;

    @ApiModelProperty("用户编号")
    private Integer userId;

    @ApiModelProperty("认证完成时间")
    private Date verifyEndTime;

    @ApiModelProperty("认证开始时间")
    private Date verifyStartTime;

}
