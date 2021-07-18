/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.CheckboxMapper;
import com.jasmine.crud.pojo.entity.Checkbox;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddCheckboxReq;
import com.jasmine.crud.pojo.req.GetCheckboxPageReq;
import com.jasmine.crud.pojo.req.UpdateCheckboxReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.CheckboxService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class CheckboxServiceImpl extends AbstractCrudService<Checkbox> implements CheckboxService {

    @Autowired
    private CheckboxMapper checkboxMapper;

    @Override
    public boolean add(AddCheckboxReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateCheckboxReq req) {
        return super.update(req);
    }

    @Override
    public Checkbox getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<CheckboxDetailResp> getDetailPage(GetCheckboxPageReq req) {
        return PageHelperUtils.paging(req, () -> checkboxMapper.getDetailPage(req));
    }


    @Override
    protected Class<Checkbox> getEntityClass(){
        return Checkbox.class;
    }

    @Override
    protected Mapper<Checkbox> getMapper() {
        return  checkboxMapper;
    }
}

