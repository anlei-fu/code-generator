package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("worker 运行记录")
@Getter
@Setter
public class WorkTaskRecord  {

    @ApiModelProperty("")
    private Integer downloadSucess;

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("错误码")
    private Integer exitCode;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("页面笑在数量")
    private Integer pageDownloaded;

    @ApiModelProperty("开始时间")
    private Integer startTime;

    @ApiModelProperty("成功提取数量")
    private Integer success;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("主配置id")
    private Integer taskMainConfigId;

    @ApiModelProperty("wroker id")
    private Integer workerId;

}