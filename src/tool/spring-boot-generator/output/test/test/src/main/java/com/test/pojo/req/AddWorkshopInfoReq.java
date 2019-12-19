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
public class AddWorkshopInfoReq @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("车间名称")
    @NotNull
    private String fullName;

    @ApiModelProperty("输入代码")
    @NotNull
    private String inputCode;

    @ApiModelProperty("删除标记")
    @NotNull
@NotNull
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    @NotNull
@NotNull
    private Integer lineId;

    @ApiModelProperty("操作人")
    @NotNull
@NotNull
    private Integer operator;

    @ApiModelProperty("车间简称")
    @NotNull
@NotNull
    private String shortName;

    @ApiModelProperty("工务段编号")
    @NotNull
@NotNull
    private Integer trackDivisionId;

    @ApiModelProperty("更新时间")
    @NotNull
@NotNull
    private Date updateTime;

    @ApiModelProperty("车间类型")
    @NotNull
@NotNull
    private Integer workshopType;

}