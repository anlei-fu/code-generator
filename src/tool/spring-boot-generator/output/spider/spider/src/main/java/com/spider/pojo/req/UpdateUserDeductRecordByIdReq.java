package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateUserDeductRecordByIdReq  {

    @ApiModelProperty("数量")
    private Integer amount;

    @ApiModelProperty("扣除时间")
    private Integer deductTime;

    @ApiModelProperty("单价")
    private Float price;

    @ApiModelProperty("任务id")
    private Integer taskId;

}