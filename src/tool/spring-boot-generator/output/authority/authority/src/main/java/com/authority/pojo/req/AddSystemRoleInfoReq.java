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

    @ApiModelProperty("related system")
    @NotNull
    private Integer systemId;

    @ApiModelProperty("role")
    @NotNull
    private String role;

    @ApiModelProperty("description")
    private String description;

}