package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("worker info")
@Getter
@Setter
public class WorkerInfoDao {

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("ip")
    @NotNull
    private String ip;

    @ApiModelProperty("加入时间")
    private Long joinTime;

    @ApiModelProperty("最后运行时间")
    private Long lastRunTime;
}