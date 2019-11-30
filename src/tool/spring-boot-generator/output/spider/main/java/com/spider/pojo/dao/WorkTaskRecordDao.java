package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("worker 运行记录")
@Getter
@Setter
public class WorkTaskRecordDao {

    @ApiModelProperty("")
    @NotNull
    private Integer downloadSucess;

    @ApiModelProperty("结束时间")
    private Long endTime;

    @ApiModelProperty("错误码")
    @NotNull
    private Integer exitCode;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("页面笑在数量")
    @NotNull
    private Integer pageDownloaded;

    @ApiModelProperty("开始时间")
    private Long startTime;

    @ApiModelProperty("成功提取数量")
    @NotNull
    private Integer success;

    @ApiModelProperty("任务id")
    @NotNull
    private Integer taskId;

    @ApiModelProperty("主配置id")
    @NotNull
    private Integer taskMainConfigId;

    @ApiModelProperty("wroker id")
    @NotNull
    private Integer workerId;
}