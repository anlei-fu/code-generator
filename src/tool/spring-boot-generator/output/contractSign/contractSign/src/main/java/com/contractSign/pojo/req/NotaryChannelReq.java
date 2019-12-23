package com.contractSign.pojo.entity;

@packages
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
@packages


@ApiModel("")
@Getter
@Setter
public class GetNotaryChannelListReq @extends {

    @ApiModelProperty("接口key")
    private String apiKey;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("创建时间")
    private Date createTime;

}