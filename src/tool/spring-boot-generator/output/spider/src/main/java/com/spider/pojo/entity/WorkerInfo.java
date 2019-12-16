package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@ApiModel("worker info")
@Getter
@Setter
public class WorkerInfo {

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("ip")
    private String ip;

    @ApiModelProperty("加入时间")
    private Integer joinTime;

    @ApiModelProperty("最后运行时间")
    private Integer lastRunTime;

}