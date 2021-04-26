/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.DictionaryMapper;
import com.jasmine.crud.pojo.entity.Dictionary;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddDictionaryReq;
import com.jasmine.crud.pojo.req.GetDictionaryPageReq;
import com.jasmine.crud.pojo.req.UpdateDictionaryReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.DictionaryService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;

@Service
public class DictionaryServiceImpl extends AbstractCrudService<Dictionary> implements DictionaryService {

    @Autowired
    private DictionaryMapper dictionaryMapper;

    @Override
    public boolean add(AddDictionaryReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateDictionaryReq req) {
        return super.update(req);
    }

    @Override
    public PageResult<DictionaryDetailResp> getDetailPage(GetDictionaryPageReq req) {
        return PageHelperUtils.paging(req, () -> dictionaryMapper.getDetailPage(req));
    }

    @Override
    protected Class<Dictionary> getEntityClass(){
        return Dictionary.class;
    }

    @Override
    protected Mapper<Dictionary> getMapper() {
        return  dictionaryMapper;
    }
}

