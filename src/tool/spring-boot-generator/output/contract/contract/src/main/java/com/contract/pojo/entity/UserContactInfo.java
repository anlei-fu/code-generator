package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class UserContactInfo  {

    @ApiModelProperty("联系邮箱")
    private String contractEmail;

    @ApiModelProperty("联系人")
    private String contractName;

    @ApiModelProperty("联系电话")
    private String contractPhone;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("用户编号")
    private Integer userId;

}
