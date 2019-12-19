package com.test.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class AddDeviceDamageMapReq @extends {

    @ApiModelProperty("伤损编号")
    private Integer damageId;

    @ApiModelProperty("设备编号")
    private Integer deivceId;

    @ApiModelProperty("设备类型")
    private Integer deviceType;

}