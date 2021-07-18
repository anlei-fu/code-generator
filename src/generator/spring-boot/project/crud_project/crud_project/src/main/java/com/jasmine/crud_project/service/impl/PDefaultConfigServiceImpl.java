/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PDefaultConfigMapper;
import com.jasmine.crud_project.pojo.entity.PDefaultConfig;
import com.jasmine.crud_project.pojo.req.AddPDefaultConfigReq;
import com.jasmine.crud_project.pojo.req.GetPDefaultConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePDefaultConfigReq;
import com.jasmine.crud_project.pojo.resp.PDefaultConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PDefaultConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PDefaultConfigServiceImpl extends AbstractCrudService<PDefaultConfig> implements PDefaultConfigService {

    @Autowired
    private PDefaultConfigMapper pDefaultConfigMapper;

    @Override
    public boolean add(AddPDefaultConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePDefaultConfigReq req) {
        return DaoUtil.update(pDefaultConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PDefaultConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PDefaultConfigDetailResp> getDetailPage(GetPDefaultConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pDefaultConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PDefaultConfig> getEntityClass(){
        return PDefaultConfig.class;
    }

    @Override
    protected Mapper<PDefaultConfig> getMapper() {
        return  pDefaultConfigMapper;
    }
}

