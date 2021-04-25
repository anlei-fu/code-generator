/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:53:03 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.ThemeConfigMapper;
import com.jasmine.crud.pojo.entity.ThemeConfig;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddThemeConfigReq;
import com.jasmine.crud.pojo.req.GetThemeConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateThemeConfigReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ThemeConfigService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;

@Service
public class ThemeConfigServiceImpl extends AbstractCrudService<ThemeConfig> implements ThemeConfigService {

    @Autowired
    private ThemeConfigMapper themeConfigMapper;

    @Override
    public boolean add(AddThemeConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateThemeConfigReq req) {
        return super.update(req);
    }

    @Override
    public PageResult<ThemeConfigDetailResp> getDetailPage(GetThemeConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> themeConfigMapper.getDetailPage(req));
    }

    @Override
    protected Class<ThemeConfig> getEntityClass(){
        return ThemeConfig.class;
    }

    @Override
    protected Mapper<ThemeConfig> getMapper() {
        return  themeConfigMapper;
    }
}

