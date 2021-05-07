/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-20 5:12:59 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.pojo.req;

import com.jasmine.crud.validate.annotation.Enum;
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
public class UpdateModuleSBatchReq {

    /**
     *
     */
    @Id
    @Column(name = "`id`")
    private List<Integer> ids;

    /**
     *
     */
    @Column(name = "`description`")
    private String description;

    /**
     *
     */
    @Enum("Level")
    private Integer level;

    /**
     *
     */
    @Column(name = "`name`")
    private String name;

    /**
     *
     */
    @Column(name = "`parent_moudule_id`")
    private Integer parentMouduleId;

    /**
     *
     */
    @Column(name = "`project_id`")
    private Integer projectId;

}
