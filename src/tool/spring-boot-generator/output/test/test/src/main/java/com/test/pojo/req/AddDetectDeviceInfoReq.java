/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 14:55:53
 */
package com.undefined.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@import

@ApiModel("")
@Getter
@Setter
public class AddDetectDeviceInfoReq {

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
    private Integer scrapDate;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("使用状态")
    private Integer useStatus;

    @ApiModelProperty("外形高度")
    private Float weight;

    @ApiModelProperty("外形宽度")
    private Float width;

    @ApiModelProperty("探伤工区编号")
    private Integer workareaId;

}