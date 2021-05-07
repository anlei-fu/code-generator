/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddValidatorReq;
import com.jasmine.crud.pojo.req.GetValidatorPageReq;
import com.jasmine.crud.pojo.req.UpdateValidatorReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;

public interface ValidatorService {

    boolean add(AddValidatorReq req);

    boolean deleteById(Integer id);

    boolean update(UpdateValidatorReq req);

    PageResult<ValidatorDetailResp> getDetailPage(GetValidatorPageReq req);

}
