package com.spider.pojo.req;

import com.spider.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddTaskInfoReq extends PageReq {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("任务等级")
    @NotNull
    @Enum("level")
    private Integer level;

    @ApiModelProperty("主配置id")
    @NotNull
    private Integer mainConfigId;

    @ApiModelProperty("queue id")
    private String queueId;

    @ApiModelProperty("任务状态")
    @NotNull
    @Enum("status")
    private Integer status;

    @ApiModelProperty("topic id")
    private Integer topicId;

    @ApiModelProperty("用户id")
    @NotNull
    private Integer userId;

}