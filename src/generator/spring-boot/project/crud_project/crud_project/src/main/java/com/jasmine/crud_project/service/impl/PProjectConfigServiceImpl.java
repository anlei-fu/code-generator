/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PProjectConfigMapper;
import com.jasmine.crud_project.pojo.entity.PProjectConfig;
import com.jasmine.crud_project.pojo.req.AddPProjectConfigReq;
import com.jasmine.crud_project.pojo.req.GetPProjectConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePProjectConfigReq;
import com.jasmine.crud_project.pojo.resp.PProjectConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PProjectConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PProjectConfigServiceImpl extends AbstractCrudService<PProjectConfig> implements PProjectConfigService {

    @Autowired
    private PProjectConfigMapper pProjectConfigMapper;

    @Override
    public boolean add(AddPProjectConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePProjectConfigReq req) {
        return DaoUtil.update(pProjectConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PProjectConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PProjectConfigDetailResp> getDetailPage(GetPProjectConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pProjectConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PProjectConfig> getEntityClass(){
        return PProjectConfig.class;
    }

    @Override
    protected Mapper<PProjectConfig> getMapper() {
        return  pProjectConfigMapper;
    }
}

