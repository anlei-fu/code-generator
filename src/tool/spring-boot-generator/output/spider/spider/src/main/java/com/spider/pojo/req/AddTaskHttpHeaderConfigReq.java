package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddTaskHttpHeaderConfigReq extends PageReq {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("key")
    private String key;

    @ApiModelProperty("主配置id")
    @NotNull
    private String taskConfigMainId;

    @ApiModelProperty("value")
    private String value;

}