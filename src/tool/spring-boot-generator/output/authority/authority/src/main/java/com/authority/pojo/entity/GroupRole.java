package com.authority.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GroupRole  {

    @ApiModelProperty("")
    private Integer id;

    @ApiModelProperty("")
    private String userAccount;

    @ApiModelProperty("")
    private String systemId;

    @ApiModelProperty("")
    private String role;

    @ApiModelProperty("")
    private String createUser;

    @ApiModelProperty("")
    private Date createTime;

}