package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("网站提取模型")
@Getter
@Setter
public class DomainModel  {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("domainid")
    private Integer domainId;

    @ApiModelProperty("模型")
    private String model;

}