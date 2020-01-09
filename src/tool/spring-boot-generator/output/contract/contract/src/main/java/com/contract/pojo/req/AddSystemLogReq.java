package com.contract.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class AddSystemLogReq extends PageReq {

    @ApiModelProperty("日志内容")
    private String content;

    @ApiModelProperty("模块名称")
    private String module;

    @ApiModelProperty("日志摘要")
    private String summary;

}
