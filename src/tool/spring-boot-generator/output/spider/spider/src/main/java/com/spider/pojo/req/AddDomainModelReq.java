package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddDomainModelReq extends PageReq {

    @ApiModelProperty("domainid")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("模型")
    private String model;

    @ApiModelProperty("任务id")
    @NotNull
    private Integer taskId;

}