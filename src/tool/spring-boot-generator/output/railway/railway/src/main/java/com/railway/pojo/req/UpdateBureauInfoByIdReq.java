package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateBureauInfoByIdReq extends PageReq {

    @ApiModelProperty("铁路局编码")
    private String bureauCode;

    @ApiModelProperty("铁路局名称")
    private String bureauName;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

}