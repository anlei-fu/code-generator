/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.pojo.req;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;



/**
 * 
 */
@Getter
@Setter

public class GetPCheckboxEnumPageReq extends PageReq {

    /**
     *  start time
     */
    private Date lastBackupTimeStart;

    /**
     *  end time
     */
    private Date lastBackupTimeEnd;

    /**
     *  start time
     */
    private Date updateTimeStart;

    /**
     *  end time
     */
    private Date updateTimeEnd;

}
