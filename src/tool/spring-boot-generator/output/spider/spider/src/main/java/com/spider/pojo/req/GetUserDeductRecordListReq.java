package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetUserDeductRecordListReq extends PageReq {

    @ApiModelProperty("任务id")
    private Integer taskId;

    @ApiModelProperty("单价 min")
    private Float priceMin;

    @ApiModelProperty("单价 max")
    private Float priceMax;

    @ApiModelProperty("数量 min")
    private Integer amountMin;

    @ApiModelProperty("数量 max")
    private Integer amountMax;

    @ApiModelProperty("扣除时间")
    private Integer deductTime;

}