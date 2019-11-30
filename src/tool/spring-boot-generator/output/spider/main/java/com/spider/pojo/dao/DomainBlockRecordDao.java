package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("屏蔽记录")
@Getter
@Setter
public class DomainBlockRecordDao {

    @ApiModelProperty("屏蔽时间")
    private Long blockTime;

    @ApiModelProperty("网站id")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("任务id")
    @NotNull
    private Integer taskId;

    @ApiModelProperty("用户id")
    @NotNull
    private Integer userId;

    @ApiModelProperty("")
    @NotNull
    private Integer workerId;
}