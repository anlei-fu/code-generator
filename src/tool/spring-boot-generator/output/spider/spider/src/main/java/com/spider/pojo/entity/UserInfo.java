package com.spider.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("用户信息")
@Getter
@Setter
public class UserInfo  {

    @ApiModelProperty("")
    private Integer id;

    @ApiModelProperty("电话")
    private String phoneNo;

    @ApiModelProperty("邮箱")
    private String email;

    @ApiModelProperty("密码")
    private String password;

    @ApiModelProperty("最后登录ip")
    private String lastLoginIp;

    @ApiModelProperty("最后登陆时间")
    private Integer lastLoginTime;

    @ApiModelProperty("创建时间")
    private Integer createTime;

}