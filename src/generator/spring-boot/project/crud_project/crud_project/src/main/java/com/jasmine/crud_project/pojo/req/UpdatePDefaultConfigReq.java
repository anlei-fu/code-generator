/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.pojo.req;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;



/**
 * 
 */
@Getter
@Setter

public class UpdatePDefaultConfigReq  {

    /**
     * 
     */
    @NotNull
    private Integer id;

    /**
     * 
     */
    @NotEmpty
    private String content;

    /**
     * 
     */
    @NotNull
    private Integer projectId;

}
