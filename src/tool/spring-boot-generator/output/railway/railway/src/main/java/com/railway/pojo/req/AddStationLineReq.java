package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddStationLineReq extends PageReq {

    @ApiModelProperty("中心点距离")
    private Float centDistance;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("终端距离")
    private Float endDistance;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    @NotNull
    private Integer lineId;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("排序编号")
    private String sortNum;

    @ApiModelProperty("开始距离")
    private Float startDistance;

    @ApiModelProperty("车站编号")
    @NotNull
    private Integer stationId;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

}