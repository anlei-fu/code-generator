package com.test.pojo.entity;

import com.test.pojo.entity.DamageDealUser;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("伤损处理人员")
@Getter
@Setter
public class DamageDealUser @extends {

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

    @ApiModelProperty("人员编号")
    private Integer id;

    @ApiModelProperty("身份证")
    private String idCardNo;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("姓名")
    @NotNull
    private String name;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("职位编号")
    @NotNull
    private Integer positionId;

    @ApiModelProperty("探伤资质复审日期")
    @NotNull
    private Integer qualificationAuditDate;

    @ApiModelProperty("探伤资质发证日期")
    @NotNull
    private Integer qualificationGainDate;

    @ApiModelProperty("探伤资质等级")
    @NotNull
    private Integer qualificationGrade;

    @ApiModelProperty("探伤资质截止日期")
    @NotNull
    private Integer qualificationInvalidDate;

    @ApiModelProperty("探伤资质有效期")
    @NotNull
    private Integer qualificationValidTime;

    @ApiModelProperty("备注")
    @NotNull
    private String remark;

    @ApiModelProperty("状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("技术类别")
    @NotNull
    private Integer tecCategory;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

    @ApiModelProperty("工区编号")
    @NotNull
    private Integer workareaId;

}