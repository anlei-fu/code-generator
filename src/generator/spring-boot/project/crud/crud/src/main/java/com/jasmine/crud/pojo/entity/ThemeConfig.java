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
@Table(name = "THEME_CONFIG")
public class ThemeConfig  {

    /**
     * 
     */
    @Column(name = "`base_color1`")
    private String baseColor1;

    /**
     * 
     */
    @Column(name = "`base_color2`")
    private String baseColor2;

    /**
     * 
     */
    @Id
    @Column(name = "`id`")
    private Integer id;

    /**
     * 
     */
    @Column(name = "`login`")
    private String login;

    /**
     * 
     */
    @Column(name = "`project_id`")
    private Integer projectId;

}
