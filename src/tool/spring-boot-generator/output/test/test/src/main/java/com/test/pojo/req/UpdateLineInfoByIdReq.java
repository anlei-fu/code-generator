/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 14:55:53
 */
package com.undefined.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@import

@ApiModel("")
@Getter
@Setter
public class UpdateLineInfoByIdReq {

    @ApiModelProperty("道床类别")
    private Integer ballastType;

    @ApiModelProperty("投产日期")
    private Integer commissioningDate;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("线路里程")
    private Float distance;

    @ApiModelProperty("线路全称")
    private String fullName;

    @ApiModelProperty("轨距类型")
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
    private Integer operateType;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("线路简称")
    private String shortName;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("轨道类型")
    private Integer trackType;

    @ApiModelProperty("牵引类型")
    private Integer tractionType;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("年运量(万吨)")
    private Float yearVolume;

}