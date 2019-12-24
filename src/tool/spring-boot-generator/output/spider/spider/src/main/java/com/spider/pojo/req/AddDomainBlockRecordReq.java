package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddDomainBlockRecordReq extends PageReq {

    @ApiModelProperty("屏蔽时间")
    private Integer blockTime;

    @ApiModelProperty("网站id")
    @NotNull
    private Integer domainId;

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