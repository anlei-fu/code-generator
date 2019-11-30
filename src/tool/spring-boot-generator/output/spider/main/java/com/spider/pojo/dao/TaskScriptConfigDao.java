package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("任务脚本配置")
@Getter
@Setter
public class TaskScriptConfigDao {

    @ApiModelProperty("创建时间")
    private String createTime;

    @ApiModelProperty("文件")
    private String file;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("这配置id")
    @NotNull
    private Integer taskConfigMainId;

    @ApiModelProperty("版本")
    @NotNull
    private Integer version;
}