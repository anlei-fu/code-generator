package com.test.pojo.entity;

import com.test.pojo.entity.CurveInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class UpdateCurveInfoByCurveIdReq @extends {

    @ApiModelProperty("平均速度")
    private Float averageSpeed;

    @ApiModelProperty("创建时间")
    private Date createTime;

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
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    @NotNull
    private Integer lineId;

    @ApiModelProperty("长链标记")
    @NotNull
    private Integer longChain;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("超高")
    @NotNull
    private Float overHeight;

    @ApiModelProperty("备注")
    @NotNull
    private String remark;

    @ApiModelProperty("线别")
    @NotNull
    private Integer side;

    @ApiModelProperty("顺坡率")
    @NotNull
    private Float slopeRate;

    @ApiModelProperty("起点里程")
    @NotNull
    private Float startMiles;

    @ApiModelProperty("起缓和线长")
    @NotNull
    private Float startSlowLength;

    @ApiModelProperty("起点切线长")
    @NotNull
    private Float startTangentLength;

    @ApiModelProperty("状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("转向角")
    @NotNull
    private Float steeringAngle;

    @ApiModelProperty("轨距类型")
    @NotNull
    private Integer trackDisType;

    @ApiModelProperty("轨距加宽")
    @NotNull
    private Float trackDisWide;

    @ApiModelProperty("宸ュ姟娈电紪鍙?")
    @NotNull
    private Integer trackDivisionId;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

}