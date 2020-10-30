/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.UrlMapper;
import com.jasmine.crawler.pojo.entity.Url;
import com.jasmine.crawler.pojo.param.UpdateParams;
import com.jasmine.crawler.pojo.req.AddUrlReq;
import com.jasmine.crawler.pojo.req.GetUrlPageReq;
import com.jasmine.crawler.pojo.req.UpdateUrlReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.UrlService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UrlServiceImpl implements UrlService {

    @Autowired
    private UrlMapper urlMapper;

    @Override
    public boolean add(AddUrlReq req) {
        return urlMapper.add(req) > 0;
    }

    @Override
    public boolean deleteByUrl(String url) {
        return urlMapper.deleteByUrl(url) > 0;
    }

    @Override
    public boolean updateByUrl(String url, UpdateUrlReq req) {
        UpdateParams params = new UpdateParams(url, req);
        return urlMapper.updateByUrl(params) > 0;
    }

    @Override
    public Url getByUrl(String url) {
        return urlMapper.getByUrl(url);
    }

    @Override
    public PageResult<Url> getPage(GetUrlPageReq req) {
        return PageHelperUtils.paging(req, () -> urlMapper.getPage(req));
    }

}

