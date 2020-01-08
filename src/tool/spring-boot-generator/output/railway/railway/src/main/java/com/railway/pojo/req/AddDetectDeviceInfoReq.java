package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddDetectDeviceInfoReq extends PageReq {

    @ApiModelProperty("投产日期")
    private Date commissioningDate;

    @ApiModelProperty("仪器编号")
    private String deivceNo;

    @ApiModelProperty("仪器型号")
    private String deviceMode;

    @ApiModelProperty("仪器名称")
    private String deviceName;

    @ApiModelProperty("可用年限")
    private Integer durableYears;

    @ApiModelProperty("出厂日期")
    private Date exFactoryDate;

    @ApiModelProperty("固定资产编号")
    private String fixedAssetsNo;

    @ApiModelProperty("固定资产值")
    private Float fixedAssetsPrice;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("外形长度")
    private Float length;

    @ApiModelProperty("制造厂家")
    private String manufacturer;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("购置价格")
    private Float purchasePrice;

    @ApiModelProperty("备注")
    private String remark;

    @ApiModelProperty("报废日期")
    private Date scrapDate;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("使用状态")
    @Enum("useStatus")
    private Integer useStatus;

    @ApiModelProperty("外形高度")
    private Float weight;

    @ApiModelProperty("外形宽度")
    private Float width;

    @ApiModelProperty("探伤工区编号")
    private Integer workareaId;

}