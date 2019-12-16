package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@ApiModel("")
@Getter
@Setter
public class GetWorkerInfoByIdReq {

    @ApiModelProperty("ip")
    private String ip;

    @ApiModelProperty("加入时间")
    private Integer joinTime;

}