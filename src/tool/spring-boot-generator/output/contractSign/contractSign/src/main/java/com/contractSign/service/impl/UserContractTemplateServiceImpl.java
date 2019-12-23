package com.contractSign.service;



public interface @nameService {

    boolean addUserContractTemplate(AddUserContractTemplateReq req);
    boolean deleteUserContractTemplateById(Integer id);
    boolean updateUserContractTemplateById(Integer id, UpdateUserContractTemplateByIdReq req);
    UserContractTemplate getUserContractTemplateById(Integer id);
    PageInfo<UserContractTemplate> getUserContractTemplateList(GetUserContractTemplateListReq req);

}