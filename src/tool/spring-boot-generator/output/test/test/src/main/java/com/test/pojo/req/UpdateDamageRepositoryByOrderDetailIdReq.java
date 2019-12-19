package com.test.pojo.entity;

import com.test.pojo.entity.DamageRepository;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class UpdateDamageRepositoryByOrderDetailIdReq @extends {

    @ApiModelProperty("1.检验通过,2.数据重复,3.数据异常,4.疑似前后伤")
    private Integer analysisResult;

    @ApiModelProperty("删除审计状:-1审计成功,1待审计")
    private Integer auditStatus;

    @ApiModelProperty("销号状:-1销号成功,1未销号")
    private Integer cancel;

    @ApiModelProperty("1.钢轨探伤仪,2.焊缝探伤仪,3.通用探伤仪,4.手工检查,5.双轨探伤仪,6.探伤车")
    private Integer checkEquipment;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("伤损编码")
    private String damageCode;

    @ApiModelProperty("损伤详情")
    private String damageDetail;

    @ApiModelProperty("伤损程度")
    private Integer damageLevel;

    @ApiModelProperty("新旧伤")
    private Integer damageOld;

    @ApiModelProperty("原伤损id")
    private Integer damageOldId;

    @ApiModelProperty("损伤类型")
    private Integer damageType;

    @ApiModelProperty("处置状态")
    private Integer dealStatus;

    @ApiModelProperty("删除时间")
    private Date deleteTime;

    @ApiModelProperty("检查人员")
    private Integer detectStuff;

    @ApiModelProperty("检测时间")
    private Date detectTime;

    @ApiModelProperty("导入状:1导入,2编辑,3已归档")
    private Integer importStatus;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("末次检测时间")
    @NotNull
    private Date lastDetectTime;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("伤损单号")
    @NotNull
    private String orderNo;

    @ApiModelProperty("接收单位")
    @NotNull
    private String receivingUnit;

    @ApiModelProperty("接收人")
    @NotNull
    private String receivingUser;

    @ApiModelProperty("接收线路工区")
    @NotNull
    private Integer receivingWorkareaInfo;

    @ApiModelProperty("备注")
    @NotNull
    private String remark;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

}