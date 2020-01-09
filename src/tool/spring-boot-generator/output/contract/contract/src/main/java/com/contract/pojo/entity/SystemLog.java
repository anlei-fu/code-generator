package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class SystemLog  {

    @ApiModelProperty("日志内容")
    private String content;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("模块名称")
    private String module;

    @ApiModelProperty("日志摘要")
    private String summary;

}
