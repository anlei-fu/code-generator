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

@ApiModel("")
@Getter
@Setter
public class AddTaskInfoReq {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("任务等级")
    @NotNull
    private Integer level;

    @ApiModelProperty("主配置id")
    @NotNull
@NotNull
    private Integer mainConfigId;

    @ApiModelProperty("queue id")
    @NotNull
@NotNull
    private String queueId;

    @ApiModelProperty("任务状态")
    @NotNull
@NotNull
@NotNull
    private Integer status;

    @ApiModelProperty("topic id")
    @NotNull
@NotNull
@NotNull
    private Integer topicId;

    @ApiModelProperty("用户id")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Integer userId;

}