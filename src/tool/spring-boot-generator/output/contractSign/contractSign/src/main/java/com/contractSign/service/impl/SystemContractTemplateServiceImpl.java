package com.contractSign.service;



public interface @nameService {

    boolean addSystemContractTemplate(AddSystemContractTemplateReq req);
    boolean deleteSystemContractTemplateById(Integer id);
    boolean updateSystemContractTemplateById(Integer id, UpdateSystemContractTemplateByIdReq req);
    SystemContractTemplate getSystemContractTemplateById(Integer id);
    PageInfo<SystemContractTemplate> getSystemContractTemplateList(GetSystemContractTemplateListReq req);

}