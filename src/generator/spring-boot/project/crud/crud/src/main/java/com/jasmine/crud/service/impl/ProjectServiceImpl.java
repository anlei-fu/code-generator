/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.BaseCrudMapper;
import com.jasmine.crud.mapper.ProjectMapper;
import com.jasmine.crud.pojo.entity.Project;
import com.jasmine.crud.pojo.req.AddProjectReq;
import com.jasmine.crud.pojo.req.GetProjectPageReq;
import com.jasmine.crud.pojo.req.UpdateProjectBatchReq;
import com.jasmine.crud.pojo.req.UpdateProjectReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ProjectService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl extends AbstractCrudService<Project> implements ProjectService {

    @Autowired
    private ProjectMapper projectMapper;

    @Override
    public boolean add(AddProjectReq req) {
        return add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return delete(id);
    }

    @Override
    public int deleteBatch(List<Integer> ids) {
        return projectMapper.deleteBatch(ids);
    }

    @Override
    public boolean update(UpdateProjectReq req) {
        return update(req);
    }

    @Override
    public int updateBatch(UpdateProjectBatchReq req) {
        return projectMapper.updateBatch(req);
    }

    @Override
    public Project getById(Integer id) {
        return getById(id);
    }

    @Override
    public PageResult<Project> getPage(GetProjectPageReq req) {
        return PageHelperUtils.paging(req, () -> projectMapper.getPage(req));
    }

    @Override
    protected Class<Project> getEntityClass(){
        return Project.class;
    }

    @Override
    protected BaseCrudMapper<Project> getMapper() {
        return  projectMapper;
    }
}

