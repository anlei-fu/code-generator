package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("任务信息")
@Getter
@Setter
public class TaskInfoDao {

    @ApiModelProperty("创建时间")
    private Long createTime;

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("结束时间")
    private Long endTime;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("任务等级")
    @NotNull
    private Integer level;

    @ApiModelProperty("主配置id")
    @NotNull
    private Integer mainConfigId;

    @ApiModelProperty("queue id")
    private String queueId;

    @ApiModelProperty("任务状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("topic id")
    private Integer topicId;

    @ApiModelProperty("用户id")
    @NotNull
    private Integer userId;
}