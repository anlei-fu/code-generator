/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PBackendConfigMapper;
import com.jasmine.crud_project.pojo.entity.PBackendConfig;
import com.jasmine.crud_project.pojo.req.AddPBackendConfigReq;
import com.jasmine.crud_project.pojo.req.GetPBackendConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePBackendConfigReq;
import com.jasmine.crud_project.pojo.resp.PBackendConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PBackendConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PBackendConfigServiceImpl extends AbstractCrudService<PBackendConfig> implements PBackendConfigService {

    @Autowired
    private PBackendConfigMapper pBackendConfigMapper;

    @Override
    public boolean add(AddPBackendConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePBackendConfigReq req) {
        return DaoUtil.update(pBackendConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PBackendConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PBackendConfigDetailResp> getDetailPage(GetPBackendConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pBackendConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PBackendConfig> getEntityClass(){
        return PBackendConfig.class;
    }

    @Override
    protected Mapper<PBackendConfig> getMapper() {
        return  pBackendConfigMapper;
    }
}

