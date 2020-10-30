/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.DownSystemMapper;
import com.jasmine.crawler.pojo.entity.DownSystem;
import com.jasmine.crawler.pojo.param.UpdateDownSystemParams;
import com.jasmine.crawler.pojo.req.AddDownSystemReq;
import com.jasmine.crawler.pojo.req.GetDownSystemPageReq;
import com.jasmine.crawler.pojo.req.UpdateDownSystemReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.DownSystemService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DownSystemServiceImpl implements DownSystemService {

    @Autowired
    private DownSystemMapper downSystemMapper;

    @Override
    public boolean add(AddDownSystemReq req) {
        return downSystemMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return downSystemMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateDownSystemReq req) {
        UpdateDownSystemParams params = new UpdateDownSystemParams(id, req);
        return downSystemMapper.updateById(params) > 0;
    }

    @Override
    public DownSystem getById(Integer id) {
        return downSystemMapper.getById(id);
    }

    @Override
    public PageResult<DownSystem> getPage(GetDownSystemPageReq req) {
        return PageHelperUtils.paging(req, () -> downSystemMapper.getPage(req));
    }

}

