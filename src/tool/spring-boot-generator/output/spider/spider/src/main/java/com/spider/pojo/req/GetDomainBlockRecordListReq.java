package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetDomainBlockRecordListReq extends PageReq {

    @ApiModelProperty("屏蔽时间")
    private Integer blockTime;

    @ApiModelProperty("网站id")
    private Integer domainId;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("用户id")
    private Integer userId;

    @ApiModelProperty("")
    private Integer workerId;

}