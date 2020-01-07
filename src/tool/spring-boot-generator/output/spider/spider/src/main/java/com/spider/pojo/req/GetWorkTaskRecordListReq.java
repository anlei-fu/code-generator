package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetWorkTaskRecordListReq extends PageReq {

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("wroker id")
    private Integer workerId;

    @ApiModelProperty("主配置id")
    private Integer taskMainConfigId;

    @ApiModelProperty("页面笑在数量 min")
    private Integer pageDownloadedMin;

    @ApiModelProperty("页面笑在数量 max")
    private Integer pageDownloadedMax;

    @ApiModelProperty("")
    private Integer downloadSucess;

    @ApiModelProperty("成功提取数量")
    private Integer success;

    @ApiModelProperty("错误码")
    private Integer exitCode;

    @ApiModelProperty("开始时间")
    private Integer startTime;

    @ApiModelProperty("结束时间")
    private Integer endTime;

}