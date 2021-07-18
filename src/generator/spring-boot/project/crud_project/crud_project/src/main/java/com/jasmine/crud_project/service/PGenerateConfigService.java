/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service;



import com.jasmine.crud_project.pojo.entity.PGenerateConfig;
import com.jasmine.crud_project.pojo.req.*;
import com.jasmine.crud_project.pojo.req.AddPGenerateConfigReq;
import com.jasmine.crud_project.pojo.req.GetPGenerateConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePGenerateConfigReq;
import com.jasmine.crud_project.pojo.resp.*;
import com.jasmine.crud_project.pojo.resp.PageResult;


public interface PGenerateConfigService {

    boolean add(AddPGenerateConfigReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdatePGenerateConfigReq req);
    
    PGenerateConfig getById(Integer id);
    
    PageResult<PGenerateConfigDetailResp> getDetailPage(GetPGenerateConfigPageReq req);

}
