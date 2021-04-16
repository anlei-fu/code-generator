/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.BaseCrudMapper;
import com.jasmine.crud.mapper.ValidatorMapper;
import com.jasmine.crud.pojo.entity.Validator;
import com.jasmine.crud.pojo.req.AddValidatorReq;
import com.jasmine.crud.pojo.req.GetValidatorPageReq;
import com.jasmine.crud.pojo.req.UpdateValidatorBatchReq;
import com.jasmine.crud.pojo.req.UpdateValidatorReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ValidatorService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ValidatorServiceImpl extends AbstractCrudService<Validator> implements ValidatorService {

    @Autowired
    private ValidatorMapper validatorMapper;

    @Override
    public boolean add(AddValidatorReq req) {
        return add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return delete(id);
    }

    @Override
    public int deleteBatch(List<Integer> ids) {
        return validatorMapper.deleteBatch(ids);
    }

    @Override
    public boolean update(UpdateValidatorReq req) {
        return update(req);
    }

    @Override
    public int updateBatch(UpdateValidatorBatchReq req) {
        return validatorMapper.updateBatch(req);
    }

    @Override
    public Validator getById(Integer id) {
        return getById(id);
    }

    @Override
    public PageResult<Validator> getPage(GetValidatorPageReq req) {
        return PageHelperUtils.paging(req, () -> validatorMapper.getPage(req));
    }

    @Override
    protected Class<Validator> getEntityClass(){
        return Validator.class;
    }

    @Override
    protected BaseCrudMapper<Validator> getMapper() {
        return  validatorMapper;
    }
}

