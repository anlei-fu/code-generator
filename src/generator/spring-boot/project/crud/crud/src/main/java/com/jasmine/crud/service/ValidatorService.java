/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;

import com.jasmine.crud.pojo.entity.Validator;
import com.jasmine.crud.pojo.req.AddValidatorReq;
import com.jasmine.crud.pojo.req.GetValidatorPageReq;
import com.jasmine.crud.pojo.req.UpdateValidatorBatchReq;
import com.jasmine.crud.pojo.req.UpdateValidatorReq;
import com.jasmine.crud.pojo.resp.PageResult;

import java.util.List;

public interface ValidatorService {

    boolean add(AddValidatorReq req);

    boolean deleteById(Integer id);

    int deleteBatch(List<Integer> ids);

    boolean update(UpdateValidatorReq req);

    int updateBatch(UpdateValidatorBatchReq req);

    Validator getById(Integer id);

    PageResult<Validator> getPage(GetValidatorPageReq req);

}
