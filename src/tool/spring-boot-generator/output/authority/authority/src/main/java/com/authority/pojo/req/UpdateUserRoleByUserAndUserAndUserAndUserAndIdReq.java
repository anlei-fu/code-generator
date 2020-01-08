package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateUserRoleByUserAndUserAndUserAndUserAndIdReq extends PageReq {

    @ApiModelProperty("related user ")
    private String userAccount;

    @ApiModelProperty("system id")
    private Integer systemId;

}