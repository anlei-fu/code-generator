package com.test.pojo.entity;

import com.test.pojo.entity.DeviceDamageMap;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("设备伤损关系")
@Getter
@Setter
public class DeviceDamageMap @extends {

    @ApiModelProperty("伤损编号")
    private Integer damageId;

    @ApiModelProperty("设备编号")
    private Integer deivceId;

    @ApiModelProperty("设备类型")
    private Integer deviceType;

    @ApiModelProperty("关系编号")
    private Integer id;

}