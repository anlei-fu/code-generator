/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.req;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * 
 */
@Getter
@Setter
public class GetProjectPageReq extends PageReq {

    /**
     * 
     */
    private String company;

    /**
     *  start time
     */
    private Date createTimeStart;

    /**
     *  end time
     */
    private Date createTimeEnd;

    /**
     * 
     */
    private String description;

    /**
     * 
     */
    private String name;

}
