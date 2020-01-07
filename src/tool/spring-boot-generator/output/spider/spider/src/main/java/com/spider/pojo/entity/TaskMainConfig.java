package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("任务主配置")
@Getter
@Setter
public class TaskMainConfig  {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("pattern")
    private String pattern;

    @ApiModelProperty("编码")
    private String encoding;

    @ApiModelProperty("浏览器代理")
    private String agent;

    @ApiModelProperty("超时")
    private Integer timeout;

    @ApiModelProperty("脚本版本")
    private String scriptVersion;

}