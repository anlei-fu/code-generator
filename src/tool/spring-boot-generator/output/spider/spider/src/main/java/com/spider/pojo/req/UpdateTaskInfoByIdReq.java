package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateTaskInfoByIdReq  {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("任务等级")
    private Integer level;

    @ApiModelProperty("主配置id")
    private Integer mainConfigId;

    @ApiModelProperty("queue id")
    private String queueId;

    @ApiModelProperty("任务状态")
    private Integer status;

    @ApiModelProperty("topic id")
    private Integer topicId;

    @ApiModelProperty("用户id")
    private Integer userId;

}