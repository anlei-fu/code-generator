/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.ProjectMapper;
import com.jasmine.crud.pojo.entity.Project;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddProjectReq;
import com.jasmine.crud.pojo.req.GetProjectPageReq;
import com.jasmine.crud.pojo.req.UpdateProjectReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ProjectService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;

@Service
public class ProjectServiceImpl extends AbstractCrudService<Project> implements ProjectService {

    @Autowired
    private ProjectMapper projectMapper;

    @Override
    public boolean add(AddProjectReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateProjectReq req) {
        return super.update(req);
    }

    @Override
    public PageResult<ProjectDetailResp> getDetailPage(GetProjectPageReq req) {
        return PageHelperUtils.paging(req, () -> projectMapper.getDetailPage(req));
    }

    @Override
    protected Class<Project> getEntityClass(){
        return Project.class;
    }

    @Override
    protected Mapper<Project> getMapper() {
        return  projectMapper;
    }
}

