package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("worker 运行记录")
@Getter
@Setter
public class WorkerRunRecordDao {

    @ApiModelProperty("结束时间")
    private Long endTime;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("开始时间")
    private Long startTime;
}