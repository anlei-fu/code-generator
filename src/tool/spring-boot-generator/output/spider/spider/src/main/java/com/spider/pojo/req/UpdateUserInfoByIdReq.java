package com.spider.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateUserInfoByIdReq  {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("邮箱")
    private String email;

    @ApiModelProperty("最后登录ip")
    private String lastLoginIp;

    @ApiModelProperty("最后登陆时间")
    private Integer lastLoginTime;

    @ApiModelProperty("密码")
    private String password;

    @ApiModelProperty("电话")
    private String phoneNo;

}