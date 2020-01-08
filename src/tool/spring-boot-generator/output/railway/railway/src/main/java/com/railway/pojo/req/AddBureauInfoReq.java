package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddBureauInfoReq extends PageReq {

    @ApiModelProperty("铁路局编码")
    @NotNull
    private String bureauCode;

    @ApiModelProperty("铁路局名称")
    @NotNull
    private String bureauName;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

}