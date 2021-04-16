/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;

import com.jasmine.crud.pojo.entity.Dictionary;
import com.jasmine.crud.pojo.req.AddDictionaryReq;
import com.jasmine.crud.pojo.req.GetDictionaryPageReq;
import com.jasmine.crud.pojo.req.UpdateDictionaryBatchReq;
import com.jasmine.crud.pojo.req.UpdateDictionaryReq;
import com.jasmine.crud.pojo.resp.PageResult;

import java.util.List;

public interface DictionaryService {

    boolean add(AddDictionaryReq req);

    boolean deleteById(Integer id);

    int deleteBatch(List<Integer> ids);

    boolean update(UpdateDictionaryReq req);

    int updateBatch(UpdateDictionaryBatchReq req);

    Dictionary getById(Integer id);

    PageResult<Dictionary> getPage(GetDictionaryPageReq req);

}
