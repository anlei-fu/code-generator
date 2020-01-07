package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddTaskCookieConfigReq extends PageReq {

    @ApiModelProperty("主配置id")
    @NotNull
    private Integer taskConfigMainId;

    @ApiModelProperty("网站id")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("key")
    private String key;

    @ApiModelProperty("value")
    private String value;

    @ApiModelProperty("失效时间")
    private Integer expiration;

    @ApiModelProperty("创建时间")
    private Integer createTime;

}