/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("site account info")
@Getter
@Setter
public class SiteAccount  {

    @ApiModelProperty("")
    private Integer id;

    @ApiModelProperty("")
    private String nickName;

    @ApiModelProperty("description  of account")
    private String description;

    @ApiModelProperty("")
    private Integer loginType;

    @ApiModelProperty("the site that account belong")
    private Integer siteId;

    @ApiModelProperty("the phone of account")
    private String phone;

    @ApiModelProperty("the email of account")
    private String email;

    @ApiModelProperty("the password of account")
    private String password;

    @ApiModelProperty("the time that account last login")
    private Date lastLoginTime;

    @ApiModelProperty("the ip that the account last login")
    private String lastLoginIp;

    @ApiModelProperty("the current use count of the account ")
    private Integer currentUseCount;

    @ApiModelProperty("")
    private Integer blockCurrentCount;

    @ApiModelProperty("")
    private Date blockTimeoutTime;

    @ApiModelProperty("enable status")
    private Integer enableStatus;

    @ApiModelProperty("create time")
    private Date createTime;

}
