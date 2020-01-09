package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddSystemInfoReq extends PageReq {

    @ApiModelProperty("name")
    @NotNull
    private String name;

    @ApiModelProperty("description")
    private String description;

}