/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;



import com.jasmine.crud.pojo.entity.TableInfo;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddTableInfoReq;
import com.jasmine.crud.pojo.req.GetTableInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateTableInfoReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;


public interface TableInfoService {

    boolean add(AddTableInfoReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdateTableInfoReq req);
    
    TableInfo getById(Integer id);
    
    PageResult<TableInfoDetailResp> getDetailPage(GetTableInfoPageReq req);

}
