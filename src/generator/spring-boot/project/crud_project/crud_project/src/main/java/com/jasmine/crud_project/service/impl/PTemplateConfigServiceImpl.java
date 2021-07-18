/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PTemplateConfigMapper;
import com.jasmine.crud_project.pojo.entity.PTemplateConfig;
import com.jasmine.crud_project.pojo.req.AddPTemplateConfigReq;
import com.jasmine.crud_project.pojo.req.GetPTemplateConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePTemplateConfigReq;
import com.jasmine.crud_project.pojo.resp.PTemplateConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PTemplateConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PTemplateConfigServiceImpl extends AbstractCrudService<PTemplateConfig> implements PTemplateConfigService {

    @Autowired
    private PTemplateConfigMapper pTemplateConfigMapper;

    @Override
    public boolean add(AddPTemplateConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePTemplateConfigReq req) {
        return DaoUtil.update(pTemplateConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PTemplateConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PTemplateConfigDetailResp> getDetailPage(GetPTemplateConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pTemplateConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PTemplateConfig> getEntityClass(){
        return PTemplateConfig.class;
    }

    @Override
    protected Mapper<PTemplateConfig> getMapper() {
        return  pTemplateConfigMapper;
    }
}

