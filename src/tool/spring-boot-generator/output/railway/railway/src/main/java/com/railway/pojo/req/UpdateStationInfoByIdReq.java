package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateStationInfoByIdReq extends PageReq {

    @ApiModelProperty("车站全称")
    private String fullName;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("技术作业别")
    @Enum("jobType")
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
    @Enum("stationType")
    private Integer stationType;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("岔道数量")
    private Integer ternoutNum;

    @ApiModelProperty("股道数量")
    private Integer thighTrackNum;

    @ApiModelProperty("公务段编号")
    private Integer trackDivisionId;

}