package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateDeviceDamageMapByIdReq extends PageReq {

    @ApiModelProperty("伤损编号")
    private Integer damageId;

    @ApiModelProperty("设备编号")
    private Integer deivceId;

    @ApiModelProperty("设备类型")
    @Enum("deviceType")
    private Integer deviceType;

}