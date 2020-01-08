package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("线路车间信息")
@Getter
@Setter
public class WorkshopInfo  {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("车间名称")
    private String fullName;

    @ApiModelProperty("车间编号")
    private Integer id;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("车间简称")
    private String shortName;

    @ApiModelProperty("工务段编号")
    private Integer trackDivisionId;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("车间类型")
    private Integer workshopType;

}