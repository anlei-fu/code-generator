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

@ApiModel("worker 运行记录")
@Getter
@Setter
public class WorkerRunRecord {

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("开始时间")
    private Integer startTime;

}