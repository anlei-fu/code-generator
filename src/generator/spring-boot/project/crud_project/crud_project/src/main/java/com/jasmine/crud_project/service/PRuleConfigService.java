/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service;



import com.jasmine.crud_project.pojo.entity.PRuleConfig;
import com.jasmine.crud_project.pojo.req.*;
import com.jasmine.crud_project.pojo.req.AddPRuleConfigReq;
import com.jasmine.crud_project.pojo.req.GetPRuleConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePRuleConfigReq;
import com.jasmine.crud_project.pojo.resp.*;
import com.jasmine.crud_project.pojo.resp.PageResult;


public interface PRuleConfigService {

    boolean add(AddPRuleConfigReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdatePRuleConfigReq req);
    
    PRuleConfig getById(Integer id);
    
    PageResult<PRuleConfigDetailResp> getDetailPage(GetPRuleConfigPageReq req);

}
