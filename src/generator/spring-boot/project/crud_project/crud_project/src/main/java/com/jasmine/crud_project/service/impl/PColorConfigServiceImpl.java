/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PColorConfigMapper;
import com.jasmine.crud_project.pojo.entity.PColorConfig;
import com.jasmine.crud_project.pojo.req.AddPColorConfigReq;
import com.jasmine.crud_project.pojo.req.GetPColorConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePColorConfigReq;
import com.jasmine.crud_project.pojo.resp.PColorConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PColorConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PColorConfigServiceImpl extends AbstractCrudService<PColorConfig> implements PColorConfigService {

    @Autowired
    private PColorConfigMapper pColorConfigMapper;

    @Override
    public boolean add(AddPColorConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePColorConfigReq req) {
        return DaoUtil.update(pColorConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PColorConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PColorConfigDetailResp> getDetailPage(GetPColorConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pColorConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PColorConfig> getEntityClass(){
        return PColorConfig.class;
    }

    @Override
    protected Mapper<PColorConfig> getMapper() {
        return  pColorConfigMapper;
    }
}

