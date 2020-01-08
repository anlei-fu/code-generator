package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateDivisionUserByIdReq extends PageReq {

    @ApiModelProperty("工务段id")
    private Integer divisionId;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("用户id")
    private Integer userId;

}