/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 5:12:50 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.pojo.resp;

import com.jasmine.crawler.pojo.resp.VcodeDetailResp;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class VcodeDetailResp  {

    @ApiModelProperty("")
    private Integer id;

    @ApiModelProperty("")
    private Integer accountId;

    @ApiModelProperty("")
    private Integer vcodeType;

    @ApiModelProperty("")
    private Date createTime;

    @ApiModelProperty("")
    private String content;

    @ApiModelProperty("label of enum")
    private String vcodeTypeLabel;

}
