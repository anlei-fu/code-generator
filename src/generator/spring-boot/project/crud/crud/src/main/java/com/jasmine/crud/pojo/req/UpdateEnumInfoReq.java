/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.req;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;



/**
 * 
 */
@Getter
@Setter

public class UpdateEnumInfoReq  {

    /**
     * 
     */
    @NotEmpty
    private String id;

    /**
     * 
     */
    private Integer projectId;

    /**
     * 
     */
    private String content;

}
