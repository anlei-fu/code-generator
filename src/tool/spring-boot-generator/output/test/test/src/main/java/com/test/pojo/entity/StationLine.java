package com.test.pojo.entity;

import com.test.pojo.entity.StationLine;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("车站线路")
@Getter
@Setter
public class StationLine @extends {

    @ApiModelProperty("中心点距离")
    private Float centDistance;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("终端距离")
    private Float endDistance;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    @NotNull
@NotNull
    private Integer lineId;

    @ApiModelProperty("操作人")
    @NotNull
@NotNull
    private Integer operator;

    @ApiModelProperty("排序编号")
    @NotNull
@NotNull
    private String sortNum;

    @ApiModelProperty("开始距离")
    @NotNull
@NotNull
    private Float startDistance;

    @ApiModelProperty("车站编号")
    @NotNull
@NotNull
@NotNull
    private Integer stationId;

    @ApiModelProperty("状态")
    @NotNull
@NotNull
@NotNull
    private Integer status;

    @ApiModelProperty("更新时间")
    @NotNull
@NotNull
@NotNull
    private Date updateTime;

}