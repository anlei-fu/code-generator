package com.spider.pojo.req;

import com.spider.validate.annotation.Path;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddTaskScriptConfigReq extends PageReq {

    @ApiModelProperty("创建时间")
    private String createTime;

    @ApiModelProperty("文件")
    @Path
    private String file;

    @ApiModelProperty("这配置id")
    @NotNull
    private Integer taskConfigMainId;

    @ApiModelProperty("版本")
    @NotNull
    private Integer version;

}