package com.test.pojo.entity;

import com.test.pojo.entity.DealRecord;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("探伤处置记录")
@Getter
@Setter
public class DealRecord @extends {

    @ApiModelProperty("施工命令行")
    private String cmdNo;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("处置说明")
    private String dealRemark;

    @ApiModelProperty("处置结果")
    private Integer dealResult;

    @ApiModelProperty("处置时间")
    private Date dealTime;

    @ApiModelProperty("删除审计状:-1审计成功,1待审计")
    private Integer deleteAuditStatus;

    @ApiModelProperty("删除时间")
    private Date deleteTime;

    @ApiModelProperty("处置记录编号")
    private Integer id;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("记录编号")
    @NotNull
    private Integer orderDetailId;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

    @ApiModelProperty("处置人")
    @NotNull
    private Integer workareaId;

    @ApiModelProperty("处置车间")
    @NotNull
    private Integer workshopInfoId;

}