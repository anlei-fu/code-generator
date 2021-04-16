/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;

import com.jasmine.crud.pojo.entity.ThemeConfig;
import com.jasmine.crud.pojo.req.AddThemeConfigReq;
import com.jasmine.crud.pojo.req.GetThemeConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateThemeConfigBatchReq;
import com.jasmine.crud.pojo.req.UpdateThemeConfigReq;
import com.jasmine.crud.pojo.resp.PageResult;

import java.util.List;

public interface ThemeConfigService {

    boolean add(AddThemeConfigReq req);

    boolean deleteById(Integer id);

    int deleteBatch(List<Integer> ids);

    boolean update(UpdateThemeConfigReq req);

    int updateBatch(UpdateThemeConfigBatchReq req);

    ThemeConfig getById(Integer id);

    PageResult<ThemeConfig> getPage(GetThemeConfigPageReq req);

}
