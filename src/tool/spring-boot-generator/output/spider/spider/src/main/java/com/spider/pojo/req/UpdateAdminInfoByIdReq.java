package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateAdminInfoByIdReq  {

    @ApiModelProperty("账号")
    private String account;

    @ApiModelProperty("权限等级")
    private Integer level;

    @ApiModelProperty("密码")
    private String password;

}