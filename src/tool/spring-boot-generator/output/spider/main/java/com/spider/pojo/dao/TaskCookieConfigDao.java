package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("任务cookie配置")
@Getter
@Setter
public class TaskCookieConfigDao {

    @ApiModelProperty("创建时间")
    private Long createTime;

    @ApiModelProperty("网站id")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("失效时间")
    private Long expiration;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("key")
    private String key;

    @ApiModelProperty("主配置id")
    @NotNull
    private Integer taskConfigMainId;

    @ApiModelProperty("value")
    private String value;
}