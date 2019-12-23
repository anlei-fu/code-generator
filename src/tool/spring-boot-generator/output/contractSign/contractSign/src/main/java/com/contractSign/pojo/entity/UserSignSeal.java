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
public class UserSignSeal @extends {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("创建人编号")
    private Integer userId;

    @ApiModelProperty("签章归属类型")
    private Integer belongType;

    @ApiModelProperty("签章归属编号")
    private Integer belongId;

    @ApiModelProperty("签章名称")
    private String signName;

    @ApiModelProperty("签章图片")
    private String signPic;

    @ApiModelProperty("创建时间")
    private Date createTime;

}