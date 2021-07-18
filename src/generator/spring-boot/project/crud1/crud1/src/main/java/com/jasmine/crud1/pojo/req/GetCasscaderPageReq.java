/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.pojo.req;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;



/**
 * 
 */
@Getter
@Setter

public class GetCasscaderPageReq extends PageReq {

    /**
     *  start time
     */
    private Date updateTimeStart;

    /**
     *  end time
     */
    private Date updateTimeEnd;

}
