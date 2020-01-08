package com.authority.pojo.req;

import com.authority.validate.annotation.Password;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddUserInfoReq extends PageReq {

    @ApiModelProperty("password")
    @NotNull
    @Password
    private String password;

    @ApiModelProperty("create user")
    @NotNull
    private String createUser;

}