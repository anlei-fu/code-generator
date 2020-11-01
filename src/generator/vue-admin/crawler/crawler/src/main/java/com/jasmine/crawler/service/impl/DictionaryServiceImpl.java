/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.DictionaryMapper;
import com.jasmine.crawler.pojo.entity.Dictionary;
import com.jasmine.crawler.pojo.param.AddDictionaryParams;
import com.jasmine.crawler.pojo.param.UpdateDictionaryParams;
import com.jasmine.crawler.pojo.req.AddDictionaryReq;
import com.jasmine.crawler.pojo.req.GetDictionaryPageReq;
import com.jasmine.crawler.pojo.req.UpdateDictionaryReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.DictionaryService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DictionaryServiceImpl implements DictionaryService {

    @Autowired
    private DictionaryMapper dictionaryMapper;

    @Override
    public boolean add(String createUser, AddDictionaryReq req) {
        AddDictionaryParams params = new AddDictionaryParams(createUser, req);
        return dictionaryMapper.add(params) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return dictionaryMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, String lastUpdateUser, UpdateDictionaryReq req) {
        UpdateDictionaryParams params = new UpdateDictionaryParams(id, lastUpdateUser, req);
        return dictionaryMapper.updateById(params) > 0;
    }

    @Override
    public Dictionary getById(Integer id) {
        return dictionaryMapper.getById(id);
    }

    @Override
    public PageResult<Dictionary> getPage(GetDictionaryPageReq req) {
        return PageHelperUtils.paging(req, () -> dictionaryMapper.getPage(req));
    }

}

