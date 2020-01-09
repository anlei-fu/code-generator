package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("伤损单")
@Getter
@Setter
public class DamageOrder  {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("伤损单号")
    private String orderNo;

    @ApiModelProperty("提交人")
    private Integer submitStaff;

    @ApiModelProperty("提交时间")
    private Date submitTime;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("探伤工区")
    private Integer workareaId;

}
