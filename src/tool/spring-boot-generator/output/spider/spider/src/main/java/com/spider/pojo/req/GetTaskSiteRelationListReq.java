package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetTaskSiteRelationListReq  {

    @ApiModelProperty("网站")
    private String domain;

    @ApiModelProperty("网站id")
    private Integer siteId;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("用户id")
    private Integer userId;

}