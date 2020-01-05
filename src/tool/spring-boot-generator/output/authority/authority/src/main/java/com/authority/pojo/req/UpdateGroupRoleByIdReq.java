package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class UpdateGroupRoleByIdReq extends PageReq {

    @ApiModelProperty("")
    private Date createTime;

    @ApiModelProperty("")
    private String createUser;

    @ApiModelProperty("")
    private String role;

    @ApiModelProperty("")
    private String systemId;

    @ApiModelProperty("")
    private String userAccount;

}