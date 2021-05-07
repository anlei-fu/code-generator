/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:25:40 PM 
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

public class FieldInfoCreateReq  {

    /**
     * 
     */
    private Integer batchEditable;

    /**
     * 
     */
    private Integer defaultShow;

    /**
     * 
     */
    private String description;

    /**
     * 
     */
    private Integer editable;

    /**
     * 
     */
    private Integer filterType;

    /**
     * 
     */
    private String formatPattern;

    /**
     * 
     */
    private Integer formatType;

    /**
     * 
     */
    private Integer insertNullable;

    /**
     * 
     */
    private Integer insertable;

    /**
     * 
     */
    private Integer isName;

    /**
     * 
     */
    private Integer isPk;

    /**
     * 
     */
    private String javaType;

    /**
     * 
     */
    private String name;

    /**
     * 
     */
    private String noticeText;

    /**
     * 
     */
    private Integer order;

    /**
     * 
     */
    private String rawName;

    /**
     * 
     */
    private Integer realColumn;

    /**
     * 
     */
    @NotNull
    private Integer tableId;

    /**
     * 
     */
    private String title;

}
