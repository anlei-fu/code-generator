/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PTableEnumMapper;
import com.jasmine.crud_project.pojo.entity.PTableEnum;
import com.jasmine.crud_project.pojo.req.AddPTableEnumReq;
import com.jasmine.crud_project.pojo.req.GetPTableEnumPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePTableEnumReq;
import com.jasmine.crud_project.pojo.resp.PTableEnumDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PTableEnumService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PTableEnumServiceImpl extends AbstractCrudService<PTableEnum> implements PTableEnumService {

    @Autowired
    private PTableEnumMapper pTableEnumMapper;

    @Override
    public boolean add(AddPTableEnumReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePTableEnumReq req) {
        return DaoUtil.update(pTableEnumMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PTableEnum getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PTableEnumDetailResp> getDetailPage(GetPTableEnumPageReq req) {
        return PageHelperUtils.paging(req, () -> pTableEnumMapper.getDetailPage(req));
    }


    @Override
    protected Class<PTableEnum> getEntityClass(){
        return PTableEnum.class;
    }

    @Override
    protected Mapper<PTableEnum> getMapper() {
        return  pTableEnumMapper;
    }
}

