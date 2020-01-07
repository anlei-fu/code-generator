package com.spider.pojo.req;

import com.spider.validate.annotation.Url;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddDomainInfoReq extends PageReq {

    @ApiModelProperty("网站id")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("网站名字")
    @Url
    private String domain;

    @ApiModelProperty("最大速度")
    @NotNull
    private Integer maxSpeed;

    @ApiModelProperty("需要cookie")
    @NotNull
    private Boolean needCookie;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("编码")
    private String encoding;

    @ApiModelProperty("协议类型")
    private String httpProtocal;

    @ApiModelProperty("网站类型")
    private String type;

}