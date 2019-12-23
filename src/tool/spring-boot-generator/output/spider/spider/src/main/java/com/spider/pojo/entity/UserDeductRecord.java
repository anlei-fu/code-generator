package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("用户消费记录")
@Getter
@Setter
public class UserDeductRecord  {

    @ApiModelProperty("数量")
    private Integer amount;

    @ApiModelProperty("扣除时间")
    private Integer deductTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("单价")
    private Float price;

    @ApiModelProperty("任务id")
    private Integer taskId;

}