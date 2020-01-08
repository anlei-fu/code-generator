package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GetSystemRoleInfoListReq extends PageReq {

    @ApiModelProperty("related system")
    private Integer systemId;

    @ApiModelProperty("role")
    private String role;

    @ApiModelProperty("")
    private String createUser;

    @ApiModelProperty(" start time")
    private Date createTimeStart;

    @ApiModelProperty(" end time")
    private Date createTimeEnd;

}