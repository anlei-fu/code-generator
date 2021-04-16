/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.AditionalOptionMapper;
import com.jasmine.crud.mapper.BaseCrudMapper;
import com.jasmine.crud.pojo.entity.AditionalOption;
import com.jasmine.crud.pojo.req.AddAditionalOptionReq;
import com.jasmine.crud.pojo.req.GetAditionalOptionPageReq;
import com.jasmine.crud.pojo.req.UpdateAditionalOptionBatchReq;
import com.jasmine.crud.pojo.req.UpdateAditionalOptionReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.AditionalOptionService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AditionalOptionServiceImpl extends AbstractCrudService<AditionalOption> implements AditionalOptionService {

    @Autowired
    private AditionalOptionMapper aditionalOptionMapper;

    @Override
    public boolean add(AddAditionalOptionReq req) {
        return add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return delete(id);
    }

    @Override
    public int deleteBatch(List<Integer> ids) {
        return aditionalOptionMapper.deleteBatch(ids);
    }

    @Override
    public boolean update(UpdateAditionalOptionReq req) {
        return update(req);
    }

    @Override
    public int updateBatch(UpdateAditionalOptionBatchReq req) {
        return aditionalOptionMapper.updateBatch(req);
    }

    @Override
    public AditionalOption getById(Integer id) {
        return getById(id);
    }

    @Override
    public PageResult<AditionalOption> getPage(GetAditionalOptionPageReq req) {
        return PageHelperUtils.paging(req, () -> aditionalOptionMapper.getPage(req));
    }

    @Override
    protected Class<AditionalOption> getEntityClass(){
        return AditionalOption.class;
    }

    @Override
    protected BaseCrudMapper<AditionalOption> getMapper() {
        return  aditionalOptionMapper;
    }
}

