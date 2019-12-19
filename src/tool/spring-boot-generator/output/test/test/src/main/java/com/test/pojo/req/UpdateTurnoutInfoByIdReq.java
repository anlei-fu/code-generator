package com.test.pojo.entity;

import com.test.pojo.entity.TurnoutInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class UpdateTurnoutInfoByIdReq @extends {

    @ApiModelProperty("投产日期")
    private Integer commissioningDate;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("辙叉号")
    private String frogNo;

    @ApiModelProperty("辙叉构造")
    private Integer frogStructure;

    @ApiModelProperty("是否包含可动心轨")
    private Integer hasMovablePointFrog;

    @ApiModelProperty("是否包含道岔尖轨")
    private Integer hasSwitchRail;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    @NotNull
    private Integer lineId;

    @ApiModelProperty("里程")
    @NotNull
    private Float miles;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("岔道位置")
    @NotNull
    private Integer position;

    @ApiModelProperty("备注")
    @NotNull
    private String remark;

    @ApiModelProperty("排序编号")
    @NotNull
    private String sortNum;

    @ApiModelProperty("车站编号")
    @NotNull
@NotNull
    private Integer stationId;

    @ApiModelProperty("状态")
    @NotNull
@NotNull
    private Integer status;

    @ApiModelProperty("尖轨类型")
    @NotNull
@NotNull
    private Integer switchRailType;

    @ApiModelProperty("股道号")
    @NotNull
@NotNull
    private Integer thighTrackId;

    @ApiModelProperty("轨型")
    @NotNull
@NotNull
    private Integer trackType;

    @ApiModelProperty("道岔种类")
    @NotNull
@NotNull
    private Integer turnoutKind;

    @ApiModelProperty("道岔全长")
    @NotNull
@NotNull
    private Float turnoutLength;

    @ApiModelProperty("岔道号")
    @NotNull
@NotNull
@NotNull
    private String turnoutNo;

    @ApiModelProperty("道岔类型")
    @NotNull
@NotNull
@NotNull
    private Integer turnoutType;

    @ApiModelProperty("更新时间")
    @NotNull
@NotNull
@NotNull
    private Date updateTime;

    @ApiModelProperty("宸ュ尯缂栧彿")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Integer workareaId;

}