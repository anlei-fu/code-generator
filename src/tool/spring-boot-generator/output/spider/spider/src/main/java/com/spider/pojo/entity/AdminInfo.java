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

@ApiModel("管理员")
@Getter
@Setter
public class AdminInfo {

    @ApiModelProperty("账号")
    @NotNull
    private String account;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("权限等级")
    @NotNull
    private Integer level;

    @ApiModelProperty("密码")
    @NotNull
@NotNull
    private String password;

}