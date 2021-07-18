/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;



import com.jasmine.crud.pojo.entity.Casscader;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddCasscaderReq;
import com.jasmine.crud.pojo.req.GetCasscaderPageReq;
import com.jasmine.crud.pojo.req.UpdateCasscaderReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;


public interface CasscaderService {

    boolean add(AddCasscaderReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdateCasscaderReq req);
    
    Casscader getById(Integer id);
    
    PageResult<CasscaderDetailResp> getDetailPage(GetCasscaderPageReq req);

}
