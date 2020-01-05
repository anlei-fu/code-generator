package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class UpdateSystemRoleInfoByIdReq extends PageReq {

    @ApiModelProperty("")
    private Date createTime;

    @ApiModelProperty("")
    private String createUser;

    @ApiModelProperty("description")
    private String description;

    @ApiModelProperty("role")
    private String role;

    @ApiModelProperty("related system")
    private Integer systemId;

}