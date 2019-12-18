/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 14:55:53
 */
package com.undefined.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@import

@ApiModel("")
@Getter
@Setter
public class UpdateThighTrackInfoByIdReq {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("曲线半径")
    private Float curveRadius;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("坡段长度")
    private Float gradeSectionLength;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("最大坡度")
    private Integer maxGradient;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("排序编号")
    private String sortNum;

    @ApiModelProperty("车站编号")
    private Integer stationId;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("鑲￠亾闀垮害")
    private Float thighTrackLength;

    @ApiModelProperty("股道号")
    private String thighTrackNo;

    @ApiModelProperty("鑲￠亾绫诲瀷")
    private Integer thighTrackType;

    @ApiModelProperty("轨枕类别")
    private Integer tieCategory;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("宸ュ尯缂栧彿")
    private Integer workareaId;

}