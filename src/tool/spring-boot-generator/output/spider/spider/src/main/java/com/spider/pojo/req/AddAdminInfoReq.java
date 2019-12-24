package com.spider.pojo.req;

import com.spider.validate.annotation.Enum;
import com.spider.validate.annotation.Password;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddAdminInfoReq extends PageReq {

    @ApiModelProperty("账号")
    @NotNull
    private String account;

    @ApiModelProperty("权限等级")
    @Enum("level")
    private Integer level;

    @ApiModelProperty("密码")
    @NotNull
    @Password
    private String password;

}