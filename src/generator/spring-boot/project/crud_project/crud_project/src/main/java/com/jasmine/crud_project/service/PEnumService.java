/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service;



import com.jasmine.crud_project.pojo.entity.PEnum;
import com.jasmine.crud_project.pojo.req.*;
import com.jasmine.crud_project.pojo.req.AddPEnumReq;
import com.jasmine.crud_project.pojo.req.GetPEnumPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePEnumReq;
import com.jasmine.crud_project.pojo.resp.*;
import com.jasmine.crud_project.pojo.resp.PageResult;


public interface PEnumService {

    boolean add(AddPEnumReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdatePEnumReq req);
    
    PEnum getById(Integer id);
    
    PageResult<PEnumDetailResp> getDetailPage(GetPEnumPageReq req);

}
