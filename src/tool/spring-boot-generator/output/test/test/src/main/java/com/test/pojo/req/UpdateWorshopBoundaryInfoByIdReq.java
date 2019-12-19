package com.test.pojo.entity;

import com.test.pojo.entity.WorshopBoundaryInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class UpdateWorshopBoundaryInfoByIdReq @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("终点里程")
    private Float endMiles;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    @NotNull
    private Integer lineId;

    @ApiModelProperty("长链标记")
    @NotNull
    private Integer longChain;

    @ApiModelProperty("运营状态")
    @NotNull
    private Integer operateStatus;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("备注")
    @NotNull
    private String remark;

    @ApiModelProperty("起点里程")
    @NotNull
    private Float startMiles;

    @ApiModelProperty("状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("轨道类别")
    @NotNull
    private Integer trackCategory;

    @ApiModelProperty("轨道类型")
    @NotNull
    private Integer trackType;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

    @ApiModelProperty("工区编号")
    @NotNull
    private Integer workareaId;

}