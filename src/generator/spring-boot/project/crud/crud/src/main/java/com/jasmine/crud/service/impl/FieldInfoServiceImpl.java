/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.BaseCrudMapper;
import com.jasmine.crud.mapper.FieldInfoMapper;
import com.jasmine.crud.pojo.entity.FieldInfo;
import com.jasmine.crud.pojo.req.AddFieldInfoReq;
import com.jasmine.crud.pojo.req.GetFieldInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateFieldInfoBatchReq;
import com.jasmine.crud.pojo.req.UpdateFieldInfoReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.FieldInfoService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FieldInfoServiceImpl extends AbstractCrudService<FieldInfo> implements FieldInfoService {

    @Autowired
    private FieldInfoMapper fieldInfoMapper;

    @Override
    public boolean add(AddFieldInfoReq req) {
        return add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return delete(id);
    }

    @Override
    public int deleteBatch(List<Integer> ids) {
        return fieldInfoMapper.deleteBatch(ids);
    }

    @Override
    public boolean update(UpdateFieldInfoReq req) {
        return update(req);
    }

    @Override
    public int updateBatch(UpdateFieldInfoBatchReq req) {
        return fieldInfoMapper.updateBatch(req);
    }

    @Override
    public FieldInfo getById(Integer id) {
        return getById(id);
    }

    @Override
    public PageResult<FieldInfo> getPage(GetFieldInfoPageReq req) {
        return PageHelperUtils.paging(req, () -> fieldInfoMapper.getPage(req));
    }

    @Override
    protected Class<FieldInfo> getEntityClass(){
        return FieldInfo.class;
    }

    @Override
    protected BaseCrudMapper<FieldInfo> getMapper() {
        return  fieldInfoMapper;
    }
}

