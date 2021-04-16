/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crud.pojo.entity.Project;
import com.jasmine.crud.pojo.req.GetProjectPageReq;
import com.jasmine.crud.pojo.req.UpdateProjectBatchReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface ProjectMapper extends BaseCrudMapper<Project> {

    int deleteBatch(@Param("list") List<Integer> ids);

    int updateBatch(UpdateProjectBatchReq req);

    Page<Project> getPage(GetProjectPageReq req);

}
