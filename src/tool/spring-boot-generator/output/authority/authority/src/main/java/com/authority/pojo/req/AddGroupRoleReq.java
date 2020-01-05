package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddGroupRoleReq extends PageReq {

    @ApiModelProperty("")
    @NotNull
    private String createUser;

    @ApiModelProperty("")
    @NotNull
    private String role;

    @ApiModelProperty("")
    @NotNull
    private String systemId;

    @ApiModelProperty("")
    @NotNull
    private String userAccount;

}