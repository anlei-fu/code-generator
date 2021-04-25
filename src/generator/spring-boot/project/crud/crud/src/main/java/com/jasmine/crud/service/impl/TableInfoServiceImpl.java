/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:53:03 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.TableInfoMapper;
import com.jasmine.crud.pojo.entity.TableInfo;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddTableInfoReq;
import com.jasmine.crud.pojo.req.GetTableInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateTableInfoReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.TableInfoService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;

@Service
public class TableInfoServiceImpl extends AbstractCrudService<TableInfo> implements TableInfoService {

    @Autowired
    private TableInfoMapper tableInfoMapper;

    @Override
    public boolean add(AddTableInfoReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateTableInfoReq req) {
        return super.update(req);
    }

    @Override
    public PageResult<TableInfoDetailResp> getDetailPage(GetTableInfoPageReq req) {
        return PageHelperUtils.paging(req, () -> tableInfoMapper.getDetailPage(req));
    }

    @Override
    protected Class<TableInfo> getEntityClass(){
        return TableInfo.class;
    }

    @Override
    protected Mapper<TableInfo> getMapper() {
        return  tableInfoMapper;
    }
}

