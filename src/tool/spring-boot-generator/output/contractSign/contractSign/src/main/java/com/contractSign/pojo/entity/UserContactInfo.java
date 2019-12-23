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
public class UserContactInfo @extends {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("用户编号")
    private Integer userId;

    @ApiModelProperty("联系人")
    private String contractName;

    @ApiModelProperty("联系电话")
    private String contractPhone;

    @ApiModelProperty("联系邮箱")
    private String contractEmail;

}