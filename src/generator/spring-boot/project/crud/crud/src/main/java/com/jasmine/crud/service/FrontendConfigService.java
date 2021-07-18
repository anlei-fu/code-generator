/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;



import com.jasmine.crud.pojo.entity.FrontendConfig;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddFrontendConfigReq;
import com.jasmine.crud.pojo.req.GetFrontendConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateFrontendConfigReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;


public interface FrontendConfigService {

    boolean add(AddFrontendConfigReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdateFrontendConfigReq req);
    
    FrontendConfig getById(Integer id);
    
    PageResult<FrontendConfigDetailResp> getDetailPage(GetFrontendConfigPageReq req);

}
