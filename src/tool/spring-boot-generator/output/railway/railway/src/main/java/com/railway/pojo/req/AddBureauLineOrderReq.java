package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class AddBureauLineOrderReq extends PageReq {

    @ApiModelProperty("铁路局编号")
    private Integer bureauId;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("排序编号")
    private String sortNum;

}