package com.test.pojo.entity;

import com.test.pojo.entity.WeldingInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("焊缝信息")
@Getter
@Setter
public class WeldingInfo @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("带孔数量")
    private Integer holeNum;

    @ApiModelProperty("焊缝编号")
    private Integer id;

    @ApiModelProperty("内测平直度")
    private Float innerGlancingFlatness;

    @ApiModelProperty("删除标记")
    @NotNull
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

    @ApiModelProperty("道岔位置")
    @NotNull
    private Integer position;

    @ApiModelProperty("焊缝位置类别")
    @NotNull
    private Integer positionCategory;

    @ApiModelProperty("是否加固焊接")
    @NotNull
    private Integer reinforceWelding;

    @ApiModelProperty("备注")
    @NotNull
    private String remark;

    @ApiModelProperty("线别")
    @NotNull
    private Integer side;

    @ApiModelProperty("车站编号")
    @NotNull
    private Integer stationId;

    @ApiModelProperty("状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("股道编号")
    @NotNull
    private Integer thighTrackId;

    @ApiModelProperty("股别")
    @NotNull
    private Integer thignTrackCategory;

    @ApiModelProperty("轨面平直度")
    @NotNull
    private Float trackGlancingFlatness;

    @ApiModelProperty("轨道编号")
    @NotNull
    private Integer trackId;

    @ApiModelProperty("道岔号")
    @NotNull
    private Integer turnoutId;

    @ApiModelProperty("道岔股别")
    @NotNull
    private Integer turnoutThignCategory;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

    @ApiModelProperty("焊接日期")
    @NotNull
    private Integer weldDate;

    @ApiModelProperty("焊接时轨温")
    @NotNull
    private Float weldTrackTemperature;

    @ApiModelProperty("鐒婃帴浜?")
    @NotNull
    private String weldUser;

    @ApiModelProperty("焊接人员所属单位")
    @NotNull
    private String welderUnit;

    @ApiModelProperty("焊缝标识")
    @NotNull
    private String weldingNo;

    @ApiModelProperty("焊缝类型")
    @NotNull
    private Integer weldingType;

    @ApiModelProperty("焊缝方式")
    @NotNull
    private Integer weldingWay;

    @ApiModelProperty("工区编号")
    @NotNull
    private Integer workareaId;

}