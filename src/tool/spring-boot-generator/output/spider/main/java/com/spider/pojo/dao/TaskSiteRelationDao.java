package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("任务 网站关联")
@Getter
@Setter
public class TaskSiteRelationDao {

    @ApiModelProperty("网站")
    private String domain;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("网站id")
    @NotNull
    private Integer siteId;

    @ApiModelProperty("任务id")
    @NotNull
    private Integer taskId;

    @ApiModelProperty("用户id")
    @NotNull
    private Integer userId;
}