package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateCurveInfoByCurveIdReq extends PageReq {

    @ApiModelProperty("平均速度")
    private Float averageSpeed;

    @ApiModelProperty("鏇茬嚎鏂瑰悜")
    private Integer curveDirection;

    @ApiModelProperty("鏇茬嚎闀?")
    private Float curveLength;

    @ApiModelProperty("鏇茬嚎鍗婂緞")
    private Float curveReadius;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("缁堢偣閲岀▼")
    private Float endMiles;

    @ApiModelProperty("终缓和线长")
    private Float endSlowLength;

    @ApiModelProperty("终点切线长")
    private Float endTangentLength;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("长链标记")
    private Integer longChain;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("超高")
    private Float overHeight;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("线别")
    private Integer side;

    @ApiModelProperty("顺坡率")
    private Float slopeRate;

    @ApiModelProperty("起点里程")
    private Float startMiles;

    @ApiModelProperty("起缓和线长")
    private Float startSlowLength;

    @ApiModelProperty("起点切线长")
    private Float startTangentLength;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("转向角")
    private Float steeringAngle;

    @ApiModelProperty("轨距类型")
    @Enum("trackDisType")
    private Integer trackDisType;

    @ApiModelProperty("轨距加宽")
    private Float trackDisWide;

    @ApiModelProperty("宸ュ姟娈电紪鍙?")
    private Integer trackDivisionId;

}