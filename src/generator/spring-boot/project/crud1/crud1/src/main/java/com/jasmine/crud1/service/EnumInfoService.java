/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.service;



import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.pojo.req.AddEnumInfoReq;
import com.jasmine.crud1.pojo.req.GetEnumInfoPageReq;
import com.jasmine.crud1.pojo.req.UpdateEnumInfoReq;
import com.jasmine.crud1.pojo.resp.PageResult;


public interface EnumInfoService {

    boolean add(AddEnumInfoReq req);
    
    boolean deleteById(String id);
    
    boolean update(UpdateEnumInfoReq req);
    
    PageResult<EnumInfoDetailResp> getDetailPage(GetEnumInfoPageReq req);

}
