/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:53:03 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;

/**
 * 
 */
@Getter
@Setter
public class FieldInfo  {

    /**
     * 
     */
    @Column(name = "`batch_editable`")
    private Integer batchEditable;

    /**
     * 
     */
    @Column(name = "`default_show`")
    private Integer defaultShow;

    /**
     * 
     */
    @Column(name = "`description`")
    private String description;

    /**
     * 
     */
    @Column(name = "`editable`")
    private Integer editable;

    /**
     * 
     */
    @Column(name = "`filter_type`")
    private Integer filterType;

    /**
     * 
     */
    @Column(name = "`format_pattern`")
    private String formatPattern;

    /**
     * 
     */
    @Column(name = "`format_type`")
    private Integer formatType;

    /**
     * 
     */
    @Id
    @Column(name = "`id`")
    private Integer id;

    /**
     * 
     */
    @Column(name = "`insert_nullable`")
    private Integer insertNullable;

    /**
     * 
     */
    @Column(name = "`insertable`")
    private Integer insertable;

    /**
     * 
     */
    @Column(name = "`is_name`")
    private Integer isName;

    /**
     * 
     */
    @Column(name = "`is_pk`")
    private Integer isPk;

    /**
     * 
     */
    @Column(name = "`java_type`")
    private String javaType;

    /**
     * 
     */
    @Column(name = "`name`")
    private String name;

    /**
     * 
     */
    @Column(name = "`notice_text`")
    private String noticeText;

    /**
     * 
     */
    @Column(name = "`order`")
    private Integer order;

    /**
     * 
     */
    @Column(name = "`raw_name`")
    private String rawName;

    /**
     * 
     */
    @Column(name = "`real_column`")
    private Integer realColumn;

    /**
     * 
     */
    @Column(name = "`table_id`")
    private Integer tableId;

    /**
     * 
     */
    @Column(name = "`title`")
    private String title;

}
