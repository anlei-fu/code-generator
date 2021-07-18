/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.pojo.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.persistence.*;



/**
 * 
 */
@Getter
@Setter
@Table(name = "P_MENU")
public class PMenu  {

    /**
     * 
     */
    @Column(name = "`create_time`")
    private Date createTime;

    /**
     * 
     */
    @Column(name = "`description`")
    private String description;

    /**
     * 
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "`id`")
    private Integer id;

    /**
     * 
     */
    @Column(name = "`last_backup_time`")
    private Date lastBackupTime;

    /**
     * 
     */
    @Column(name = "`menu_level`")
    private Integer menuLevel;

    /**
     * 
     */
    @Column(name = "`name`")
    private String name;

    /**
     * 
     */
    @Column(name = "`parent_id`")
    private Integer parentId;

    /**
     * 
     */
    @Column(name = "`project_id`")
    private Integer projectId;

}
