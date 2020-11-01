/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.ProxyAnalyzeMapper;
import com.jasmine.crawler.pojo.entity.ProxyAnalyze;
import com.jasmine.crawler.pojo.param.UpdateProxyAnalyzeParams;
import com.jasmine.crawler.pojo.req.AddProxyAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetProxyAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateProxyAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.ProxyAnalyzeService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProxyAnalyzeServiceImpl implements ProxyAnalyzeService {

    @Autowired
    private ProxyAnalyzeMapper proxyAnalyzeMapper;

    @Override
    public boolean add(AddProxyAnalyzeReq req) {
        return proxyAnalyzeMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return proxyAnalyzeMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateProxyAnalyzeReq req) {
        UpdateProxyAnalyzeParams params = new UpdateProxyAnalyzeParams(id, req);
        return proxyAnalyzeMapper.updateById(params) > 0;
    }

    @Override
    public ProxyAnalyze getById(Integer id) {
        return proxyAnalyzeMapper.getById(id);
    }

    @Override
    public PageResult<ProxyAnalyze> getPage(GetProxyAnalyzePageReq req) {
        return PageHelperUtils.paging(req, () -> proxyAnalyzeMapper.getPage(req));
    }

}

