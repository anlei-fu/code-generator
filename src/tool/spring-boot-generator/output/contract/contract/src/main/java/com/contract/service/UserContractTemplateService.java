package com.contract.service;

import com.contract.pojo.entity.UserContractTemplate;
import com.contract.pojo.req.AddUserContractTemplateReq;
import com.contract.pojo.req.GetUserContractTemplateListReq;
import com.contract.pojo.req.UpdateUserContractTemplateByIdReq;
import com.github.pagehelper.PageInfo;

public interface UserContractTemplateService {

    boolean addUserContractTemplate(AddUserContractTemplateReq req);

    boolean deleteUserContractTemplateById(Integer id);

    boolean updateUserContractTemplateById(Integer id, UpdateUserContractTemplateByIdReq req);

    UserContractTemplate getUserContractTemplateById(Integer id);

    PageInfo<UserContractTemplate> getUserContractTemplateList(GetUserContractTemplateListReq req);

}
