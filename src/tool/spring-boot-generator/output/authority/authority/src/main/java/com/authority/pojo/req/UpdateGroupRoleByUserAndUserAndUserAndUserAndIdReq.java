package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateGroupRoleByUserAndUserAndUserAndUserAndIdReq extends PageReq {

    @ApiModelProperty("")
    private String userAccount;

    @ApiModelProperty("")
    private String systemId;

    @ApiModelProperty("")
    private String role;

}