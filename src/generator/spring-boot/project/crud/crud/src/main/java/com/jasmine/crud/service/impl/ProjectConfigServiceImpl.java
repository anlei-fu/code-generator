/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.ProjectConfigMapper;
import com.jasmine.crud.pojo.entity.ProjectConfig;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddProjectConfigReq;
import com.jasmine.crud.pojo.req.GetProjectConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateProjectConfigReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ProjectConfigService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class ProjectConfigServiceImpl extends AbstractCrudService<ProjectConfig> implements ProjectConfigService {

    @Autowired
    private ProjectConfigMapper projectConfigMapper;

    @Override
    public boolean add(AddProjectConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateProjectConfigReq req) {
        return super.update(req);
    }

    @Override
    public ProjectConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<ProjectConfigDetailResp> getDetailPage(GetProjectConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> projectConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<ProjectConfig> getEntityClass(){
        return ProjectConfig.class;
    }

    @Override
    protected Mapper<ProjectConfig> getMapper() {
        return  projectConfigMapper;
    }
}

