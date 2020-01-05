package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddSystemRoleInfoReq extends PageReq {

    @ApiModelProperty("")
    @NotNull
    private String createUser;

    @ApiModelProperty("description")
    private String description;

    @ApiModelProperty("role")
    @NotNull
    private String role;

    @ApiModelProperty("related system")
    @NotNull
    private Integer systemId;

}