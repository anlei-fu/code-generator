package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("线路工区")
@Getter
@Setter
public class WorkareaInfo  {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("工区名称")
    private String fullName;

    @ApiModelProperty("工区编号")
    private Integer id;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("工区简称")
    private String shortName;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("线路车间编号")
    private Integer workshopId;

}
