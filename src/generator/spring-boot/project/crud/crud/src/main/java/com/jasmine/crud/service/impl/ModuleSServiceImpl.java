/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.ModuleSMapper;
import com.jasmine.crud.pojo.entity.ModuleS;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddModuleSReq;
import com.jasmine.crud.pojo.req.GetModuleSPageReq;
import com.jasmine.crud.pojo.req.UpdateModuleSReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ModuleSService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;

@Service
public class ModuleSServiceImpl extends AbstractCrudService<ModuleS> implements ModuleSService {

    @Autowired
    private ModuleSMapper moduleSMapper;

    @Override
    public boolean add(AddModuleSReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateModuleSReq req) {
        return super.update(req);
    }

    @Override
    public PageResult<ModuleSDetailResp> getDetailPage(GetModuleSPageReq req) {
        return PageHelperUtils.paging(req, () -> moduleSMapper.getDetailPage(req));
    }

    @Override
    protected Class<ModuleS> getEntityClass(){
        return ModuleS.class;
    }

    @Override
    protected Mapper<ModuleS> getMapper() {
        return  moduleSMapper;
    }
}

