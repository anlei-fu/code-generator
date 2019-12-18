package com.undefined.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@ApiModel("")
@Getter
@Setter
public class UpdateCurveInfoByIdReq {

    @ApiModelProperty("曲线编号")
    private Integer curveId;

}