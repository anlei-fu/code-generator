/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PEnumMapper;
import com.jasmine.crud_project.pojo.entity.PEnum;
import com.jasmine.crud_project.pojo.req.AddPEnumReq;
import com.jasmine.crud_project.pojo.req.GetPEnumPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePEnumReq;
import com.jasmine.crud_project.pojo.resp.PEnumDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PEnumService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PEnumServiceImpl extends AbstractCrudService<PEnum> implements PEnumService {

    @Autowired
    private PEnumMapper pEnumMapper;

    @Override
    public boolean add(AddPEnumReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePEnumReq req) {
        return DaoUtil.update(pEnumMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PEnum getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PEnumDetailResp> getDetailPage(GetPEnumPageReq req) {
        return PageHelperUtils.paging(req, () -> pEnumMapper.getDetailPage(req));
    }


    @Override
    protected Class<PEnum> getEntityClass(){
        return PEnum.class;
    }

    @Override
    protected Mapper<PEnum> getMapper() {
        return  pEnumMapper;
    }
}

