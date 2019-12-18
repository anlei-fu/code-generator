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
public class AddDamageDealUserReq {

    @ApiModelProperty("出生日期")
    private Integer birthday;

    @ApiModelProperty("联系电话")
    private String contact;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("处理类别")
    private Integer dealType;

    @ApiModelProperty("文化程度")
    private Integer eduDegree;

    @ApiModelProperty("性别")
    private Integer gender;

    @ApiModelProperty("职称获得时间")
    private Integer gradeGainDate;

    @ApiModelProperty("职称编号")
    private String gradeId;

    @ApiModelProperty("身份证")
    private String idCardNo;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("姓名")
    private String name;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("职位编号")
    private Integer positionId;

    @ApiModelProperty("探伤资质复审日期")
    private Integer qualificationAuditDate;

    @ApiModelProperty("探伤资质发证日期")
    private Integer qualificationGainDate;

    @ApiModelProperty("探伤资质等级")
    private Integer qualificationGrade;

    @ApiModelProperty("探伤资质截止日期")
    private Integer qualificationInvalidDate;

    @ApiModelProperty("探伤资质有效期")
    private Integer qualificationValidTime;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("技术类别")
    private Integer tecCategory;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("工区编号")
    private Integer workareaId;

}