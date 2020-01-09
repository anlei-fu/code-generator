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
public class GetDealRecordListReq extends PageReq {

    @ApiModelProperty("施工命令行")
    private String cmdNo;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("处置结果")
    private Integer dealResult;

    @ApiModelProperty("处置时间")
    private Date dealTime;

    @ApiModelProperty("删除审计状:-1审计成功,1待审计")
    @Enum("deleteAuditStatus")
    private Integer deleteAuditStatus;

    @ApiModelProperty("删除时间")
    private Date deleteTime;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("记录编号")
    private Integer orderDetailId;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("处置人")
    private Integer workareaId;

    @ApiModelProperty("处置车间")
    private Integer workshopInfoId;

}
