/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.req;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

/**
 * 
 */
@Getter
@Setter

public class UpdateModuleSReq  {

    /**
     * 
     */
    @NotNull
    private Integer id;

    /**
     * 
     */
    private String description;

    /**
     * 
     */
    private Integer level;

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
