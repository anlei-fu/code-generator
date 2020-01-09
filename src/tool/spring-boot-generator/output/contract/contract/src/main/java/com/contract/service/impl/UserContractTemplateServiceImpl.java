package com.contract.service.impl;

import com.contract.mapper.UserContractTemplateMapper;
import com.contract.pojo.entity.UserContractTemplate;
import com.contract.pojo.entity.UserContractTemplate;
import com.contract.pojo.param.UpdateUserContractTemplateByIdParams;
import com.contract.pojo.req.AddUserContractTemplateReq;
import com.contract.pojo.req.GetUserContractTemplateListReq;
import com.contract.pojo.req.UpdateUserContractTemplateByIdReq;
import com.contract.service.UserContractTemplateService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserContractTemplateServiceImpl implements UserContractTemplateService {

    @Autowired
    private UserContractTemplateMapper userContractTemplateMapper;

    @Override
    public boolean addUserContractTemplate(AddUserContractTemplateReq req) {
        return userContractTemplateMapper.addUserContractTemplate(req) > 0;
    }

    @Override
    public boolean deleteUserContractTemplateById(Integer id) {
        return userContractTemplateMapper.deleteUserContractTemplateById(id) > 0;
    }

    @Override
    public boolean updateUserContractTemplateById(Integer id, UpdateUserContractTemplateByIdReq req) {
        UpdateUserContractTemplateByIdParams params = new UpdateUserContractTemplateByIdParams(id, req);
        return userContractTemplateMapper.updateUserContractTemplateById(params) > 0;
    }

    @Override
    public UserContractTemplate getUserContractTemplateById(Integer id) {
        return userContractTemplateMapper.getUserContractTemplateById(id);
    }

    @Override
    public PageInfo<UserContractTemplate> getUserContractTemplateList(GetUserContractTemplateListReq req) {
        return PageHelperUtils.paging(req, () -> userContractTemplateMapper.getUserContractTemplateList(req));
    }

}

