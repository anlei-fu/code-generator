/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 2:13:50 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service;


import com.jasmine.crud_project.pojo.req.AddPProjectConfigReq;
import com.jasmine.crud_project.pojo.resp.ProjectIdsResp;

public interface SystemService {


    boolean init(AddPProjectConfigReq req);

    ProjectIdsResp getIds(Integer projectId);
}
