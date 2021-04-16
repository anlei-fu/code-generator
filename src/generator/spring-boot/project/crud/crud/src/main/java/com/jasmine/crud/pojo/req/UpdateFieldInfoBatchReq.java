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
public class UpdateFieldInfoBatchReq  {

    /**
     * 
     */
    private List<Integer> ids;

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
    @Enum("FilterType")
    private Integer filterType;

    /**
     * 
     */
    private String formatPattern;

    /**
     * 
     */
    @Enum("FormatType")
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
    @Enum("YesNo")
    private Integer isName;

    /**
     * 
     */
    @Enum("YesNo")
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
    private Integer tableId;

    /**
     * 
     */
    private String title;

}
