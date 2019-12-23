package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateWorkTaskRecordByIdReq  {

    @ApiModelProperty("")
    private Integer downloadSucess;

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("错误码")
    private Integer exitCode;

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