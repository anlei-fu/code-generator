package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class AddWorkerRunRecordReq  {

    @ApiModelProperty("结束时间")
    private Integer endTime;

    @ApiModelProperty("开始时间")
    private Integer startTime;

}