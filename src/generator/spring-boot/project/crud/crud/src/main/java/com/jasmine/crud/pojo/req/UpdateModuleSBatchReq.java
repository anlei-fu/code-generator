/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.req;

import com.jasmine.crud.validate.annotation.Enum;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * 
 */
@Getter
@Setter
public class UpdateModuleSBatchReq  {

    /**
     * 
     */
    private List<Integer> ids;

    /**
     * 
     */
    private String description;

    /**
     * 
     */
    @Enum("Level")
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
