package com.test.pojo.entity;

import com.test.pojo.entity.StationInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class UpdateStationInfoByIdReq @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("车站全称")
    private String fullName;

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
    @NotNull
    private Integer trackDivisionId;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

}