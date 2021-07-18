/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service;



import com.jasmine.crud_project.pojo.entity.PFrontendConfig;
import com.jasmine.crud_project.pojo.req.*;
import com.jasmine.crud_project.pojo.req.AddPFrontendConfigReq;
import com.jasmine.crud_project.pojo.req.GetPFrontendConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePFrontendConfigReq;
import com.jasmine.crud_project.pojo.resp.*;
import com.jasmine.crud_project.pojo.resp.PageResult;


public interface PFrontendConfigService {

    boolean add(AddPFrontendConfigReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdatePFrontendConfigReq req);
    
    PFrontendConfig getById(Integer id);
    
    PageResult<PFrontendConfigDetailResp> getDetailPage(GetPFrontendConfigPageReq req);

}
