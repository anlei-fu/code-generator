/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.mapper.FrontendConfigMapper;
import com.jasmine.crud.pojo.entity.FrontendConfig;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddFrontendConfigReq;
import com.jasmine.crud.pojo.req.GetFrontendConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateFrontendConfigReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.FrontendConfigService;
import com.jasmine.crud.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class FrontendConfigServiceImpl extends AbstractCrudService<FrontendConfig> implements FrontendConfigService {

    @Autowired
    private FrontendConfigMapper frontendConfigMapper;

    @Override
    public boolean add(AddFrontendConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateFrontendConfigReq req) {
        return super.update(req);
    }

    @Override
    public FrontendConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<FrontendConfigDetailResp> getDetailPage(GetFrontendConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> frontendConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<FrontendConfig> getEntityClass(){
        return FrontendConfig.class;
    }

    @Override
    protected Mapper<FrontendConfig> getMapper() {
        return  frontendConfigMapper;
    }
}

