package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("任务 header 配置")
@Getter
@Setter
public class TaskHttpHeaderConfig  {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("key")
    private String key;

    @ApiModelProperty("主配置id")
    private String taskConfigMainId;

    @ApiModelProperty("value")
    private String value;

}