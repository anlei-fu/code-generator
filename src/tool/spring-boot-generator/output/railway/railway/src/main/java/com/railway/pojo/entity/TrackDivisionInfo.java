package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("工务段信息")
@Getter
@Setter
public class TrackDivisionInfo  {

    @ApiModelProperty("铁路局编号")
    private Integer bureauId;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("工务段名称")
    private String fullName;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("工务段简称")
    private String shortName;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}
