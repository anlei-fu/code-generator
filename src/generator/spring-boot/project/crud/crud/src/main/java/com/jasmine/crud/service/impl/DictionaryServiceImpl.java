/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.BaseCrudMapper;
import com.jasmine.crud.mapper.DictionaryMapper;
import com.jasmine.crud.pojo.entity.Dictionary;
import com.jasmine.crud.pojo.req.AddDictionaryReq;
import com.jasmine.crud.pojo.req.GetDictionaryPageReq;
import com.jasmine.crud.pojo.req.UpdateDictionaryBatchReq;
import com.jasmine.crud.pojo.req.UpdateDictionaryReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.DictionaryService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DictionaryServiceImpl extends AbstractCrudService<Dictionary> implements DictionaryService {

    @Autowired
    private DictionaryMapper dictionaryMapper;

    @Override
    public boolean add(AddDictionaryReq req) {
        return add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return delete(id);
    }

    @Override
    public int deleteBatch(List<Integer> ids) {
        return dictionaryMapper.deleteBatch(ids);
    }

    @Override
    public boolean update(UpdateDictionaryReq req) {
        return update(req);
    }

    @Override
    public int updateBatch(UpdateDictionaryBatchReq req) {
        return dictionaryMapper.updateBatch(req);
    }

    @Override
    public Dictionary getById(Integer id) {
        return getById(id);
    }

    @Override
    public PageResult<Dictionary> getPage(GetDictionaryPageReq req) {
        return PageHelperUtils.paging(req, () -> dictionaryMapper.getPage(req));
    }

    @Override
    protected Class<Dictionary> getEntityClass(){
        return Dictionary.class;
    }

    @Override
    protected BaseCrudMapper<Dictionary> getMapper() {
        return  dictionaryMapper;
    }
}

