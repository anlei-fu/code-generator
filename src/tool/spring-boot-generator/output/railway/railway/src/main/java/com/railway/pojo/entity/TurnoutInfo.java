package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("道岔信息")
@Getter
@Setter
public class TurnoutInfo  {

    @ApiModelProperty("投产日期")
    private Date commissioningDate;

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

    @ApiModelProperty("道岔编号")
    private Integer id;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("里程")
    private Float miles;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("岔道位置")
    private Integer position;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("排序编号")
    private String sortNum;

    @ApiModelProperty("车站编号")
    private Integer stationId;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("尖轨类型")
    private Integer switchRailType;

    @ApiModelProperty("股道号")
    private Integer thighTrackId;

    @ApiModelProperty("轨型")
    private Integer trackType;

    @ApiModelProperty("道岔种类")
    private Integer turnoutKind;

    @ApiModelProperty("道岔全长")
    private Float turnoutLength;

    @ApiModelProperty("岔道号")
    private String turnoutNo;

    @ApiModelProperty("道岔类型")
    private Integer turnoutType;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("宸ュ尯缂栧彿")
    private Integer workareaId;

}
