/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;

import com.jasmine.crud.pojo.entity.FieldInfo;
import com.jasmine.crud.pojo.req.AddFieldInfoReq;
import com.jasmine.crud.pojo.req.GetFieldInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateFieldInfoBatchReq;
import com.jasmine.crud.pojo.req.UpdateFieldInfoReq;
import com.jasmine.crud.pojo.resp.PageResult;

import java.util.List;

public interface FieldInfoService {

    boolean add(AddFieldInfoReq req);

    boolean deleteById(Integer id);

    int deleteBatch(List<Integer> ids);

    boolean update(UpdateFieldInfoReq req);

    int updateBatch(UpdateFieldInfoBatchReq req);

    FieldInfo getById(Integer id);

    PageResult<FieldInfo> getPage(GetFieldInfoPageReq req);

}
