/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:53:03 PM 
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
public class UpdateProjectReq  {

    /**
     * 
     */
    @NotNull
    private Integer id;

    /**
     * 
     */
    private String company;

    /**
     * 
     */
    private String description;

    /**
     * 
     */
    private String name;

}
