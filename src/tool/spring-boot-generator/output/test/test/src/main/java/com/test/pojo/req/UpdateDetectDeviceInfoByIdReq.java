package com.test.pojo.entity;

import com.test.pojo.entity.DetectDeviceInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class UpdateDetectDeviceInfoByIdReq @extends {

    @ApiModelProperty("投产日期")
    private Integer commissioningDate;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("仪器编号")
    private String deivceNo;

    @ApiModelProperty("仪器型号")
    private String deviceMode;

    @ApiModelProperty("仪器名称")
    private String deviceName;

    @ApiModelProperty("可用年限")
    private Integer durableYears;

    @ApiModelProperty("出厂日期")
    private Integer exFactoryDate;

    @ApiModelProperty("固定资产编号")
    private String fixedAssetsNo;

    @ApiModelProperty("固定资产值")
    private Float fixedAssetsPrice;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("外形长度")
    @NotNull
    private Float length;

    @ApiModelProperty("制造厂家")
    @NotNull
    private String manufacturer;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("购置价格")
    @NotNull
    private Float purchasePrice;

    @ApiModelProperty("备注")
    @NotNull
    private String remark;

    @ApiModelProperty("报废日期")
    @NotNull
    private Integer scrapDate;

    @ApiModelProperty("状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

    @ApiModelProperty("使用状态")
    @NotNull
    private Integer useStatus;

    @ApiModelProperty("外形高度")
    @NotNull
    private Float weight;

    @ApiModelProperty("外形宽度")
    @NotNull
    private Float width;

    @ApiModelProperty("探伤工区编号")
    @NotNull
    private Integer workareaId;

}