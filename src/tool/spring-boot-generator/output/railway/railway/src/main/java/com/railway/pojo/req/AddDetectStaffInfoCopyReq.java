package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;

@ApiModel("")
@Getter
@Setter
public class AddDetectStaffInfoCopyReq extends PageReq {

    @ApiModelProperty("出生日期")
    private Date birthday;

    @ApiModelProperty("联系电话")
    private String contact;

    @ApiModelProperty("文化程度")
    private Integer eduDegree;

    @ApiModelProperty("性别")
    @Enum("gender")
    private Integer gender;

    @ApiModelProperty("职称获得时间")
    private Date gradeGainDate;

    @ApiModelProperty("职称编号")
    private Integer gradeId;

    @ApiModelProperty("身份证")
    private String idCardNo;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("姓名")
    private String name;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("职位编号")
    private Integer positionId;

    @ApiModelProperty("探伤资质复审日期")
    private Date qualificationAuditDate;

    @ApiModelProperty("探伤资质发证日期")
    private Date qualificationGainDate;

    @ApiModelProperty("探伤资质等级")
    private Integer qualificationGrade;

    @ApiModelProperty("探伤资质截止日期")
    private Date qualificationInvalidDate;

    @ApiModelProperty("探伤资质有效期")
    private Integer qualificationValidTime;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("技术类别")
    private Integer tecCategory;

    @ApiModelProperty("探伤工区编号")
    private Integer workareaId;

}
