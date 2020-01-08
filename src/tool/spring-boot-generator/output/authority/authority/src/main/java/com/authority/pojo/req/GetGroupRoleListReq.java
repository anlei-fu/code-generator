package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GetGroupRoleListReq extends PageReq {

    @ApiModelProperty("")
    private String userAccount;

    @ApiModelProperty("")
    private String systemId;

    @ApiModelProperty("")
    private String role;

    @ApiModelProperty("")
    private String createUser;

    @ApiModelProperty(" start time")
    private Date createTimeStart;

    @ApiModelProperty(" end time")
    private Date createTimeEnd;

}