package com.test.pojo.entity;

import com.test.pojo.entity.LineInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("线路信息")
@Getter
@Setter
public class LineInfo @extends {

    @ApiModelProperty("道床类别")
    private Integer ballastType;

    @ApiModelProperty("投产日期")
    private Integer commissioningDate;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("线路里程")
    private Float distance;

    @ApiModelProperty("线路全称")
    @NotNull
    private String fullName;

    @ApiModelProperty("轨距类型")
    @NotNull
    private Integer gaugeType;

    @ApiModelProperty("线路等级")
    @NotNull
    private Integer grade;

    @ApiModelProperty("线路编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("输入代码")
    @NotNull
@NotNull
    private String inputCode;

    @ApiModelProperty("删除标记")
    @NotNull
@NotNull
@NotNull
    private Integer isDelete;

    @ApiModelProperty("限制坡度")
    @NotNull
@NotNull
@NotNull
    private Float limitGrad;

    @ApiModelProperty("线路干支")
    @NotNull
@NotNull
@NotNull
    private Integer lineBranches;

    @ApiModelProperty("线路编码")
    @NotNull
@NotNull
@NotNull
@NotNull
    private String lineCode;

    @ApiModelProperty("正线数目")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Integer lineNum;

    @ApiModelProperty("最小曲线半径")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Float minRadiusCurve;

    @ApiModelProperty("线路性质")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Integer nature;

    @ApiModelProperty("运营类型")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Integer operateType;

    @ApiModelProperty("操作人")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Integer operator;

    @ApiModelProperty("线路简称")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private String shortName;

    @ApiModelProperty("状态")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private Integer status;

    @ApiModelProperty("轨道类型")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private Integer trackType;

    @ApiModelProperty("牵引类型")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private Integer tractionType;

    @ApiModelProperty("更新时间")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private Date updateTime;

    @ApiModelProperty("年运量(万吨)")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private Float yearVolume;

}