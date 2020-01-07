package com.spider.pojo.req;

import com.spider.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetTaskInfoListReq extends PageReq {

    @ApiModelProperty("用户id")
    private Integer userId;

    @ApiModelProperty("主配置id")
    private Integer mainConfigId;

    @ApiModelProperty("任务等级")
    @Enum("level")
    private Integer level;

    @ApiModelProperty("任务状态")
    @Enum("status")
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