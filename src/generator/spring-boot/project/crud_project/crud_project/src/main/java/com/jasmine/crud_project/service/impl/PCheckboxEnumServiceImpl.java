/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PCheckboxEnumMapper;
import com.jasmine.crud_project.pojo.entity.PCheckboxEnum;
import com.jasmine.crud_project.pojo.req.AddPCheckboxEnumReq;
import com.jasmine.crud_project.pojo.req.GetPCheckboxEnumPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePCheckboxEnumReq;
import com.jasmine.crud_project.pojo.resp.PCheckboxEnumDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PCheckboxEnumService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PCheckboxEnumServiceImpl extends AbstractCrudService<PCheckboxEnum> implements PCheckboxEnumService {

    @Autowired
    private PCheckboxEnumMapper pCheckboxEnumMapper;

    @Override
    public boolean add(AddPCheckboxEnumReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePCheckboxEnumReq req) {
        return DaoUtil.update(pCheckboxEnumMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PCheckboxEnum getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PCheckboxEnumDetailResp> getDetailPage(GetPCheckboxEnumPageReq req) {
        return PageHelperUtils.paging(req, () -> pCheckboxEnumMapper.getDetailPage(req));
    }


    @Override
    protected Class<PCheckboxEnum> getEntityClass(){
        return PCheckboxEnum.class;
    }

    @Override
    protected Mapper<PCheckboxEnum> getMapper() {
        return  pCheckboxEnumMapper;
    }
}

