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
public class AddTaskScriptConfigRecordReq extends PageReq {

    @ApiModelProperty("操作类型")
    @NotNull
    private Integer action;

    @ApiModelProperty("文件")
    @Path
    private String file;

    @ApiModelProperty("版本")
    @NotNull
    private Integer version;

}