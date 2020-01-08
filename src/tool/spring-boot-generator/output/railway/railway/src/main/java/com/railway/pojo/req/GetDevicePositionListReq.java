package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GetDevicePositionListReq extends PageReq {

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("设备位置唯一编号")
    private String deviceCode;

    @ApiModelProperty("设备编号(对应导入标号)")
    private String deviceNo;

    @ApiModelProperty("行别")
    private Integer direction;

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

    @ApiModelProperty("钢轨id")
    private Integer trackId;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}