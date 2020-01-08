package com.authority.pojo.req;

import com.authority.validate.annotation.Password;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq extends PageReq {

    @ApiModelProperty("password")
    @Password
    private String password;

}