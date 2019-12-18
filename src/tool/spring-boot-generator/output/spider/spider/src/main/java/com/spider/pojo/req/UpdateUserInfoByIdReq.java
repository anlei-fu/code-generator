/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 14:55:53
 */
package com.undefined.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@import

@ApiModel("")
@Getter
@Setter
public class UpdateUserInfoByIdReq {

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