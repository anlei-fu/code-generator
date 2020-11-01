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

@ApiModel("")
@Getter
@Setter
public class DynamicUrlJob  {

    @ApiModelProperty("")
    private Integer id;

    @ApiModelProperty("")
    private Integer downSystemId;

    @ApiModelProperty("")
    private Integer scriptId;

    @ApiModelProperty("")
    private Integer dynamicType;

    @ApiModelProperty("")
    private Date createTime;

    @ApiModelProperty("")
    private Integer enableStatus;

    @ApiModelProperty("")
    private Integer delayTimeout;

    @ApiModelProperty("")
    private Date lastRunTime;

    @ApiModelProperty("")
    private Integer concurrency;

    @ApiModelProperty("")
    private Integer maxWaintToBindTaskCount;

}
