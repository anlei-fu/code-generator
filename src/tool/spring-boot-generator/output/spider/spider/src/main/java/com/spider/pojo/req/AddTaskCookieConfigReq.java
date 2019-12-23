package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class AddTaskCookieConfigReq  {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("网站id")
    private Integer domainId;

    @ApiModelProperty("失效时间")
    private Integer expiration;

    @ApiModelProperty("key")
    private String key;

    @ApiModelProperty("主配置id")
    private Integer taskConfigMainId;

    @ApiModelProperty("value")
    private String value;

}