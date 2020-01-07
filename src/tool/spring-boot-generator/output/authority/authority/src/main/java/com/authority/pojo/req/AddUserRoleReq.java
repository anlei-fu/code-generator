package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddUserRoleReq extends PageReq {

    @ApiModelProperty("create user")
    @NotNull
    private String createUser;

    @ApiModelProperty("system id")
    @NotNull
    private Integer systemId;

    @ApiModelProperty("related user ")
    @NotNull
    private String userAccount;

}