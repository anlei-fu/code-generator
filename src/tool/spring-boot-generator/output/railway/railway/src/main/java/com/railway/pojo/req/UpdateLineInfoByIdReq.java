package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class UpdateLineInfoByIdReq extends PageReq {

    @ApiModelProperty("道床类别")
    @Enum("ballastType")
    private Integer ballastType;

    @ApiModelProperty("投产日期")
    private Date commissioningDate;

    @ApiModelProperty("线路里程")
    private Float distance;

    @ApiModelProperty("线路全称")
    private String fullName;

    @ApiModelProperty("轨距类型")
    @Enum("gaugeType")
    private Integer gaugeType;

    @ApiModelProperty("线路等级")
    private Integer grade;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("限制坡度")
    private Float limitGrad;

    @ApiModelProperty("线路干支")
    private Integer lineBranches;

    @ApiModelProperty("线路编码")
    private String lineCode;

    @ApiModelProperty("正线数目")
    private Integer lineNum;

    @ApiModelProperty("最小曲线半径")
    private Float minRadiusCurve;

    @ApiModelProperty("线路性质")
    private Integer nature;

    @ApiModelProperty("运营类型")
    @Enum("operateType")
    private Integer operateType;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("线路简称")
    private String shortName;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("轨道类型")
    @Enum("trackType")
    private Integer trackType;

    @ApiModelProperty("牵引类型")
    @Enum("tractionType")
    private Integer tractionType;

    @ApiModelProperty("年运量(万吨)")
    private Float yearVolume;

}