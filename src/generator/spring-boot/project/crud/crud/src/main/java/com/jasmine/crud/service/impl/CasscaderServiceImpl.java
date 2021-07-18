/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.CasscaderMapper;
import com.jasmine.crud.pojo.entity.Casscader;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddCasscaderReq;
import com.jasmine.crud.pojo.req.GetCasscaderPageReq;
import com.jasmine.crud.pojo.req.UpdateCasscaderReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.CasscaderService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class CasscaderServiceImpl extends AbstractCrudService<Casscader> implements CasscaderService {

    @Autowired
    private CasscaderMapper casscaderMapper;

    @Override
    public boolean add(AddCasscaderReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateCasscaderReq req) {
        return super.update(req);
    }

    @Override
    public Casscader getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<CasscaderDetailResp> getDetailPage(GetCasscaderPageReq req) {
        return PageHelperUtils.paging(req, () -> casscaderMapper.getDetailPage(req));
    }


    @Override
    protected Class<Casscader> getEntityClass(){
        return Casscader.class;
    }

    @Override
    protected Mapper<Casscader> getMapper() {
        return  casscaderMapper;
    }
}

