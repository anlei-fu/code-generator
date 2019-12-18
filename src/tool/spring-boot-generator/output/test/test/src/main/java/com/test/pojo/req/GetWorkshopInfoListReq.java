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
public class GetWorkshopInfoListReq {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("车间名称")
    private String fullName;

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