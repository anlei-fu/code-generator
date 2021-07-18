/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PAnalyzeConfigMapper;
import com.jasmine.crud_project.pojo.entity.PAnalyzeConfig;
import com.jasmine.crud_project.pojo.req.AddPAnalyzeConfigReq;
import com.jasmine.crud_project.pojo.req.GetPAnalyzeConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePAnalyzeConfigReq;
import com.jasmine.crud_project.pojo.resp.PAnalyzeConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PAnalyzeConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PAnalyzeConfigServiceImpl extends AbstractCrudService<PAnalyzeConfig> implements PAnalyzeConfigService {

    @Autowired
    private PAnalyzeConfigMapper pAnalyzeConfigMapper;

    @Override
    public boolean add(AddPAnalyzeConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePAnalyzeConfigReq req) {
        return DaoUtil.update(pAnalyzeConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PAnalyzeConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PAnalyzeConfigDetailResp> getDetailPage(GetPAnalyzeConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pAnalyzeConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PAnalyzeConfig> getEntityClass(){
        return PAnalyzeConfig.class;
    }

    @Override
    protected Mapper<PAnalyzeConfig> getMapper() {
        return  pAnalyzeConfigMapper;
    }
}

