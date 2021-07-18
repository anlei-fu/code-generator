/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PFrontendConfigMapper;
import com.jasmine.crud_project.pojo.entity.PFrontendConfig;
import com.jasmine.crud_project.pojo.req.AddPFrontendConfigReq;
import com.jasmine.crud_project.pojo.req.GetPFrontendConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePFrontendConfigReq;
import com.jasmine.crud_project.pojo.resp.PFrontendConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PFrontendConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PFrontendConfigServiceImpl extends AbstractCrudService<PFrontendConfig> implements PFrontendConfigService {

    @Autowired
    private PFrontendConfigMapper pFrontendConfigMapper;

    @Override
    public boolean add(AddPFrontendConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePFrontendConfigReq req) {
        return DaoUtil.update(pFrontendConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PFrontendConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PFrontendConfigDetailResp> getDetailPage(GetPFrontendConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pFrontendConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PFrontendConfig> getEntityClass(){
        return PFrontendConfig.class;
    }

    @Override
    protected Mapper<PFrontendConfig> getMapper() {
        return  pFrontendConfigMapper;
    }
}

