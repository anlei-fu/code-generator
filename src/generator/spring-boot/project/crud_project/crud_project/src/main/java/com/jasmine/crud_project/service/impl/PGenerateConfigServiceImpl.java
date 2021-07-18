/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PGenerateConfigMapper;
import com.jasmine.crud_project.pojo.entity.PGenerateConfig;
import com.jasmine.crud_project.pojo.req.AddPGenerateConfigReq;
import com.jasmine.crud_project.pojo.req.GetPGenerateConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePGenerateConfigReq;
import com.jasmine.crud_project.pojo.resp.PGenerateConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PGenerateConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PGenerateConfigServiceImpl extends AbstractCrudService<PGenerateConfig> implements PGenerateConfigService {

    @Autowired
    private PGenerateConfigMapper pGenerateConfigMapper;

    @Override
    public boolean add(AddPGenerateConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePGenerateConfigReq req) {
        return DaoUtil.update(pGenerateConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PGenerateConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PGenerateConfigDetailResp> getDetailPage(GetPGenerateConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pGenerateConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PGenerateConfig> getEntityClass(){
        return PGenerateConfig.class;
    }

    @Override
    protected Mapper<PGenerateConfig> getMapper() {
        return  pGenerateConfigMapper;
    }
}

