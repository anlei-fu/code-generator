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
public class UpdateAditionalOptionBatchReq {

    /**
     *
     */
    @Id
    @Column(name = "`id`")
    private List<Integer> ids;

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
