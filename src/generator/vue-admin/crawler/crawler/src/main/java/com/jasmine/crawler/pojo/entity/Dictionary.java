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

@ApiModel("enum value- name map")
@Getter
@Setter
public class Dictionary  {

    @ApiModelProperty("identifier pk ")
    private Integer id;

    @ApiModelProperty("type of enum,not null")
    private String type;

    @ApiModelProperty("value of enum ,not null")
    private Integer value;

    @ApiModelProperty("label of enum")
    private String label;

    @ApiModelProperty("")
    private String createUser;

    @ApiModelProperty("")
    private Date createTime;

    @ApiModelProperty("")
    private String lastUpdateUser;

    @ApiModelProperty("")
    private Date lastUpdateTime;

}
