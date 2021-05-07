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
@Table(name = "ADITIONAL_OPTION")
public class AditionalOption  {

    /**
     * 
     */
    @Column(name = "`check`")
    private String check;

    /**
     * 
     */
    @Column(name = "`description`")
    private String description;

    /**
     * 
     */
    @Column(name = "`enable`")
    private String enable;

    /**
     * 
     */
    @Id
    @Column(name = "`id`")
    private Integer id;

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
    @Column(name = "`table_id`")
    private String tableId;

    /**
     * 
     */
    @Column(name = "`title`")
    private String title;

}
