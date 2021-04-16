/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;

import com.jasmine.crud.pojo.entity.AditionalOption;
import com.jasmine.crud.pojo.req.AddAditionalOptionReq;
import com.jasmine.crud.pojo.req.GetAditionalOptionPageReq;
import com.jasmine.crud.pojo.req.UpdateAditionalOptionBatchReq;
import com.jasmine.crud.pojo.req.UpdateAditionalOptionReq;
import com.jasmine.crud.pojo.resp.PageResult;

import java.util.List;

public interface AditionalOptionService {

    boolean add(AddAditionalOptionReq req);

    boolean deleteById(Integer id);

    int deleteBatch(List<Integer> ids);

    boolean update(UpdateAditionalOptionReq req);

    int updateBatch(UpdateAditionalOptionBatchReq req);

    AditionalOption getById(Integer id);

    PageResult<AditionalOption> getPage(GetAditionalOptionPageReq req);

}
