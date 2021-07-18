/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PIconConfigMapper;
import com.jasmine.crud_project.pojo.entity.PIconConfig;
import com.jasmine.crud_project.pojo.req.AddPIconConfigReq;
import com.jasmine.crud_project.pojo.req.GetPIconConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePIconConfigReq;
import com.jasmine.crud_project.pojo.resp.PIconConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PIconConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PIconConfigServiceImpl extends AbstractCrudService<PIconConfig> implements PIconConfigService {

    @Autowired
    private PIconConfigMapper pIconConfigMapper;

    @Override
    public boolean add(AddPIconConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePIconConfigReq req) {
        return DaoUtil.update(pIconConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PIconConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PIconConfigDetailResp> getDetailPage(GetPIconConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pIconConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PIconConfig> getEntityClass(){
        return PIconConfig.class;
    }

    @Override
    protected Mapper<PIconConfig> getMapper() {
        return  pIconConfigMapper;
    }
}

