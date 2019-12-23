package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetAdminInfoListReq  {

    @ApiModelProperty("账号")
    private String account;

    @ApiModelProperty("权限等级")
    private Integer level;

}