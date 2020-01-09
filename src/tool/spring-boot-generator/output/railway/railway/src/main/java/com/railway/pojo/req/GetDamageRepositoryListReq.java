package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class GetDamageRepositoryListReq extends PageReq {

    @ApiModelProperty("1.检验通过,2.数据重复,3.数据异常,4.疑似前后伤")
    private Integer analysisResult;

    @ApiModelProperty("删除审计状:-1审计成功,1待审计")
    @Enum("auditStatus")
    private Integer auditStatus;

    @ApiModelProperty("销号状:-1销号成功,1未销号")
    private Integer cancel;

    @ApiModelProperty("1.钢轨探伤仪,2.焊缝探伤仪,3.通用探伤仪,4.手工检查,5.双轨探伤仪,6.探伤车")
    private Integer checkEquipment;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("伤损编码")
    private String damageCode;

    @ApiModelProperty("伤损程度 min")
    @Enum("damageLevel")
    private Integer damageLevelMin;

    @ApiModelProperty("伤损程度 max")
    @Enum("damageLevel")
    private Integer damageLevelMax;

    @ApiModelProperty("新旧伤 min")
    private Integer damageOldMin;

    @ApiModelProperty("新旧伤 max")
    private Integer damageOldMax;

    @ApiModelProperty("原伤损id min")
    private Integer damageOldIdMin;

    @ApiModelProperty("原伤损id max")
    private Integer damageOldIdMax;

    @ApiModelProperty("损伤类型 min")
    @Enum("damageType")
    private Integer damageTypeMin;

    @ApiModelProperty("损伤类型 max")
    @Enum("damageType")
    private Integer damageTypeMax;

    @ApiModelProperty("处置状态")
    @Enum("dealStatus")
    private Integer dealStatus;

    @ApiModelProperty("删除时间")
    private Date deleteTime;

    @ApiModelProperty("检查人员")
    private Integer detectStuff;

    @ApiModelProperty("检测时间 start time")
    private Date detectTimeStart;

    @ApiModelProperty("检测时间 end time")
    private Date detectTimeEnd;

    @ApiModelProperty("导入状:1导入,2编辑,3已归档")
    @Enum("importStatus")
    private Integer importStatus;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("末次检测时间 start time")
    private Date lastDetectTimeStart;

    @ApiModelProperty("末次检测时间 end time")
    private Date lastDetectTimeEnd;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("伤损单号")
    private String orderNo;

    @ApiModelProperty("接收单位")
    private String receivingUnit;

    @ApiModelProperty("接收人")
    private String receivingUser;

    @ApiModelProperty("接收线路工区")
    private Integer receivingWorkareaInfo;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}
