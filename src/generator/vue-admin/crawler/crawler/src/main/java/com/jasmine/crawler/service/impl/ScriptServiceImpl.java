/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.ScriptMapper;
import com.jasmine.crawler.pojo.entity.Script;
import com.jasmine.crawler.pojo.param.UpdateScriptParams;
import com.jasmine.crawler.pojo.req.AddScriptReq;
import com.jasmine.crawler.pojo.req.GetScriptPageReq;
import com.jasmine.crawler.pojo.req.UpdateScriptReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.ScriptService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScriptServiceImpl implements ScriptService {

    @Autowired
    private ScriptMapper scriptMapper;

    @Override
    public boolean add(AddScriptReq req) {
        return scriptMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return scriptMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateScriptReq req) {
        UpdateScriptParams params = new UpdateScriptParams(id, req);
        return scriptMapper.updateById(params) > 0;
    }

    @Override
    public Script getById(Integer id) {
        return scriptMapper.getById(id);
    }

    @Override
    public PageResult<Script> getPage(GetScriptPageReq req) {
        return PageHelperUtils.paging(req, () -> scriptMapper.getPage(req));
    }

}

