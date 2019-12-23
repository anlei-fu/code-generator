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
public class NotaryChannel @extends {

    @ApiModelProperty("渠道编号")
    private Integer id;

    @ApiModelProperty("渠道名称")
    private String channelName;

    @ApiModelProperty("渠道备注")
    private String remark;

    @ApiModelProperty("接口地址")
    private String apiUrl;

    @ApiModelProperty("接口key")
    private String apiKey;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("创建时间")
    private Date createTime;

}