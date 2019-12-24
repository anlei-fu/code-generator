package com.spider.pojo.req;

import com.spider.validate.annotation.Url;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateTaskSiteRelationByIdReq extends PageReq {

    @ApiModelProperty("网站")
    @Url
    private String domain;

    @ApiModelProperty("网站id")
    private Integer siteId;

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("用户id")
    private Integer userId;

}