/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.pojo.entity;

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
@Table(name = "PROJECT_CONFIG")
public class ProjectConfig  {

    /**
     * 
     */
    @Id
    @Column(name = "`id`")
    private Integer id;

    /**
     * 
     */
    @Column(name = "`content`")
    private String content;

    /**
     * 
     */
    @Column(name = "`update_time`")
    private Date updateTime;

}
