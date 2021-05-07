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
public class UpdateFieldInfoBatchReq {

    /**
     *
     */
    @Id
    @Column(name = "`id`")
    private List<Integer> ids;

    /**
     *
     */
    @Column(name = "`batch_editable`")
    private Integer batchEditable;

    /**
     *
     */
    @Column(name = "`default_show`")
    private Integer defaultShow;

    /**
     *
     */
    @Column(name = "`description`")
    private String description;

    /**
     *
     */
    @Column(name = "`editable`")
    private Integer editable;

    /**
     *
     */
    @Enum("FilterType")
    private Integer filterType;

    /**
     *
     */
    @Column(name = "`format_pattern`")
    private String formatPattern;

    /**
     *
     */
    @Enum("FormatType")
    private Integer formatType;

    /**
     *
     */
    @Column(name = "`insert_nullable`")
    private Integer insertNullable;

    /**
     *
     */
    @Column(name = "`insertable`")
    private Integer insertable;

    /**
     *
     */
    @Enum("YesNo")
    private Integer isName;

    /**
     *
     */
    @Enum("YesNo")
    private Integer isPk;

    /**
     *
     */
    @Column(name = "`java_type`")
    private String javaType;

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
    @Column(name = "`order`")
    private Integer order;

    /**
     *
     */
    @Column(name = "`raw_name`")
    private String rawName;

    /**
     *
     */
    @Column(name = "`real_column`")
    private Integer realColumn;

    /**
     *
     */
    @Column(name = "`table_id`")
    private Integer tableId;

    /**
     *
     */
    @Column(name = "`title`")
    private String title;

}
