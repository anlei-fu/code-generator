/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;



import com.jasmine.crud.pojo.entity.TableEnum;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddTableEnumReq;
import com.jasmine.crud.pojo.req.GetTableEnumPageReq;
import com.jasmine.crud.pojo.req.UpdateTableEnumReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;


public interface TableEnumService {

    boolean add(AddTableEnumReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdateTableEnumReq req);
    
    TableEnum getById(Integer id);
    
    PageResult<TableEnumDetailResp> getDetailPage(GetTableEnumPageReq req);

}
