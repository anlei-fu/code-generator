/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;

import com.jasmine.crud.pojo.entity.TableInfo;
import com.jasmine.crud.pojo.req.AddTableInfoReq;
import com.jasmine.crud.pojo.req.GetTableInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateTableInfoBatchReq;
import com.jasmine.crud.pojo.req.UpdateTableInfoReq;
import com.jasmine.crud.pojo.resp.PageResult;

import java.util.List;

public interface TableInfoService {

    boolean add(AddTableInfoReq req);

    boolean deleteById(Integer id);

    int deleteBatch(List<Integer> ids);

    boolean update(UpdateTableInfoReq req);

    int updateBatch(UpdateTableInfoBatchReq req);

    TableInfo getById(Integer id);

    PageResult<TableInfo> getPage(GetTableInfoPageReq req);

}
