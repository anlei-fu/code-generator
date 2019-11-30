package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("网站提取模型")
@Getter
@Setter
public class DomainModelDao {

    @ApiModelProperty("domainid")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("模型")
    private String model;

    @ApiModelProperty("任务id")
    @NotNull
    private Integer taskId;
}