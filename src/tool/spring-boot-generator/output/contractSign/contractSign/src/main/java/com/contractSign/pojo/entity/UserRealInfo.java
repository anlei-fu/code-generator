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
public class UserRealInfo @extends {

    @ApiModelProperty("用户编号")
    private Integer userId;

    @ApiModelProperty("用户姓名")
    private String realName;

    @ApiModelProperty("身份证号")
    private String idCardNo;

    @ApiModelProperty("身份证国徽照")
    private String idCardPicFront;

    @ApiModelProperty("身份证人像照")
    private String idCardPicBack;

    @ApiModelProperty("身份证手持照")
    private String idCardPicHand;

    @ApiModelProperty("认证开始时间")
    private Date verifyStartTime;

    @ApiModelProperty("认证完成时间")
    private Date verifyEndTime;

}