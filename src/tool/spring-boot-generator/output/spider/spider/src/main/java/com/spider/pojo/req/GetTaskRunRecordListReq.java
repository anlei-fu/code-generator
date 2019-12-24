package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetTaskRunRecordListReq extends PageReq {

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("网页下载数量 min")
    private Integer pageDownloadedMin;

    @ApiModelProperty("网页下载数量 max")
    private Integer pageDownloadedMax;

    @ApiModelProperty("开始时间")
    private Integer startTime;

    @ApiModelProperty("成功提取数量")
    private Integer success;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("参与worker数量")
    private Integer workerJoined;

}