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

@ApiModel("worker 运行记录")
@Getter
@Setter
public class WorkTaskRecord {

    @ApiModelProperty("")
    @NotNull
    private Integer downloadSucess;

    @ApiModelProperty("结束时间")
    @NotNull
    private Integer endTime;

    @ApiModelProperty("错误码")
    @NotNull
@NotNull
    private Integer exitCode;

    @ApiModelProperty("编号")
    @NotNull
@NotNull
    private Integer id;

    @ApiModelProperty("页面笑在数量")
    @NotNull
@NotNull
@NotNull
    private Integer pageDownloaded;

    @ApiModelProperty("开始时间")
    @NotNull
@NotNull
@NotNull
    private Integer startTime;

    @ApiModelProperty("成功提取数量")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Integer success;

    @ApiModelProperty("任务id")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private Integer taskId;

    @ApiModelProperty("主配置id")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private Integer taskMainConfigId;

    @ApiModelProperty("wroker id")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private Integer workerId;

}