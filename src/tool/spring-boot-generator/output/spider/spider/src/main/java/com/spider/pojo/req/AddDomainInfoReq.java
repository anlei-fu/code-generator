/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 14:55:53
 */
package com.undefined.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@import

@ApiModel("")
@Getter
@Setter
public class AddDomainInfoReq {

    @ApiModelProperty("网站名字")
    private String domain;

    @ApiModelProperty("网站id")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("编码")
    @NotNull
    private String encoding;

    @ApiModelProperty("协议类型")
    @NotNull
    private String httpProtocal;

    @ApiModelProperty("最大速度")
    @NotNull
@NotNull
    private Integer maxSpeed;

    @ApiModelProperty("需要cookie")
    @NotNull
@NotNull
@NotNull
    private Boolean needCookie;

    @ApiModelProperty("备注")
    @NotNull
@NotNull
@NotNull
    private String remark;

    @ApiModelProperty("网站类型")
    @NotNull
@NotNull
@NotNull
    private String type;

}