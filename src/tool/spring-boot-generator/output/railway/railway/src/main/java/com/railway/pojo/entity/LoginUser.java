package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class LoginUser  {

    @ApiModelProperty("")
    private Date createTime;

    @ApiModelProperty("")
    private Integer id;

    @ApiModelProperty("名字")
    private String name;

    @ApiModelProperty("密码3")
    private String password;

    @ApiModelProperty("")
    private String state;

    @ApiModelProperty("")
    private String type;

    @ApiModelProperty("")
    private Date updateTime;

}
