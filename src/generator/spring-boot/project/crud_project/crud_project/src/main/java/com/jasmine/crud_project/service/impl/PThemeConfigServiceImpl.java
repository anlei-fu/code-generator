/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PThemeConfigMapper;
import com.jasmine.crud_project.pojo.entity.PThemeConfig;
import com.jasmine.crud_project.pojo.req.AddPThemeConfigReq;
import com.jasmine.crud_project.pojo.req.GetPThemeConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePThemeConfigReq;
import com.jasmine.crud_project.pojo.resp.PThemeConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PThemeConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PThemeConfigServiceImpl extends AbstractCrudService<PThemeConfig> implements PThemeConfigService {

    @Autowired
    private PThemeConfigMapper pThemeConfigMapper;

    @Override
    public boolean add(AddPThemeConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePThemeConfigReq req) {
        return DaoUtil.update(pThemeConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PThemeConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PThemeConfigDetailResp> getDetailPage(GetPThemeConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pThemeConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PThemeConfig> getEntityClass(){
        return PThemeConfig.class;
    }

    @Override
    protected Mapper<PThemeConfig> getMapper() {
        return  pThemeConfigMapper;
    }
}

