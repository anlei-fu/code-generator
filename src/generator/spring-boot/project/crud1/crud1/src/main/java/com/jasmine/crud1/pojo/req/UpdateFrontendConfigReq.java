/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.pojo.req;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



/**
 * 
 */
@Getter
@Setter

public class UpdateFrontendConfigReq  {

    /**
     * 
     */
    @NotNull
    private Integer id;

    /**
     * 
     */
    @NotNull
    private Integer projectId;

    /**
     * 
     */
    private String content;

}
