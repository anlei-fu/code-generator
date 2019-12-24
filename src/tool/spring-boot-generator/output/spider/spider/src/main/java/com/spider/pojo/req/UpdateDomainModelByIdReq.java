package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateDomainModelByIdReq extends PageReq {

    @ApiModelProperty("domainid")
    private Integer domainId;

    @ApiModelProperty("模型")
    private String model;

    @ApiModelProperty("任务id")
    private Integer taskId;

}