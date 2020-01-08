package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddBridgeInfoReq extends PageReq {

    @ApiModelProperty("桥全长")
    private Float bridgeLength;

    @ApiModelProperty("桥名")
    private String bridgeName;

    @ApiModelProperty("桥号")
    private String bridgeNo;

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

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("长链标记")
    private Integer longChain;

    @ApiModelProperty("中心里程")
    private Float middleMiles;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("线别")
    private Integer side;

    @ApiModelProperty("起点里程")
    private Float startMiles;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("工务段编号")
    private Integer trackDivisionId;

    @ApiModelProperty("轨距")
    private Float trackWeigth;

}