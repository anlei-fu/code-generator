/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;

import com.jasmine.crud.pojo.entity.ModuleS;
import com.jasmine.crud.pojo.req.AddModuleSReq;
import com.jasmine.crud.pojo.req.GetModuleSPageReq;
import com.jasmine.crud.pojo.req.UpdateModuleSBatchReq;
import com.jasmine.crud.pojo.req.UpdateModuleSReq;
import com.jasmine.crud.pojo.resp.PageResult;

import java.util.List;

public interface ModuleSService {

    boolean add(AddModuleSReq req);

    boolean deleteById(Integer id);

    int deleteBatch(List<Integer> ids);

    boolean update(UpdateModuleSReq req);

    int updateBatch(UpdateModuleSBatchReq req);

    ModuleS getById(Integer id);

    PageResult<ModuleS> getPage(GetModuleSPageReq req);

}
