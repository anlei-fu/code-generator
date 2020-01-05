package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddSystemRoleGroupInfoReq extends PageReq {

    @ApiModelProperty("create user")
    @NotNull
    private String createUser;

    @ApiModelProperty("desccription")
    private String description;

    @ApiModelProperty("role")
    @NotNull
    private String role;

    @ApiModelProperty("related system")
    @NotNull
    private Integer systemId;

}