/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.pojo.req;

import com.jasmine.crawler.pojo.entity.Url;
import com.jasmine.crawler.validate.annotation.Enum;
import com.jasmine.crawler.validate.annotation.Url;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("")
@Getter
@Setter
public class AddUrlReq  {

    @ApiModelProperty("")
    @NotNull
    private Integer depth;

    @ApiModelProperty("the site that the url belong")
    private Integer downSystemSiteId;

    @ApiModelProperty("")
    @NotNull
    @Enum("urlType")
    private Integer urlType;

    @ApiModelProperty("the related url")
    @Url
    private String referUrl;

    @ApiModelProperty("current retry count of url")
    private Integer crawlCount;

    @ApiModelProperty("crawl status")
    @Enum("urlStatus")
    private Integer urlStatus;

    @ApiModelProperty("last crawl  time")
    private String lastCrawlTime;

    @ApiModelProperty("")
    private String queryString;

}
