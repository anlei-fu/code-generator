package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateWorshopBoundaryInfoByIdReq extends PageReq {

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("终点里程")
    private Float endMiles;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("长链标记")
    private Integer longChain;

    @ApiModelProperty("运营状态")
    @Enum("operateStatus")
    private Integer operateStatus;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("起点里程")
    private Float startMiles;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("轨道类别")
    private Integer trackCategory;

    @ApiModelProperty("轨道类型")
    @Enum("trackType")
    private Integer trackType;

    @ApiModelProperty("工区编号")
    private Integer workareaId;

}