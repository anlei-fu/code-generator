package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddDamageTypeReq extends PageReq {

    @ApiModelProperty("伤损类型描述")
    private String damageDesc;

    @ApiModelProperty("伤损类型编码")
    private String damageNo;

    @ApiModelProperty("伤损类型")
    @Enum("damageType")
    private Integer damageType;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("排序编号")
    private String sortNum;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

}