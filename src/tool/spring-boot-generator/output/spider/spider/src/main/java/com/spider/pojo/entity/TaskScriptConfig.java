package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("任务脚本配置")
@Getter
@Setter
public class TaskScriptConfig  {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("这配置id")
    private Integer taskConfigMainId;

    @ApiModelProperty("文件")
    private String file;

    @ApiModelProperty("版本")
    private Integer version;

    @ApiModelProperty("创建时间")
    private String createTime;

}