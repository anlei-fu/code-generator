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

@ApiModel("车站信息")
@Getter
@Setter
public class StationInfo {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("车站全称")
    private String fullName;

    @ApiModelProperty("车站编号")
    private Integer id;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("技术作业别")
    private Integer jobType;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("车站简称")
    private String shortName;

    @ApiModelProperty("车站编码")
    private String stationCode;

    @ApiModelProperty("车站等级")
    private Integer stationGrade;

    @ApiModelProperty("车站类型")
    private Integer stationType;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("岔道数量")
    private Integer ternoutNum;

    @ApiModelProperty("股道数量")
    private Integer thighTrackNum;

    @ApiModelProperty("公务段编号")
    private Integer trackDivisionId;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}