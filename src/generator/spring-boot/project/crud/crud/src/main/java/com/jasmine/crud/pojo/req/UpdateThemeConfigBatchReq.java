/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-20 5:12:59 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.req;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
import java.util.List;

/**
 *
 */
@Getter
@Setter
public class UpdateThemeConfigBatchReq {

    /**
     *
     */
    @Id
    @Column(name = "`id`")
    private List<Integer> ids;

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
    @Column(name = "`login`")
    private String login;

    /**
     *
     */
    @Column(name = "`project_id`")
    private Integer projectId;

}