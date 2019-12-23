package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("任务cookie配置")
@Getter
@Setter
public class TaskCookieConfig  {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("网站id")
    private Integer domainId;

    @ApiModelProperty("失效时间")
    private Integer expiration;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("key")
    private String key;

    @ApiModelProperty("主配置id")
    private Integer taskConfigMainId;

    @ApiModelProperty("value")
    private String value;

}