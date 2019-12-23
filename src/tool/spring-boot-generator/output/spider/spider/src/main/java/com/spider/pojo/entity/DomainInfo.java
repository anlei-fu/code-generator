package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("domain信息")
@Getter
@Setter
public class DomainInfo  {

    @ApiModelProperty("网站名字")
    private String domain;

    @ApiModelProperty("网站id")
    private Integer domainId;

    @ApiModelProperty("编码")
    private String encoding;

    @ApiModelProperty("协议类型")
    private String httpProtocal;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("最大速度")
    private Integer maxSpeed;

    @ApiModelProperty("需要cookie")
    private Boolean needCookie;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("网站类型")
    private String type;

}