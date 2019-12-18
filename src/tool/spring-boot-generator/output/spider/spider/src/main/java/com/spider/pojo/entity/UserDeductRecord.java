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

@ApiModel("用户消费记录")
@Getter
@Setter
public class UserDeductRecord {

    @ApiModelProperty("数量")
    @NotNull
    private Integer amount;

    @ApiModelProperty("扣除时间")
    @NotNull
    private Integer deductTime;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("单价")
    @NotNull
@NotNull
    private Float price;

    @ApiModelProperty("任务id")
    @NotNull
@NotNull
@NotNull
    private Integer taskId;

}