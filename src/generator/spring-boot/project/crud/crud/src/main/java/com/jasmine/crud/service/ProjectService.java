/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service;

import com.jasmine.crud.pojo.entity.Project;
import com.jasmine.crud.pojo.req.AddProjectReq;
import com.jasmine.crud.pojo.req.GetProjectPageReq;
import com.jasmine.crud.pojo.req.UpdateProjectBatchReq;
import com.jasmine.crud.pojo.req.UpdateProjectReq;
import com.jasmine.crud.pojo.resp.PageResult;

import java.util.List;

public interface ProjectService {

    boolean add(AddProjectReq req);

    boolean deleteById(Integer id);

    int deleteBatch(List<Integer> ids);

    boolean update(UpdateProjectReq req);

    int updateBatch(UpdateProjectBatchReq req);

    Project getById(Integer id);

    PageResult<Project> getPage(GetProjectPageReq req);

}
