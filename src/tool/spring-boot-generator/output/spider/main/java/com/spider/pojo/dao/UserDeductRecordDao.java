package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("用户消费记录")
@Getter
@Setter
public class UserDeductRecordDao {

    @ApiModelProperty("数量")
    @NotNull
    private Integer amount;

    @ApiModelProperty("扣除时间")
    private Long deductTime;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("单价")
    @NotNull
    private Integer price;

    @ApiModelProperty("任务id")
    @NotNull
    private Integer taskId;
}