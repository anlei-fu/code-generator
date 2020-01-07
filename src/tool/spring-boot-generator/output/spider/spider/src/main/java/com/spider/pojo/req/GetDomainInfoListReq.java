package com.spider.pojo.req;

import com.spider.validate.annotation.Url;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetDomainInfoListReq extends PageReq {

    @ApiModelProperty("网站id")
    private Integer domainId;

    @ApiModelProperty("网站名字")
    @Url
    private String domain;

    @ApiModelProperty("最大速度")
    private Integer maxSpeed;

    @ApiModelProperty("需要cookie")
    private Boolean needCookie;

    @ApiModelProperty("编码")
    private String encoding;

    @ApiModelProperty("协议类型")
    private String httpProtocal;

    @ApiModelProperty("网站类型")
    private String type;

}