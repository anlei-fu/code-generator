package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("探伤管界")
@Getter
@Setter
public class DetectBoundaryInfo  {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("终点里程")
    private Float endMiles;

    @ApiModelProperty("探伤管界编号")
    private Integer id;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("长链标记")
    private Integer longChain;

    @ApiModelProperty("运营状态")
    private Integer operateStatus;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("起点里程")
    private Float startMiles;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("轨距类型")
    private Integer trackDisCategory;

    @ApiModelProperty("轨道类型")
    private Integer trackType;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("工区编号")
    private Integer workshopId;

}