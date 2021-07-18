/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service;



import com.jasmine.crud_project.pojo.entity.PCheckboxEnum;
import com.jasmine.crud_project.pojo.req.*;
import com.jasmine.crud_project.pojo.req.AddPCheckboxEnumReq;
import com.jasmine.crud_project.pojo.req.GetPCheckboxEnumPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePCheckboxEnumReq;
import com.jasmine.crud_project.pojo.resp.*;
import com.jasmine.crud_project.pojo.resp.PageResult;


public interface PCheckboxEnumService {

    boolean add(AddPCheckboxEnumReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdatePCheckboxEnumReq req);
    
    PCheckboxEnum getById(Integer id);
    
    PageResult<PCheckboxEnumDetailResp> getDetailPage(GetPCheckboxEnumPageReq req);

}
