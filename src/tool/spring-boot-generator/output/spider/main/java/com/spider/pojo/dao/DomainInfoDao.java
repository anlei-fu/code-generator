package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("domain信息")
@Getter
@Setter
public class DomainInfoDao {

    @ApiModelProperty("网站名字")
    private String domain;

    @ApiModelProperty("网站id")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("编码")
    private String encoding;

    @ApiModelProperty("协议类型")
    private String httpProtocal;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("最大速度")
    @NotNull
    private Integer maxSpeed;

    @ApiModelProperty("需要cookie")
    @NotNull
    private Boolean needCookie;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("网站类型")
    private String type;
}