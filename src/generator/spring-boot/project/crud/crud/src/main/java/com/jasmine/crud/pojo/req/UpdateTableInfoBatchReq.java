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
public class UpdateTableInfoBatchReq {

    /**
     *
     */
    @Id
    @Column(name = "`id`")
    private List<Integer> ids;

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
