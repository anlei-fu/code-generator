package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddTaskMainConfigReq extends PageReq {

    @ApiModelProperty("浏览器代理")
    private String agent;

    @ApiModelProperty("编码")
    private String encoding;

    @ApiModelProperty("pattern")
    private String pattern;

    @ApiModelProperty("脚本版本")
    private String scriptVersion;

    @ApiModelProperty("任务id")
    @NotNull
    private Integer taskId;

    @ApiModelProperty("超时")
    private Integer timeout;

}