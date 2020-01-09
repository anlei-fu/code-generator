package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class GetDamageRepositoryPositionListReq extends PageReq {

    @ApiModelProperty("桥隧道口")
    private Integer bridgeTunnel;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("损伤位置 min")
    private Integer damagePositionMin;

    @ApiModelProperty("损伤位置 max")
    private Integer damagePositionMax;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("孔裂位置")
    private Integer holePosition;

    @ApiModelProperty("线别")
    private Integer lineCategory;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("里程")
    private Float miles;

    @ApiModelProperty("车站编号")
    private Integer stationId;

    @ApiModelProperty("股别")
    private Integer stockExchange;

    @ApiModelProperty("股道号")
    private Integer thighTrackId;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}
