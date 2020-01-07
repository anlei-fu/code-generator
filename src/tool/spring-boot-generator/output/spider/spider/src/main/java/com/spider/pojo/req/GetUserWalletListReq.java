package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetUserWalletListReq extends PageReq {

    @ApiModelProperty("用户id")
    private String userId;

    @ApiModelProperty("余额 min")
    private Float totalMin;

    @ApiModelProperty("余额 max")
    private Float totalMax;

    @ApiModelProperty("创建时间")
    private Integer createTime;

}