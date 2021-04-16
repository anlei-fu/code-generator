/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.BaseCrudMapper;
import com.jasmine.crud.mapper.ThemeConfigMapper;
import com.jasmine.crud.pojo.entity.ThemeConfig;
import com.jasmine.crud.pojo.req.AddThemeConfigReq;
import com.jasmine.crud.pojo.req.GetThemeConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateThemeConfigBatchReq;
import com.jasmine.crud.pojo.req.UpdateThemeConfigReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ThemeConfigService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThemeConfigServiceImpl extends AbstractCrudService<ThemeConfig> implements ThemeConfigService {

    @Autowired
    private ThemeConfigMapper themeConfigMapper;

    @Override
    public boolean add(AddThemeConfigReq req) {
        return add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return delete(id);
    }

    @Override
    public int deleteBatch(List<Integer> ids) {
        return themeConfigMapper.deleteBatch(ids);
    }

    @Override
    public boolean update(UpdateThemeConfigReq req) {
        return update(req);
    }

    @Override
    public int updateBatch(UpdateThemeConfigBatchReq req) {
        return themeConfigMapper.updateBatch(req);
    }

    @Override
    public ThemeConfig getById(Integer id) {
        return getById(id);
    }

    @Override
    public PageResult<ThemeConfig> getPage(GetThemeConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> themeConfigMapper.getPage(req));
    }

    @Override
    protected Class<ThemeConfig> getEntityClass(){
        return ThemeConfig.class;
    }

    @Override
    protected BaseCrudMapper<ThemeConfig> getMapper() {
        return  themeConfigMapper;
    }
}

