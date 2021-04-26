/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 */
@Getter
@Setter
@Table(name = "TABLE_INFO")
public class TableInfo  {

    /**
     * 
     */
    @Column(name = "`api_prefix`")
    private String apiPrefix;

    /**
     * 
     */
    @Column(name = "`batch_delete`")
    private Integer batchDelete;

    /**
     * 
     */
    @Column(name = "`batch_eidit`")
    private Integer batchEidit;

    /**
     * 
     */
    @Column(name = "`deletable`")
    private Integer deletable;

    /**
     * 
     */
    @Column(name = "`description`")
    private String description;

    /**
     * 
     */
    @Column(name = "`eiditable`")
    private Integer eiditable;

    /**
     * 
     */
    @Id
    @Column(name = "`id`")
    private Integer id;

    /**
     * 
     */
    @Column(name = "`insertable`")
    private Integer insertable;

    /**
     * 
     */
    @Column(name = "`moudule_id`")
    private Integer mouduleId;

    /**
     * 
     */
    @Column(name = "`name`")
    private String name;

    /**
     * 
     */
    @Column(name = "`project_id`")
    private Integer projectId;

    /**
     * 
     */
    @Column(name = "`raw_name`")
    private String rawName;

    /**
     * 
     */
    @Column(name = "`title`")
    private String title;

}
