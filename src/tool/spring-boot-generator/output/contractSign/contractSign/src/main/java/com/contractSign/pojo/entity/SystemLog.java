package com.contractSign.pojo.entity;

@packages
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
@packages


@ApiModel("")
@Getter
@Setter
public class SystemLog @extends {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("模块名称")
    private String module;

    @ApiModelProperty("日志摘要")
    private String summary;

    @ApiModelProperty("日志内容")
    private String content;

    @ApiModelProperty("创建时间")
    private Date createTime;

}