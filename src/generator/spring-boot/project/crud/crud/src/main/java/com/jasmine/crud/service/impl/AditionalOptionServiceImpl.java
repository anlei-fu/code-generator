/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:53:03 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.AditionalOptionMapper;
import com.jasmine.crud.pojo.entity.AditionalOption;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddAditionalOptionReq;
import com.jasmine.crud.pojo.req.GetAditionalOptionPageReq;
import com.jasmine.crud.pojo.req.UpdateAditionalOptionReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.AditionalOptionService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;

@Service
public class AditionalOptionServiceImpl extends AbstractCrudService<AditionalOption> implements AditionalOptionService {

    @Autowired
    private AditionalOptionMapper aditionalOptionMapper;

    @Override
    public boolean add(AddAditionalOptionReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateAditionalOptionReq req) {
        return super.update(req);
    }

    @Override
    public PageResult<AditionalOptionDetailResp> getDetailPage(GetAditionalOptionPageReq req) {
        return PageHelperUtils.paging(req, () -> aditionalOptionMapper.getDetailPage(req));
    }

    @Override
    protected Class<AditionalOption> getEntityClass(){
        return AditionalOption.class;
    }

    @Override
    protected Mapper<AditionalOption> getMapper() {
        return  aditionalOptionMapper;
    }
}

