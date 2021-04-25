/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:53:03 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.FieldInfoMapper;
import com.jasmine.crud.pojo.entity.FieldInfo;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddFieldInfoReq;
import com.jasmine.crud.pojo.req.GetFieldInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateFieldInfoReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.FieldInfoService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;

@Service
public class FieldInfoServiceImpl extends AbstractCrudService<FieldInfo> implements FieldInfoService {

    @Autowired
    private FieldInfoMapper fieldInfoMapper;

    @Override
    public boolean add(AddFieldInfoReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateFieldInfoReq req) {
        return super.update(req);
    }

    @Override
    public PageResult<FieldInfoDetailResp> getDetailPage(GetFieldInfoPageReq req) {
        return PageHelperUtils.paging(req, () -> fieldInfoMapper.getDetailPage(req));
    }

    @Override
    protected Class<FieldInfo> getEntityClass(){
        return FieldInfo.class;
    }

    @Override
    protected Mapper<FieldInfo> getMapper() {
        return  fieldInfoMapper;
    }
}

