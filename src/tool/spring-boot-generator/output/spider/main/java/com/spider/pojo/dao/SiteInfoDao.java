package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("网站信息")
@Getter
@Setter
public class SiteInfoDao {

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("主站")
    private String mainDomain;

    @ApiModelProperty("网站类型")
    private String type;
}