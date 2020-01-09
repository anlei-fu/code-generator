package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("")
@Getter
@Setter
public class AddWorkareaInfoReq extends PageReq {

    @ApiModelProperty("工区名称")
    @NotNull
    private String fullName;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("工区简称")
    @NotNull
    private String shortName;

    @ApiModelProperty("线路车间编号")
    @NotNull
    private Integer workshopId;

}
