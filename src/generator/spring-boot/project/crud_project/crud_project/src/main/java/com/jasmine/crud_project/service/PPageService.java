/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service;



import com.jasmine.crud_project.pojo.entity.PPage;
import com.jasmine.crud_project.pojo.req.*;
import com.jasmine.crud_project.pojo.req.AddPPageReq;
import com.jasmine.crud_project.pojo.req.GetPPagePageReq;
import com.jasmine.crud_project.pojo.req.UpdatePPageReq;
import com.jasmine.crud_project.pojo.resp.*;
import com.jasmine.crud_project.pojo.resp.PageResult;


public interface PPageService {

    boolean add(AddPPageReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdatePPageReq req);
    
    PPage getById(Integer id);
    
    PageResult<PPageDetailResp> getDetailPage(GetPPagePageReq req);

}
