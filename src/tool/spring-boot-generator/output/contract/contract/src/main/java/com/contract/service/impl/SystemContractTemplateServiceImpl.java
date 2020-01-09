package com.contract.service.impl;

import com.contract.mapper.SystemContractTemplateMapper;
import com.contract.pojo.entity.SystemContractTemplate;
import com.contract.pojo.entity.SystemContractTemplate;
import com.contract.pojo.param.UpdateSystemContractTemplateByContractFileParams;
import com.contract.pojo.req.AddSystemContractTemplateReq;
import com.contract.pojo.req.GetSystemContractTemplateListReq;
import com.contract.pojo.req.UpdateSystemContractTemplateByContractFileReq;
import com.contract.service.SystemContractTemplateService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SystemContractTemplateServiceImpl implements SystemContractTemplateService {

    @Autowired
    private SystemContractTemplateMapper systemContractTemplateMapper;

    @Override
    public boolean addSystemContractTemplate(AddSystemContractTemplateReq req) {
        return systemContractTemplateMapper.addSystemContractTemplate(req) > 0;
    }

    @Override
    public boolean deleteSystemContractTemplateByContractFile(String contractFile) {
        return systemContractTemplateMapper.deleteSystemContractTemplateByContractFile(contractFile) > 0;
    }

    @Override
    public boolean updateSystemContractTemplateByContractFile(String contractFile, UpdateSystemContractTemplateByContractFileReq req) {
        UpdateSystemContractTemplateByContractFileParams params = new UpdateSystemContractTemplateByContractFileParams(contractFile, req);
        return systemContractTemplateMapper.updateSystemContractTemplateByContractFile(params) > 0;
    }

    @Override
    public SystemContractTemplate getSystemContractTemplateByContractFile(String contractFile) {
        return systemContractTemplateMapper.getSystemContractTemplateByContractFile(contractFile);
    }

    @Override
    public PageInfo<SystemContractTemplate> getSystemContractTemplateList(GetSystemContractTemplateListReq req) {
        return PageHelperUtils.paging(req, () -> systemContractTemplateMapper.getSystemContractTemplateList(req));
    }

}

