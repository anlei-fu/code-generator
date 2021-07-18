/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.service;



import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.pojo.req.AddBackendConfigReq;
import com.jasmine.crud1.pojo.req.GetBackendConfigPageReq;
import com.jasmine.crud1.pojo.req.UpdateBackendConfigReq;
import com.jasmine.crud1.pojo.resp.PageResult;


public interface BackendConfigService {

    boolean add(AddBackendConfigReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdateBackendConfigReq req);
    
    PageResult<BackendConfigDetailResp> getDetailPage(GetBackendConfigPageReq req);

}
