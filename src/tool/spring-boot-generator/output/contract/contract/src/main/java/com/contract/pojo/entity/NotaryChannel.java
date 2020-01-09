package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class NotaryChannel  {

    @ApiModelProperty("接口key")
    private String apiKey;

    @ApiModelProperty("接口地址")
    private String apiUrl;

    @ApiModelProperty("渠道名称")
    private String channelName;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("渠道编号")
    private Integer id;

    @ApiModelProperty("渠道备注")
    private String remark;

    @ApiModelProperty("状态")
    private Integer status;

}
