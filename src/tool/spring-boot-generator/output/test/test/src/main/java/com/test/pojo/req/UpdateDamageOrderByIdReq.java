package com.undefined.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@ApiModel("")
@Getter
@Setter
public class UpdateDamageOrderByIdReq {

    @ApiModelProperty("伤损单号")
    private String orderNo;

}