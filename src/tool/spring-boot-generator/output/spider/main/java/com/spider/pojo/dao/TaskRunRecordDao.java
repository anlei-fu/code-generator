package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("任务运行记录")
@Getter
@Setter
public class TaskRunRecordDao {

    @ApiModelProperty("结束时间")
    private Long endTime;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("网页下载数量")
    private Integer pageDownloaded;

    @ApiModelProperty("开始时间")
    private Long startTime;

    @ApiModelProperty("成功提取数量")
    private Integer success;

    @ApiModelProperty("任务id")
    @NotNull
    private Integer taskId;

    @ApiModelProperty("参与worker数量")
    private Integer workerJoined;
}