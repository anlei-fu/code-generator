/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.service.impl;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.mapper.BackendConfigMapper;
import com.jasmine.crud1.pojo.entity.BackendConfig;
import com.jasmine.crud1.pojo.req.AddBackendConfigReq;
import com.jasmine.crud1.pojo.req.GetBackendConfigPageReq;
import com.jasmine.crud1.pojo.req.UpdateBackendConfigReq;
import com.jasmine.crud1.pojo.resp.PageResult;
import com.jasmine.crud1.service.BackendConfigService;
import com.jasmine.crud1.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class BackendConfigServiceImpl extends AbstractCrudService<BackendConfig> implements BackendConfigService {

    @Autowired
    private BackendConfigMapper backendConfigMapper;

    @Override
    public boolean add(AddBackendConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdateBackendConfigReq req) {
        return super.update(req);
    }

    @Override
    public PageResult<BackendConfigDetailResp> getDetailPage(GetBackendConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> backendConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<BackendConfig> getEntityClass(){
        return BackendConfig.class;
    }

    @Override
    protected Mapper<BackendConfig> getMapper() {
        return  backendConfigMapper;
    }
}

