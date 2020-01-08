package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateWorkareaInfoByIdReq extends PageReq {

    @ApiModelProperty("工区名称")
    private String fullName;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("工区简称")
    private String shortName;

    @ApiModelProperty("线路车间编号")
    private Integer workshopId;

}