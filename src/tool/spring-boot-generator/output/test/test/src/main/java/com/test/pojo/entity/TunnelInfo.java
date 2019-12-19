package com.test.pojo.entity;

import com.test.pojo.entity.TunnelInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("隧道信息")
@Getter
@Setter
public class TunnelInfo @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("终点里程")
    private Float endMiles;

    @ApiModelProperty("隧道编号")
    private Integer id;

    @ApiModelProperty("输入码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("全长")
    @NotNull
    private Float length;

    @ApiModelProperty("线路编号")
    @NotNull
    private Integer lineId;

    @ApiModelProperty("长链标记")
    @NotNull
    private Integer longChain;

    @ApiModelProperty("中心里程")
    @NotNull
    private Float middleMiles;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("备注")
    @NotNull
    private String remark;

    @ApiModelProperty("线别")
    @NotNull
    private Integer side;

    @ApiModelProperty("起点里程")
    @NotNull
    private Float startMiles;

    @ApiModelProperty("状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("轨距")
    @NotNull
    private Float trackDistance;

    @ApiModelProperty("工务段编号")
    @NotNull
    private Integer trackDivisionId;

    @ApiModelProperty("隧道名")
    @NotNull
    private String tunneName;

    @ApiModelProperty("隧道号")
    @NotNull
    private String tunneNo;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

}