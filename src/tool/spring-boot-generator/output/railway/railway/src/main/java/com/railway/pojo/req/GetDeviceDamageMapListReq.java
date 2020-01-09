package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class GetDeviceDamageMapListReq extends PageReq {

    @ApiModelProperty("伤损编号 min")
    private Integer damageIdMin;

    @ApiModelProperty("伤损编号 max")
    private Integer damageIdMax;

    @ApiModelProperty("设备编号")
    private Integer deivceId;

    @ApiModelProperty("设备类型")
    @Enum("deviceType")
    private Integer deviceType;

}
