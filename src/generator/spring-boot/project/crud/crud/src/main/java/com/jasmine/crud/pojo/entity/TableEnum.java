/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
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
@Table(name = "TABLE_ENUM")
public class TableEnum  {

    /**
     * 
     */
    @Id
    @Column(name = "`id`")
    private Integer id;

    /**
     * 
     */
    @Column(name = "`project_id`")
    private Integer projectId;

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
