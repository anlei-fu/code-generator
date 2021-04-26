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
@Table(name = "VALIDATOR")
public class Validator  {

    /**
     * 
     */
    @Column(name = "`field_id`")
    private Integer fieldId;

    /**
     * 
     */
    @Id
    @Column(name = "`id`")
    private Integer id;

    /**
     * 
     */
    @Column(name = "`msg`")
    private String msg;

    /**
     * 
     */
    @Column(name = "`pattern`")
    private String pattern;

}
