package com.contract.service;

import com.contract.pojo.entity.SystemContractTemplate;
import com.contract.pojo.req.AddSystemContractTemplateReq;
import com.contract.pojo.req.GetSystemContractTemplateListReq;
import com.contract.pojo.req.UpdateSystemContractTemplateByContractFileReq;
import com.github.pagehelper.PageInfo;

public interface SystemContractTemplateService {

    boolean addSystemContractTemplate(AddSystemContractTemplateReq req);

    boolean deleteSystemContractTemplateByContractFile(String contractFile);

    boolean updateSystemContractTemplateByContractFile(String contractFile, UpdateSystemContractTemplateByContractFileReq req);

    SystemContractTemplate getSystemContractTemplateByContractFile(String contractFile);

    PageInfo<SystemContractTemplate> getSystemContractTemplateList(GetSystemContractTemplateListReq req);

}
