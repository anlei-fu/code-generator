package com.spider.pojo.req;

import com.spider.validate.annotation.Url;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateSiteInfoByIdReq extends PageReq {

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("主站")
    @Url
    private String mainDomain;

    @ApiModelProperty("网站类型")
    private String type;

}