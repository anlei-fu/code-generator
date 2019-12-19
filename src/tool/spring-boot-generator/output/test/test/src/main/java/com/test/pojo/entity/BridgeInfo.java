package com.test.pojo.entity;

import com.test.pojo.entity.BridgeInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("桥梁信息")
@Getter
@Setter
public class BridgeInfo @extends {

    @ApiModelProperty("桥全长")
    private Float bridgeLength;

    @ApiModelProperty("桥名")
    private String bridgeName;

    @ApiModelProperty("桥号")
    private String bridgeNo;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("孔跨样式")
    private String crossHoleStyle;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("终点里程")
    private Float endMiles;

    @ApiModelProperty("立交类别")
    private String flyoverCategory;

    @ApiModelProperty("桥孔总长")
    private Float holeLength;

    @ApiModelProperty("桥梁编号")
    private Integer id;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

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

    @ApiModelProperty("工务段编号")
    @NotNull
    private Integer trackDivisionId;

    @ApiModelProperty("轨距")
    @NotNull
    private Float trackWeigth;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

}