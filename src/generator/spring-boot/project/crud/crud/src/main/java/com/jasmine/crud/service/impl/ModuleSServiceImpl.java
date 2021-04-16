/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.BaseCrudMapper;
import com.jasmine.crud.mapper.ModuleSMapper;
import com.jasmine.crud.pojo.entity.ModuleS;
import com.jasmine.crud.pojo.req.AddModuleSReq;
import com.jasmine.crud.pojo.req.GetModuleSPageReq;
import com.jasmine.crud.pojo.req.UpdateModuleSBatchReq;
import com.jasmine.crud.pojo.req.UpdateModuleSReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ModuleSService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleSServiceImpl extends AbstractCrudService<ModuleS> implements ModuleSService {

    @Autowired
    private ModuleSMapper moduleSMapper;

    @Override
    public boolean add(AddModuleSReq req) {
        return add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return delete(id);
    }

    @Override
    public int deleteBatch(List<Integer> ids) {
        return moduleSMapper.deleteBatch(ids);
    }

    @Override
    public boolean update(UpdateModuleSReq req) {
        return update(req);
    }

    @Override
    public int updateBatch(UpdateModuleSBatchReq req) {
        return moduleSMapper.updateBatch(req);
    }

    @Override
    public ModuleS getById(Integer id) {
        return getById(id);
    }

    @Override
    public PageResult<ModuleS> getPage(GetModuleSPageReq req) {
        return PageHelperUtils.paging(req, () -> moduleSMapper.getPage(req));
    }

    @Override
    protected Class<ModuleS> getEntityClass(){
        return ModuleS.class;
    }

    @Override
    protected BaseCrudMapper<ModuleS> getMapper() {
        return  moduleSMapper;
    }
}

