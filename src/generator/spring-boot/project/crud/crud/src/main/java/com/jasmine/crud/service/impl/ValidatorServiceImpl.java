/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.ValidatorMapper;
import com.jasmine.crud.pojo.entity.Validator;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddValidatorReq;
import com.jasmine.crud.pojo.req.GetValidatorPageReq;
import com.jasmine.crud.pojo.req.UpdateValidatorReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ValidatorService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;

@Service
public class ValidatorServiceImpl extends AbstractCrudService<Validator> implements ValidatorService {

    @Autowired
    private ValidatorMapper validatorMapper;

    @Override
    public boolean add(AddValidatorReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateValidatorReq req) {
        return super.update(req);
    }

    @Override
    public PageResult<ValidatorDetailResp> getDetailPage(GetValidatorPageReq req) {
        return PageHelperUtils.paging(req, () -> validatorMapper.getDetailPage(req));
    }

    @Override
    protected Class<Validator> getEntityClass(){
        return Validator.class;
    }

    @Override
    protected Mapper<Validator> getMapper() {
        return  validatorMapper;
    }
}

