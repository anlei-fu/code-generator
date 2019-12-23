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
public class GetUserContactInfoListReq @extends {

    @ApiModelProperty("用户编号")
    private Integer userId;

    @ApiModelProperty("联系电话")
    private String contractPhone;

    @ApiModelProperty("联系邮箱")
    private String contractEmail;

}