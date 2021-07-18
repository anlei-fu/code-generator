/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PPageMapper;
import com.jasmine.crud_project.pojo.entity.PPage;
import com.jasmine.crud_project.pojo.req.AddPPageReq;
import com.jasmine.crud_project.pojo.req.GetPPagePageReq;
import com.jasmine.crud_project.pojo.req.UpdatePPageReq;
import com.jasmine.crud_project.pojo.resp.PPageDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PPageService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PPageServiceImpl extends AbstractCrudService<PPage> implements PPageService {

    @Autowired
    private PPageMapper pPageMapper;

    @Override
    public boolean add(AddPPageReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePPageReq req) {
        return DaoUtil.update(pPageMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PPage getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PPageDetailResp> getDetailPage(GetPPagePageReq req) {
        return PageHelperUtils.paging(req, () -> pPageMapper.getDetailPage(req));
    }


    @Override
    protected Class<PPage> getEntityClass(){
        return PPage.class;
    }

    @Override
    protected Mapper<PPage> getMapper() {
        return  pPageMapper;
    }
}

