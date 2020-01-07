package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetTaskScriptConfigListReq extends PageReq {

    @ApiModelProperty("这配置id")
    private Integer taskConfigMainId;

    @ApiModelProperty("版本")
    private Integer version;

    @ApiModelProperty("创建时间")
    private String createTime;

}