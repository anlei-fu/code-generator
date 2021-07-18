/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;



import com.jasmine.crud.pojo.entity.BackendConfig;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddBackendConfigReq;
import com.jasmine.crud.pojo.req.GetBackendConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateBackendConfigReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;


public interface BackendConfigService {

    boolean add(AddBackendConfigReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdateBackendConfigReq req);
    
    BackendConfig getById(Integer id);
    
    PageResult<BackendConfigDetailResp> getDetailPage(GetBackendConfigPageReq req);

}
