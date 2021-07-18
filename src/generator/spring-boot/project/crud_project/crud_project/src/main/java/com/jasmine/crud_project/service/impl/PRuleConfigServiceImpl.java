/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PRuleConfigMapper;
import com.jasmine.crud_project.pojo.entity.PRuleConfig;
import com.jasmine.crud_project.pojo.req.AddPRuleConfigReq;
import com.jasmine.crud_project.pojo.req.GetPRuleConfigPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePRuleConfigReq;
import com.jasmine.crud_project.pojo.resp.PRuleConfigDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PRuleConfigService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PRuleConfigServiceImpl extends AbstractCrudService<PRuleConfig> implements PRuleConfigService {

    @Autowired
    private PRuleConfigMapper pRuleConfigMapper;

    @Override
    public boolean add(AddPRuleConfigReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePRuleConfigReq req) {
        return DaoUtil.update(pRuleConfigMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PRuleConfig getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PRuleConfigDetailResp> getDetailPage(GetPRuleConfigPageReq req) {
        return PageHelperUtils.paging(req, () -> pRuleConfigMapper.getDetailPage(req));
    }


    @Override
    protected Class<PRuleConfig> getEntityClass(){
        return PRuleConfig.class;
    }

    @Override
    protected Mapper<PRuleConfig> getMapper() {
        return  pRuleConfigMapper;
    }
}

