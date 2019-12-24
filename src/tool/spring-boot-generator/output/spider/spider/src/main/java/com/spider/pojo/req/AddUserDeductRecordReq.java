package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddUserDeductRecordReq extends PageReq {

    @ApiModelProperty("数量")
    @NotNull
    private Integer amount;

    @ApiModelProperty("扣除时间")
    private Integer deductTime;

    @ApiModelProperty("单价")
    @NotNull
    private Float price;

    @ApiModelProperty("任务id")
    @NotNull
    private Integer taskId;

}