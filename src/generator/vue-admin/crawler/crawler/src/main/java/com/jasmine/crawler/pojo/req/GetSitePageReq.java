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
public class GetSitePageReq extends PageReq {

    @ApiModelProperty("the parent site of the site")
    private Integer parentSiteId;

    @ApiModelProperty("the login script of the site")
    private Integer loginScriptId;

    @ApiModelProperty("the captaa type of the site")
    @Enum("loginCaptaType")
    private Integer loginCaptaType;

    @ApiModelProperty("need proxy")
    @Enum("booleanFlag")
    private Integer needUseProxy;

    @ApiModelProperty("")
    @Enum("enableStatus")
    private Integer enableStatus;

    @ApiModelProperty("create time start time")
    private Date createTimeStart;

    @ApiModelProperty("create time end time")
    private Date createTimeEnd;

}
