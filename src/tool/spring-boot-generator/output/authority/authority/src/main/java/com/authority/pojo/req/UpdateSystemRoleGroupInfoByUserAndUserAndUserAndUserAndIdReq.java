package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdReq extends PageReq {

    @ApiModelProperty("related system")
    private Integer systemId;

    @ApiModelProperty("role")
    private String role;

    @ApiModelProperty("desccription")
    private String description;

}