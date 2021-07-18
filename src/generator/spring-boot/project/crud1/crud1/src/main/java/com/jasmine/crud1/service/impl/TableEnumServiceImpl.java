/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.service.impl;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.mapper.TableEnumMapper;
import com.jasmine.crud1.pojo.entity.TableEnum;
import com.jasmine.crud1.pojo.req.AddTableEnumReq;
import com.jasmine.crud1.pojo.req.GetTableEnumPageReq;
import com.jasmine.crud1.pojo.req.UpdateTableEnumReq;
import com.jasmine.crud1.pojo.resp.PageResult;
import com.jasmine.crud1.service.TableEnumService;
import com.jasmine.crud1.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class TableEnumServiceImpl extends AbstractCrudService<TableEnum> implements TableEnumService {

    @Autowired
    private TableEnumMapper tableEnumMapper;

    @Override
    public boolean add(AddTableEnumReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateTableEnumReq req) {
        return super.update(req);
    }

    @Override
    public PageResult<TableEnumDetailResp> getDetailPage(GetTableEnumPageReq req) {
        return PageHelperUtils.paging(req, () -> tableEnumMapper.getDetailPage(req));
    }


    @Override
    protected Class<TableEnum> getEntityClass(){
        return TableEnum.class;
    }

    @Override
    protected Mapper<TableEnum> getMapper() {
        return  tableEnumMapper;
    }
}

