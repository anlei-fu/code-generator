/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service;



import com.jasmine.crud_project.pojo.entity.PTableEnum;
import com.jasmine.crud_project.pojo.req.*;
import com.jasmine.crud_project.pojo.req.AddPTableEnumReq;
import com.jasmine.crud_project.pojo.req.GetPTableEnumPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePTableEnumReq;
import com.jasmine.crud_project.pojo.resp.*;
import com.jasmine.crud_project.pojo.resp.PageResult;


public interface PTableEnumService {

    boolean add(AddPTableEnumReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdatePTableEnumReq req);
    
    PTableEnum getById(Integer id);
    
    PageResult<PTableEnumDetailResp> getDetailPage(GetPTableEnumPageReq req);

}
