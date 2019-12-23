package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetWorkerInfoListReq  {

    @ApiModelProperty("ip")
    private String ip;

    @ApiModelProperty("加入时间")
    private Integer joinTime;

    @ApiModelProperty("最后运行时间")
    private Integer lastRunTime;

}