package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("任务 网站关联")
@Getter
@Setter
public class TaskSiteRelation  {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("网站id")
    private Integer siteId;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("用户id")
    private Integer userId;

    @ApiModelProperty("网站")
    private String domain;

}