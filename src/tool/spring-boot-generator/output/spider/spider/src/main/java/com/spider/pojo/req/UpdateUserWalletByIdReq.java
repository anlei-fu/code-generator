package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateUserWalletByIdReq extends PageReq {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("余额")
    private Float total;

    @ApiModelProperty("用户id")
    private String userId;

}