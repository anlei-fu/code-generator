/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.pojo.resp;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;



/**
 * 
 */
@Getter
@Setter

public class PMenuDetailResp  {

    /**
     * 
     */
    private Date createTime;

    /**
     * 
     */
    private String description;

    /**
     * 
     */
    private Integer id;

    /**
     * 
     */
    private Date lastBackupTime;

    /**
     * 
     */
    private Integer menuLevel;

    /**
     * 
     */
    private String name;

    /**
     * 
     */
    private Integer parentId;

    /**
     * 
     */
    private Integer projectId;

    /**
     * 
     */
    private Integer pProjectConfigProjectId;

}
