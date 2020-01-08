package com.authority.pojo.req;

import com.authority.validate.annotation.Password;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateUserInfoByUserAndAccountReq extends PageReq {

    @ApiModelProperty("password")
    @Password
    private String password;

}