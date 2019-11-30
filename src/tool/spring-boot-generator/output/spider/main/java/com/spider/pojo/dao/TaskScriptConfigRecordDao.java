package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("任务脚本更改配置")
@Getter
@Setter
public class TaskScriptConfigRecordDao {

    @ApiModelProperty("操作类型")
    @NotNull
    private Integer action;

    @ApiModelProperty("文件")
    private String file;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("版本")
    @NotNull
    private Integer version;
}