/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 2:13:50 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.*;
import com.jasmine.crud_project.pojo.entity.*;
import com.jasmine.crud_project.pojo.req.AddPProjectConfigReq;
import com.jasmine.crud_project.pojo.req.GetPTableEnumPageReq;
import com.jasmine.crud_project.pojo.resp.ProjectIdsResp;
import com.jasmine.crud_project.service.SystemService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.ValidateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SystemServiceImpl implements SystemService {

    @Autowired
    private PProjectConfigMapper pProjectConfigMapper;

    @Autowired
    private PTableMapper pTableMapper;

    @Autowired
    private PEnumMapper pEnumMapper;

    @Autowired
    private PTableEnumMapper pTableEnumMapper;

    @Autowired
    private PBackendConfigMapper pBackendConfigMapper;

    @Autowired
    private  PFrontendConfigMapper pFrontendConfigMapper;

    @Autowired
    private PDefaultConfigMapper pDefaultConfigMapper;

    @Autowired
    private  PCheckboxEnumMapper pCheckboxEnumMapper;

    @Autowired
    private  PRuleConfigMapper pRuleConfigMapper;

    @Autowired
    private  PControlConfigMapper pControlConfigMapper;

    @Autowired
    private PPageMapper pPageMapper;

    @Autowired
    private  PAnalyzeConfigMapper pAnalyzeConfigMapper;

    @Autowired
    private  PColorConfigMapper pColorConfigMapper;

    @Autowired
    private  PThemeConfigMapper pThemeConfigMapper;

    @Autowired
    private  PIconConfigMapper pIconConfigMapper;

    @Autowired
    private  PTemplateConfigMapper pTemplateConfigMapper;

    @Override
    public boolean init(AddPProjectConfigReq req) {

        Integer id = (Integer) DaoUtil.insertAndReturnId(pProjectConfigMapper, req, PProjectConfig.class);
        PTable entity = new PTable();
        entity.setContent("{}");
        entity.setProjectId(id);

        DaoUtil.insertNormal(pTableMapper,entity, PTable.class);
        DaoUtil.insertNormal(pTableEnumMapper,entity, PTableEnum.class);
        DaoUtil.insertNormal(pEnumMapper,entity, PEnum.class);

        DaoUtil.insertNormal(pCheckboxEnumMapper,entity, PCheckboxEnum.class);
        DaoUtil.insertNormal(pBackendConfigMapper,entity, PBackendConfig.class);
        DaoUtil.insertNormal(pFrontendConfigMapper,entity, PFrontendConfig.class);

        DaoUtil.insertNormal(pAnalyzeConfigMapper,entity, PAnalyzeConfig.class);
        DaoUtil.insertNormal(pDefaultConfigMapper,entity, PDefaultConfig.class);
        DaoUtil.insertNormal(pRuleConfigMapper,entity, PRuleConfig.class);
        DaoUtil.insertNormal(pControlConfigMapper,entity, PControlConfig.class);

        return true;
    }

    @Override
    public ProjectIdsResp getIds(Integer projectId) {

        ProjectIdsResp result = new ProjectIdsResp();

        GetPTableEnumPageReq req =new GetPTableEnumPageReq();
        req.setProjectId(projectId);

        PTable table =DaoUtil.queryOne(pTableMapper,req, PTable.class);
        ValidateUtils.requireNotNull(table, "table");
        result.setTableId(table.getId());

        PEnum pEnum =DaoUtil.queryOne(pEnumMapper,req, PEnum.class);
        ValidateUtils.requireNotNull(pEnum, "enum");
        result.setEnumId(pEnum.getId());

        PCheckboxEnum pCheckboxEnum =DaoUtil.queryOne(pCheckboxEnumMapper,req, PCheckboxEnum.class);
        ValidateUtils.requireNotNull(pCheckboxEnum, "checkboxEnum");
        result.setCheckboxEnumId(pCheckboxEnum.getId());


        PTableEnum pTableEnum =DaoUtil.queryOne(pTableEnumMapper,req, PTableEnum.class);
        ValidateUtils.requireNotNull(pTableEnum, "tableEnum");
        result.setTableEnumId(pTableEnum.getId());

        PBackendConfig pBackendConfig =DaoUtil.queryOne(pBackendConfigMapper,req, PBackendConfig.class);
        ValidateUtils.requireNotNull(pBackendConfig, "backendConfig");
        result.setBackendConfigId(pBackendConfig.getId());

        PFrontendConfig pFrontendConfig =DaoUtil.queryOne(pFrontendConfigMapper,req, PFrontendConfig.class);
        ValidateUtils.requireNotNull(pFrontendConfig, "frontendConfig");
        result.setFrontendConfigId(pFrontendConfig.getId());

        PAnalyzeConfig pAnalyzeConfig =DaoUtil.queryOne(pAnalyzeConfigMapper,req, PAnalyzeConfig.class);
        ValidateUtils.requireNotNull(pAnalyzeConfig, "analyzeConfig");
        result.setAnalyzeConfigId(pAnalyzeConfig.getId());

        PDefaultConfig pDefaultConfig =DaoUtil.queryOne(pDefaultConfigMapper,req, PDefaultConfig.class);
        ValidateUtils.requireNotNull(pDefaultConfig, "defaultValue");
        result.setDefaultValueConfigId(pDefaultConfig.getId());

        PRuleConfig pRuleConfig =DaoUtil.queryOne(pRuleConfigMapper,req, PRuleConfig.class);
        ValidateUtils.requireNotNull(pRuleConfig, "rule");
        result.setRuleConfigId(pRuleConfig.getId());

        PControlConfig pControlConfig =DaoUtil.queryOne(pControlConfigMapper,req, PControlConfig.class);
        ValidateUtils.requireNotNull(pControlConfig, "control");
        result.setControlConfigId(pControlConfig.getId());
        result.setProjectId(projectId);

        return result;
    }
}

