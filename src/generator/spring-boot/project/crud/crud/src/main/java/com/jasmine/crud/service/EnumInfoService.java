/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;



import com.jasmine.crud.pojo.entity.EnumInfo;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddEnumInfoReq;
import com.jasmine.crud.pojo.req.GetEnumInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateEnumInfoReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;


public interface EnumInfoService {

    boolean add(AddEnumInfoReq req);
    
    boolean deleteById(String id);
    
    boolean update(UpdateEnumInfoReq req);
    
    EnumInfo getById(String id);
    
    PageResult<EnumInfoDetailResp> getDetailPage(GetEnumInfoPageReq req);

}
