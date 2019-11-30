package com.spider.pojo.dao;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("用户信息")
@Getter
@Setter
public class UserInfoDao {

    @ApiModelProperty("创建时间")
    private Long createTime;

    @ApiModelProperty("邮箱")
    private String email;

    @ApiModelProperty("")
    @NotNull
    private Integer id;

    @ApiModelProperty("最后登录ip")
    private String lastLoginIp;

    @ApiModelProperty("最后登陆时间")
    private Long lastLoginTime;

    @ApiModelProperty("密码")
    private String password;

    @ApiModelProperty("电话")
    private String phoneNo;
}