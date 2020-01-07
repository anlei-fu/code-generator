package com.spider.pojo.req;

import com.spider.validate.annotation.Path;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateTaskScriptConfigRecordByIdReq extends PageReq {

    @ApiModelProperty("文件")
    @Path
    private String file;

    @ApiModelProperty("版本")
    private Integer version;

    @ApiModelProperty("操作类型")
    private Integer action;

}