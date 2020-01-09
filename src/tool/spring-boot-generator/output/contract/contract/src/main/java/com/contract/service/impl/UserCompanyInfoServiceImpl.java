package com.contract.service.impl;

import com.contract.mapper.UserCompanyInfoMapper;
import com.contract.pojo.entity.UserCompanyInfo;
import com.contract.pojo.entity.UserCompanyInfo;
import com.contract.pojo.param.UpdateUserCompanyInfoByIdParams;
import com.contract.pojo.req.AddUserCompanyInfoReq;
import com.contract.pojo.req.GetUserCompanyInfoListReq;
import com.contract.pojo.req.UpdateUserCompanyInfoByIdReq;
import com.contract.service.UserCompanyInfoService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserCompanyInfoServiceImpl implements UserCompanyInfoService {

    @Autowired
    private UserCompanyInfoMapper userCompanyInfoMapper;

    @Override
    public boolean addUserCompanyInfo(AddUserCompanyInfoReq req) {
        return userCompanyInfoMapper.addUserCompanyInfo(req) > 0;
    }

    @Override
    public boolean deleteUserCompanyInfoById(Integer id) {
        return userCompanyInfoMapper.deleteUserCompanyInfoById(id) > 0;
    }

    @Override
    public boolean updateUserCompanyInfoById(Integer id, UpdateUserCompanyInfoByIdReq req) {
        UpdateUserCompanyInfoByIdParams params = new UpdateUserCompanyInfoByIdParams(id, req);
        return userCompanyInfoMapper.updateUserCompanyInfoById(params) > 0;
    }

    @Override
    public UserCompanyInfo getUserCompanyInfoById(Integer id) {
        return userCompanyInfoMapper.getUserCompanyInfoById(id);
    }

    @Override
    public PageInfo<UserCompanyInfo> getUserCompanyInfoList(GetUserCompanyInfoListReq req) {
        return PageHelperUtils.paging(req, () -> userCompanyInfoMapper.getUserCompanyInfoList(req));
    }

}

