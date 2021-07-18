/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.EnumInfoMapper;
import com.jasmine.crud.pojo.entity.EnumInfo;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddEnumInfoReq;
import com.jasmine.crud.pojo.req.GetEnumInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateEnumInfoReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.EnumInfoService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class EnumInfoServiceImpl extends AbstractCrudService<EnumInfo> implements EnumInfoService {

    @Autowired
    private EnumInfoMapper enumInfoMapper;

    @Override
    public boolean add(AddEnumInfoReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(String id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateEnumInfoReq req) {
        return super.update(req);
    }

    @Override
    public EnumInfo getById(String id) {
        return super.getById(id);
    }

    @Override
    public PageResult<EnumInfoDetailResp> getDetailPage(GetEnumInfoPageReq req) {
        return PageHelperUtils.paging(req, () -> enumInfoMapper.getDetailPage(req));
    }


    @Override
    protected Class<EnumInfo> getEntityClass(){
        return EnumInfo.class;
    }

    @Override
    protected Mapper<EnumInfo> getMapper() {
        return  enumInfoMapper;
    }
}

