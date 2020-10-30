/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.DynamicUrlJobMapper;
import com.jasmine.crawler.pojo.entity.DynamicUrlJob;
import com.jasmine.crawler.pojo.param.UpdateDynamicUrlJobParams;
import com.jasmine.crawler.pojo.req.AddDynamicUrlJobReq;
import com.jasmine.crawler.pojo.req.GetDynamicUrlJobPageReq;
import com.jasmine.crawler.pojo.req.UpdateDynamicUrlJobReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.DynamicUrlJobService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DynamicUrlJobServiceImpl implements DynamicUrlJobService {

    @Autowired
    private DynamicUrlJobMapper dynamicUrlJobMapper;

    @Override
    public boolean add(AddDynamicUrlJobReq req) {
        return dynamicUrlJobMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return dynamicUrlJobMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateDynamicUrlJobReq req) {
        UpdateDynamicUrlJobParams params = new UpdateDynamicUrlJobParams(id, req);
        return dynamicUrlJobMapper.updateById(params) > 0;
    }

    @Override
    public DynamicUrlJob getById(Integer id) {
        return dynamicUrlJobMapper.getById(id);
    }

    @Override
    public PageResult<DynamicUrlJob> getPage(GetDynamicUrlJobPageReq req) {
        return PageHelperUtils.paging(req, () -> dynamicUrlJobMapper.getPage(req));
    }

}

