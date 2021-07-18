/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.service.impl;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.mapper.FrontendConfigMapper;
import com.jasmine.crud1.pojo.entity.FrontendConfig;
import com.jasmine.crud1.pojo.req.AddFrontendConfigReq;
import com.jasmine.crud1.pojo.req.GetFrontendConfigPageReq;
import com.jasmine.crud1.pojo.req.UpdateFrontendConfigReq;
import com.jasmine.crud1.pojo.resp.PageResult;
import com.jasmine.crud1.service.FrontendConfigService;
import com.jasmine.crud1.utils.PageHelperUtils;
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

