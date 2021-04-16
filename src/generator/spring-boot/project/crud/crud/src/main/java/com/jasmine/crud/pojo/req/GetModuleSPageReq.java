/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.req;

import lombok.Getter;
import lombok.Setter;

/**
 * 
 */
@Getter
@Setter
public class GetModuleSPageReq extends PageReq {

    /**
     * 
     */
    private String description;

    /**
     * 
     */
    private String name;

    /**
     * 
     */
    private Integer parentMouduleId;

    /**
     * 
     */
    private Integer projectId;

}
