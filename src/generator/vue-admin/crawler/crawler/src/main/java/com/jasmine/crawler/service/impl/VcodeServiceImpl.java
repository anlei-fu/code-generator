/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.VcodeMapper;
import com.jasmine.crawler.pojo.entity.Vcode;
import com.jasmine.crawler.pojo.param.UpdateVcodeParams;
import com.jasmine.crawler.pojo.req.AddVcodeReq;
import com.jasmine.crawler.pojo.req.GetVcodePageReq;
import com.jasmine.crawler.pojo.req.UpdateVcodeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.VcodeService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VcodeServiceImpl implements VcodeService {

    @Autowired
    private VcodeMapper vcodeMapper;

    @Override
    public boolean add(AddVcodeReq req) {
        return vcodeMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return vcodeMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateVcodeReq req) {
        UpdateVcodeParams params = new UpdateVcodeParams(id, req);
        return vcodeMapper.updateById(params) > 0;
    }

    @Override
    public Vcode getById(Integer id) {
        return vcodeMapper.getById(id);
    }

    @Override
    public PageResult<Vcode> getPage(GetVcodePageReq req) {
        return PageHelperUtils.paging(req, () -> vcodeMapper.getPage(req));
    }

}

