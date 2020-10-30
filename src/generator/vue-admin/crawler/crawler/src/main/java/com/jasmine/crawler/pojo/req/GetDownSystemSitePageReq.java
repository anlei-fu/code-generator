/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.pojo.req;

import com.jasmine.crawler.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class GetDownSystemSitePageReq extends PageReq {

    @ApiModelProperty("")
    private Integer siteId;

    @ApiModelProperty("")
    private Integer scriptId;

    @ApiModelProperty("")
    private Integer downSystemId;

    @ApiModelProperty("")
    @Enum("crawlerCrawlType")
    private Integer crawlerCrawlType;

    @ApiModelProperty("")
    private Float bloomFpp;

    @ApiModelProperty("")
    @Enum("enableStatus")
    private Integer enableStatus;

    @ApiModelProperty(" start time")
    private Date createTimeStart;

    @ApiModelProperty(" end time")
    private Date createTimeEnd;

}