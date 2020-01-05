package com.authority.pojo.req;

import com.authority.validate.annotation.Password;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class UpdateRoleSystemUserInfoByAccountReq extends PageReq {

    @ApiModelProperty("create time")
    private Date createTime;

    @ApiModelProperty("password")
    @Password
    private String password;

    @ApiModelProperty("")
    private String role;

}