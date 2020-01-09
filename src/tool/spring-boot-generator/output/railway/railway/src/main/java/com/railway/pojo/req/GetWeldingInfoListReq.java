package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class GetWeldingInfoListReq extends PageReq {

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("带孔数量")
    private Integer holeNum;

    @ApiModelProperty("内测平直度")
    private Float innerGlancingFlatness;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("里程")
    private Float miles;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("道岔位置")
    private Integer position;

    @ApiModelProperty("焊缝位置类别")
    private Integer positionCategory;

    @ApiModelProperty("是否加固焊接")
    private Integer reinforceWelding;

    @ApiModelProperty("线别")
    private Integer side;

    @ApiModelProperty("车站编号")
    private Integer stationId;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("股道编号")
    private Integer thighTrackId;

    @ApiModelProperty("股别")
    private Integer thignTrackCategory;

    @ApiModelProperty("轨面平直度")
    private Float trackGlancingFlatness;

    @ApiModelProperty("轨道编号")
    private Integer trackId;

    @ApiModelProperty("道岔号")
    private Integer turnoutId;

    @ApiModelProperty("道岔股别")
    private Integer turnoutThignCategory;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("焊接日期")
    private Date weldDate;

    @ApiModelProperty("焊接时轨温")
    private Float weldTrackTemperature;

    @ApiModelProperty("鐒婃帴浜?")
    private String weldUser;

    @ApiModelProperty("焊接人员所属单位")
    private String welderUnit;

    @ApiModelProperty("焊缝标识")
    private String weldingNo;

    @ApiModelProperty("焊缝类型")
    @Enum("weldingType")
    private Integer weldingType;

    @ApiModelProperty("焊缝方式")
    private Integer weldingWay;

    @ApiModelProperty("工区编号")
    private Integer workareaId;

}
