package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("伤损类型")
@Getter
@Setter
public class DamageType  {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("伤损类型描述")
    private String damageDesc;

    @ApiModelProperty("伤损类型编码")
    private String damageNo;

    @ApiModelProperty("伤损类型")
    private Integer damageType;

    @ApiModelProperty("伤损类型编号")
    private Integer id;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("排序编号")
    private String sortNum;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}
