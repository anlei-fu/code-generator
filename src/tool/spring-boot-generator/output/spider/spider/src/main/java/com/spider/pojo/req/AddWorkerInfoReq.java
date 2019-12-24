package com.spider.pojo.req;

import com.spider.validate.annotation.Ip;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddWorkerInfoReq extends PageReq {

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("ip")
    @NotNull
    @Ip
    private String ip;

    @ApiModelProperty("加入时间")
    private Integer joinTime;

    @ApiModelProperty("最后运行时间")
    private Integer lastRunTime;

}