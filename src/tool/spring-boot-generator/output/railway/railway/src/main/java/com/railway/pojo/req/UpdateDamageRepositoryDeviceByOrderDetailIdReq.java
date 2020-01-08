package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateDamageRepositoryDeviceByOrderDetailIdReq extends PageReq {

    @ApiModelProperty("位置唯一钢轨号/焊缝号/岔道号")
    private String deviceCode;

    @ApiModelProperty("设备名称")
    private String deviceName;

    @ApiModelProperty("设备类型")
    @Enum("deviceType")
    private Integer deviceType;

    @ApiModelProperty("道岔配轨/焊缝(类型)号")
    private String deviceTypeCode;

    @ApiModelProperty("生产厂")
    private String factory;

    @ApiModelProperty("材质")
    private String nature;

    @ApiModelProperty("曲线半径")
    private Float radius;

    @ApiModelProperty("铁轨类型")
    @Enum("railType")
    private Integer railType;

    @ApiModelProperty("钢轨热印号")
    private String sealNumber;

    @ApiModelProperty("轨枕")
    private Integer sleeper;

    @ApiModelProperty("累计通过总重")
    private Float totalWeight;

    @ApiModelProperty("钢轨号")
    private String trackNo;

    @ApiModelProperty("道岔号")
    private String turnoutNo;

    @ApiModelProperty("出厂年月")
    private String userDate;

}