package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("任务运行记录")
@Getter
@Setter
public class TaskRunRecord  {

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("网页下载数量")
    private Integer pageDownloaded;

    @ApiModelProperty("开始时间")
    private Integer startTime;

    @ApiModelProperty("成功提取数量")
    private Integer success;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("参与worker数量")
    private Integer workerJoined;

}