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
public class UpdateLoginUserByIdReq {

    @ApiModelProperty("")
    private Date createTime;

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