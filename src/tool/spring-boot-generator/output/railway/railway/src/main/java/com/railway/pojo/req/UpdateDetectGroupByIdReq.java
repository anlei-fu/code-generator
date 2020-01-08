package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateDetectGroupByIdReq extends PageReq {

    @ApiModelProperty("班组名称")
    private String groupName;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("班组组长")
    private Integer leaderId;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

}