package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("任务主配置")
@Getter
@Setter
public class TaskMainConfig  {

    @ApiModelProperty("浏览器代理")
    private String agent;

    @ApiModelProperty("编码")
    private String encoding;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("pattern")
    private String pattern;

    @ApiModelProperty("脚本版本")
    private String scriptVersion;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("超时")
    private Integer timeout;

}