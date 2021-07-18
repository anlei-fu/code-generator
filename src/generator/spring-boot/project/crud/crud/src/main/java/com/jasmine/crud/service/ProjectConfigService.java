/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;



import com.jasmine.crud.pojo.entity.ProjectConfig;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddProjectConfigReq;
import com.jasmine.crud.pojo.req.GetProjectConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateProjectConfigReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;


public interface ProjectConfigService {

    boolean add(AddProjectConfigReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdateProjectConfigReq req);
    
    ProjectConfig getById(Integer id);
    
    PageResult<ProjectConfigDetailResp> getDetailPage(GetProjectConfigPageReq req);

}
