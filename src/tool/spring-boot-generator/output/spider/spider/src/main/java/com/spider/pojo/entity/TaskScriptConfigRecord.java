package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("任务脚本更改配置")
@Getter
@Setter
public class TaskScriptConfigRecord  {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("文件")
    private String file;

    @ApiModelProperty("版本")
    private Integer version;

    @ApiModelProperty("操作类型")
    private Integer action;

}