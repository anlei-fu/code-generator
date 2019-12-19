package com.test.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddDamageTypeReq @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("伤损类型描述")
    private String damageDesc;

    @ApiModelProperty("伤损类型编码")
    private String damageNo;

    @ApiModelProperty("伤损类型")
    private Integer damageType;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("排序编号")
    @NotNull
    private String sortNum;

    @ApiModelProperty("状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

}