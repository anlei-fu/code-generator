/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;



import com.jasmine.crud.pojo.entity.Checkbox;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddCheckboxReq;
import com.jasmine.crud.pojo.req.GetCheckboxPageReq;
import com.jasmine.crud.pojo.req.UpdateCheckboxReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;


public interface CheckboxService {

    boolean add(AddCheckboxReq req);
    
    boolean deleteById(Integer id);
    
    boolean update(UpdateCheckboxReq req);
    
    Checkbox getById(Integer id);
    
    PageResult<CheckboxDetailResp> getDetailPage(GetCheckboxPageReq req);

}
