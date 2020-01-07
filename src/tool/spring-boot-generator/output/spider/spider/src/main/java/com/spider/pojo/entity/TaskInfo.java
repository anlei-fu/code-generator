package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("任务信息")
@Getter
@Setter
public class TaskInfo  {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("用户id")
    private Integer userId;

    @ApiModelProperty("主配置id")
    private Integer mainConfigId;

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("任务等级")
    private Integer level;

    @ApiModelProperty("任务状态")
    private Integer status;

    @ApiModelProperty("queue id")
    private String queueId;

    @ApiModelProperty("topic id")
    private Integer topicId;

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("结束时间")
    private Integer endTime;

}