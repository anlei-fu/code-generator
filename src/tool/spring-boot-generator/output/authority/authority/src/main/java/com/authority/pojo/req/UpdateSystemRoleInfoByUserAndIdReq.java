package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateSystemRoleInfoByUserAndIdReq extends PageReq {

    @ApiModelProperty("related system")
    private Integer systemId;

    @ApiModelProperty("role")
    private String role;

    @ApiModelProperty("description")
    private String description;

}