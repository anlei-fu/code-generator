/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PControlConfigMapper;
import com.jasmine.crud_project.pojo.entity.PControlConfig;
import com.jasmine.crud_project.pojo.req.AddPControlConfigReq;
import com.jasmine.crud_project.pojo.req.GetPControlConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePControlConfigReq;
import com.jasmine.crud_project.pojo.resp.PControlConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PControlConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PControlConfigServiceImpl extends AbstractCrudService<PControlConfig> implements PControlConfigService {

    @Autowired
    private PControlConfigMapper pControlConfigMapper;

    @Override
    public boolean add(AddPControlConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePControlConfigReq req) {
        return DaoUtil.update(pControlConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PControlConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PControlConfigDetailResp> getDetailPage(GetPControlConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pControlConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PControlConfig> getEntityClass(){
        return PControlConfig.class;
    }

    @Override
    protected Mapper<PControlConfig> getMapper() {
        return  pControlConfigMapper;
    }
}

