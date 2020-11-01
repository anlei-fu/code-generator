/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 5:12:50 PM 
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
public class UpdateSiteUrlBloomReq  {

    @ApiModelProperty("")
    private Integer donwSystemSiteId;

    @ApiModelProperty("")
    private String bloom;

    @ApiModelProperty("")
    @Enum("bloomLoadingStatus")
    private Integer bloomLoadingStatus;

    @ApiModelProperty("")
    private Integer totalCount;

    @ApiModelProperty("")
    private Date lastLoadingTime;

    @ApiModelProperty("")
    private Date lastDumpTime;

    @ApiModelProperty("")
    @Enum("enableStatus")
    private Integer enableStatus;

}
