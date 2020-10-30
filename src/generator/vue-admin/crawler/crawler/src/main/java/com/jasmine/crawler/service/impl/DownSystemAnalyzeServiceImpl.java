/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.DownSystemAnalyzeMapper;
import com.jasmine.crawler.pojo.entity.DownSystemAnalyze;
import com.jasmine.crawler.pojo.param.UpdateDownSystemAnalyzeParams;
import com.jasmine.crawler.pojo.req.AddDownSystemAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetDownSystemAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateDownSystemAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.DownSystemAnalyzeService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DownSystemAnalyzeServiceImpl implements DownSystemAnalyzeService {

    @Autowired
    private DownSystemAnalyzeMapper downSystemAnalyzeMapper;

    @Override
    public boolean add(AddDownSystemAnalyzeReq req) {
        return downSystemAnalyzeMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return downSystemAnalyzeMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateDownSystemAnalyzeReq req) {
        UpdateDownSystemAnalyzeParams params = new UpdateDownSystemAnalyzeParams(id, req);
        return downSystemAnalyzeMapper.updateById(params) > 0;
    }

    @Override
    public DownSystemAnalyze getById(Integer id) {
        return downSystemAnalyzeMapper.getById(id);
    }

    @Override
    public PageResult<DownSystemAnalyze> getPage(GetDownSystemAnalyzePageReq req) {
        return PageHelperUtils.paging(req, () -> downSystemAnalyzeMapper.getPage(req));
    }

}

