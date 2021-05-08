/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 */
@Getter
@Setter
@Table(name = "PROJECT")
public class Project  {

    /**
     * 
     */
    @Column(name = "`company`")
    private String company;

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
    @Column(name = "`id`")
    private Integer id;

    /**
     * 
     */
    @Column(name = "`name`")
    private String name;

}