/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.ProxyMapper;
import com.jasmine.crawler.pojo.entity.Proxy;
import com.jasmine.crawler.pojo.param.UpdateProxyParams;
import com.jasmine.crawler.pojo.req.AddProxyReq;
import com.jasmine.crawler.pojo.req.GetProxyPageReq;
import com.jasmine.crawler.pojo.req.UpdateProxyReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.ProxyService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProxyServiceImpl implements ProxyService {

    @Autowired
    private ProxyMapper proxyMapper;

    @Override
    public boolean add(AddProxyReq req) {
        return proxyMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return proxyMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateProxyReq req) {
        UpdateProxyParams params = new UpdateProxyParams(id, req);
        return proxyMapper.updateById(params) > 0;
    }

    @Override
    public Proxy getById(Integer id) {
        return proxyMapper.getById(id);
    }

    @Override
    public PageResult<Proxy> getPage(GetProxyPageReq req) {
        return PageHelperUtils.paging(req, () -> proxyMapper.getPage(req));
    }

}

