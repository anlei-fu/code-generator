package com.test.pojo.entity;

import com.test.pojo.entity.ThighTrackInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("股道信息")
@Getter
@Setter
public class ThighTrackInfo @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("曲线半径")
    private Float curveRadius;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("坡段长度")
    private Float gradeSectionLength;

    @ApiModelProperty("股道编号")
    private Integer id;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    @NotNull
    private Integer lineId;

    @ApiModelProperty("最大坡度")
    @NotNull
    private Integer maxGradient;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("排序编号")
    @NotNull
    private String sortNum;

    @ApiModelProperty("车站编号")
    @NotNull
    private Integer stationId;

    @ApiModelProperty("状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("鑲￠亾闀垮害")
    @NotNull
    private Float thighTrackLength;

    @ApiModelProperty("股道号")
    @NotNull
    private String thighTrackNo;

    @ApiModelProperty("鑲￠亾绫诲瀷")
    @NotNull
    private Integer thighTrackType;

    @ApiModelProperty("轨枕类别")
    @NotNull
    private Integer tieCategory;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

    @ApiModelProperty("宸ュ尯缂栧彿")
    @NotNull
    private Integer workareaId;

}