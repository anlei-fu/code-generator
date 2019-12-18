/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 14:55:53
 */
package com.undefined.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@import

@ApiModel("任务运行记录")
@Getter
@Setter
public class TaskRunRecord {

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
    @NotNull
    private Integer taskId;

    @ApiModelProperty("参与worker数量")
    @NotNull
    private Integer workerJoined;

}