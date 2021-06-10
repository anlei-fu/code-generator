/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:33:38 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 9:44:38 AM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.req;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Getter
@Setter
public class PageTimeReq extends PageReq {

    @NotEmpty(message = "开始时间不能为空")
    @JsonFormat(pattern = "yyyyMMddHHmmss", timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyyMMddHHmmss")
    private Date startTime;

    @NotEmpty(message = "结束时间不能为空")
    @JsonFormat(pattern = "yyyyMMddHHmmss", timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyyMMddHHmmss")
    private Date endTime;
}