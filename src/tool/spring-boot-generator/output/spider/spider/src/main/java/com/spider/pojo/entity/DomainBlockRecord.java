package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("屏蔽记录")
@Getter
@Setter
public class DomainBlockRecord  {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("网站id")
    private Integer domainId;

    @ApiModelProperty("")
    private Integer workerId;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("用户id")
    private Integer userId;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("屏蔽时间")
    private Integer blockTime;

}