/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.service;



import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.pojo.req.AddCasscaderReq;
import com.jasmine.crud1.pojo.req.GetCasscaderPageReq;
import com.jasmine.crud1.pojo.req.UpdateCasscaderReq;
import com.jasmine.crud1.pojo.resp.PageResult;


public interface CasscaderService {

    boolean add(AddCasscaderReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdateCasscaderReq req);
    
    PageResult<CasscaderDetailResp> getDetailPage(GetCasscaderPageReq req);

}