package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class AddSiteInfoReq  {

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("主站")
    private String mainDomain;

    @ApiModelProperty("网站类型")
    private String type;

}