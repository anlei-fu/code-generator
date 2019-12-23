package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateTaskScriptConfigRecordByIdReq  {

    @ApiModelProperty("操作类型")
    private Integer action;

    @ApiModelProperty("文件")
    private String file;

    @ApiModelProperty("版本")
    private Integer version;

}