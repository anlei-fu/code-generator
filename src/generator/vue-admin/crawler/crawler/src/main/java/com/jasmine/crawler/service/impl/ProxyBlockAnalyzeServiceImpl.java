/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.ProxyBlockAnalyzeMapper;
import com.jasmine.crawler.pojo.entity.ProxyBlockAnalyze;
import com.jasmine.crawler.pojo.param.UpdateProxyBlockAnalyzeParams;
import com.jasmine.crawler.pojo.req.AddProxyBlockAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetProxyBlockAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateProxyBlockAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.ProxyBlockAnalyzeService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProxyBlockAnalyzeServiceImpl implements ProxyBlockAnalyzeService {

    @Autowired
    private ProxyBlockAnalyzeMapper proxyBlockAnalyzeMapper;

    @Override
    public boolean add(AddProxyBlockAnalyzeReq req) {
        return proxyBlockAnalyzeMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return proxyBlockAnalyzeMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateProxyBlockAnalyzeReq req) {
        UpdateProxyBlockAnalyzeParams params = new UpdateProxyBlockAnalyzeParams(id, req);
        return proxyBlockAnalyzeMapper.updateById(params) > 0;
    }

    @Override
    public ProxyBlockAnalyze getById(Integer id) {
        return proxyBlockAnalyzeMapper.getById(id);
    }

    @Override
    public PageResult<ProxyBlockAnalyze> getPage(GetProxyBlockAnalyzePageReq req) {
        return PageHelperUtils.paging(req, () -> proxyBlockAnalyzeMapper.getPage(req));
    }

}

