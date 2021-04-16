/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.BaseCrudMapper;
import com.jasmine.crud.mapper.TableInfoMapper;
import com.jasmine.crud.pojo.entity.TableInfo;
import com.jasmine.crud.pojo.req.AddTableInfoReq;
import com.jasmine.crud.pojo.req.GetTableInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateTableInfoBatchReq;
import com.jasmine.crud.pojo.req.UpdateTableInfoReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.TableInfoService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TableInfoServiceImpl extends AbstractCrudService<TableInfo> implements TableInfoService {

    @Autowired
    private TableInfoMapper tableInfoMapper;

    @Override
    public boolean add(AddTableInfoReq req) {
        return add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return delete(id);
    }

    @Override
    public int deleteBatch(List<Integer> ids) {
        return tableInfoMapper.deleteBatch(ids);
    }

    @Override
    public boolean update(UpdateTableInfoReq req) {
        return update(req);
    }

    @Override
    public int updateBatch(UpdateTableInfoBatchReq req) {
        return tableInfoMapper.updateBatch(req);
    }

    @Override
    public TableInfo getById(Integer id) {
        return getById(id);
    }

    @Override
    public PageResult<TableInfo> getPage(GetTableInfoPageReq req) {
        return PageHelperUtils.paging(req, () -> tableInfoMapper.getPage(req));
    }

    @Override
    protected Class<TableInfo> getEntityClass(){
        return TableInfo.class;
    }

    @Override
    protected BaseCrudMapper<TableInfo> getMapper() {
        return  tableInfoMapper;
    }
}

