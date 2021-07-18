/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PTableMapper;
import com.jasmine.crud_project.pojo.entity.PTable;
import com.jasmine.crud_project.pojo.req.AddPTableReq;
import com.jasmine.crud_project.pojo.req.GetPTablePageReq;
import com.jasmine.crud_project.pojo.req.UpdatePTableReq;
import com.jasmine.crud_project.pojo.resp.PTableDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PTableService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PTableServiceImpl extends AbstractCrudService<PTable> implements PTableService {

    @Autowired
    private PTableMapper pTableMapper;

    @Override
    public boolean add(AddPTableReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePTableReq req) {
        return DaoUtil.update(pTableMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PTable getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PTableDetailResp> getDetailPage(GetPTablePageReq req) {
        return PageHelperUtils.paging(req, () -> pTableMapper.getDetailPage(req));
    }


    @Override
    protected Class<PTable> getEntityClass(){
        return PTable.class;
    }

    @Override
    protected Mapper<PTable> getMapper() {
        return  pTableMapper;
    }
}

