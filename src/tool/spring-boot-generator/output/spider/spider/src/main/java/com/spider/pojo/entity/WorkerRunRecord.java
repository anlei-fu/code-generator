package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("worker 运行记录")
@Getter
@Setter
public class WorkerRunRecord  {

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("开始时间")
    private Integer startTime;

}