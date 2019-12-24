package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddWorkTaskRecordReq extends PageReq {

    @ApiModelProperty("")
    @NotNull
    private Integer downloadSucess;

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("错误码")
    @NotNull
    private Integer exitCode;

    @ApiModelProperty("页面笑在数量")
    @NotNull
    private Integer pageDownloaded;

    @ApiModelProperty("开始时间")
    private Integer startTime;

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