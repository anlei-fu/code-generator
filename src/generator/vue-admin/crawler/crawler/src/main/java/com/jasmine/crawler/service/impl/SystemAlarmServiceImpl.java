/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.SystemAlarmMapper;
import com.jasmine.crawler.pojo.entity.SystemAlarm;
import com.jasmine.crawler.pojo.param.UpdateSystemAlarmParams;
import com.jasmine.crawler.pojo.req.AddSystemAlarmReq;
import com.jasmine.crawler.pojo.req.GetSystemAlarmPageReq;
import com.jasmine.crawler.pojo.req.UpdateSystemAlarmReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.SystemAlarmService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SystemAlarmServiceImpl implements SystemAlarmService {

    @Autowired
    private SystemAlarmMapper systemAlarmMapper;

    @Override
    public boolean add(AddSystemAlarmReq req) {
        return systemAlarmMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return systemAlarmMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateSystemAlarmReq req) {
        UpdateSystemAlarmParams params = new UpdateSystemAlarmParams(id, req);
        return systemAlarmMapper.updateById(params) > 0;
    }

    @Override
    public SystemAlarm getById(Integer id) {
        return systemAlarmMapper.getById(id);
    }

    @Override
    public PageResult<SystemAlarm> getPage(GetSystemAlarmPageReq req) {
        return PageHelperUtils.paging(req, () -> systemAlarmMapper.getPage(req));
    }

}

