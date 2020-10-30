/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.CookieMapper;
import com.jasmine.crawler.pojo.entity.Cookie;
import com.jasmine.crawler.pojo.param.UpdateCookieParams;
import com.jasmine.crawler.pojo.req.AddCookieReq;
import com.jasmine.crawler.pojo.req.GetCookiePageReq;
import com.jasmine.crawler.pojo.req.UpdateCookieReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.CookieService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CookieServiceImpl implements CookieService {

    @Autowired
    private CookieMapper cookieMapper;

    @Override
    public boolean add(AddCookieReq req) {
        return cookieMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return cookieMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateCookieReq req) {
        UpdateCookieParams params = new UpdateCookieParams(id, req);
        return cookieMapper.updateById(params) > 0;
    }

    @Override
    public Cookie getById(Integer id) {
        return cookieMapper.getById(id);
    }

    @Override
    public PageResult<Cookie> getPage(GetCookiePageReq req) {
        return PageHelperUtils.paging(req, () -> cookieMapper.getPage(req));
    }

}

