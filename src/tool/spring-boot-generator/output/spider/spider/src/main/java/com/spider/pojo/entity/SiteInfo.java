package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("网站信息")
@Getter
@Setter
public class SiteInfo  {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("主站")
    private String mainDomain;

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("网站类型")
    private String type;

}