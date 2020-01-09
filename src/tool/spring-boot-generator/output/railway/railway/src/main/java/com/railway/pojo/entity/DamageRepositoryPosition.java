package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("伤损归档-受伤位置扩展")
@Getter
@Setter
public class DamageRepositoryPosition  {

    @ApiModelProperty("桥隧道口")
    private Integer bridgeTunnel;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("损伤位置")
    private Integer damagePosition;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("孔裂位置")
    private Integer holePosition;

    @ApiModelProperty("线别")
    private Integer lineCategory;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("线名")
    private String lineName;

    @ApiModelProperty("里程")
    private Float miles;

    @ApiModelProperty("记录编号")
    private Integer orderDetailId;

    @ApiModelProperty("车站编号")
    private Integer stationId;

    @ApiModelProperty("股别")
    private Integer stockExchange;

    @ApiModelProperty("股道号")
    private Integer thighTrackId;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}
