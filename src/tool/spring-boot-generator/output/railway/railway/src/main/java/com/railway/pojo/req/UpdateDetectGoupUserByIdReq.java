package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateDetectGoupUserByIdReq extends PageReq {

    @ApiModelProperty("班组编号")
    private Integer groupId;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("成员编号")
    private Integer memberId;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

}