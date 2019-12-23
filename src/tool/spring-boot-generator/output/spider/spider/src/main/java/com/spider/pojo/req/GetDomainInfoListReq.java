package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetDomainInfoListReq  {

    @ApiModelProperty("网站名字")
    private String domain;

    @ApiModelProperty("网站id")
    private Integer domainId;

    @ApiModelProperty("编码")
    private String encoding;

    @ApiModelProperty("协议类型")
    private String httpProtocal;

    @ApiModelProperty("最大速度")
    private Integer maxSpeed;

    @ApiModelProperty("需要cookie")
    private Boolean needCookie;

    @ApiModelProperty("网站类型")
    private String type;

}