package com.test.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class AddBureauLineOrderReq @extends {

    @ApiModelProperty("铁路局编号")
    private Integer bureauId;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("排序编号")
    private String sortNum;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}