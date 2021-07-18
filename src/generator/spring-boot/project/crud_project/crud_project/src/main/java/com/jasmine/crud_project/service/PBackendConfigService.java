/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service;



import com.jasmine.crud_project.pojo.entity.PBackendConfig;
import com.jasmine.crud_project.pojo.req.*;
import com.jasmine.crud_project.pojo.req.AddPBackendConfigReq;
import com.jasmine.crud_project.pojo.req.GetPBackendConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePBackendConfigReq;
import com.jasmine.crud_project.pojo.resp.*;
import com.jasmine.crud_project.pojo.resp.PageResult;


public interface PBackendConfigService {

    boolean add(AddPBackendConfigReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdatePBackendConfigReq req);
    
    PBackendConfig getById(Integer id);
    
    PageResult<PBackendConfigDetailResp> getDetailPage(GetPBackendConfigPageReq req);

}
