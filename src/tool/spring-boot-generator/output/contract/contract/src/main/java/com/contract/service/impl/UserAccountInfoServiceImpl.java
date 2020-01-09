package com.contract.service.impl;

import com.contract.mapper.UserAccountInfoMapper;
import com.contract.pojo.entity.UserAccountInfo;
import com.contract.pojo.entity.UserAccountInfo;
import com.contract.pojo.param.UpdateUserAccountInfoByIdParams;
import com.contract.pojo.req.AddUserAccountInfoReq;
import com.contract.pojo.req.GetUserAccountInfoListReq;
import com.contract.pojo.req.UpdateUserAccountInfoByIdReq;
import com.contract.service.UserAccountInfoService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAccountInfoServiceImpl implements UserAccountInfoService {

    @Autowired
    private UserAccountInfoMapper userAccountInfoMapper;

    @Override
    public boolean addUserAccountInfo(AddUserAccountInfoReq req) {
        return userAccountInfoMapper.addUserAccountInfo(req) > 0;
    }

    @Override
    public boolean deleteUserAccountInfoById(Integer id) {
        return userAccountInfoMapper.deleteUserAccountInfoById(id) > 0;
    }

    @Override
    public boolean updateUserAccountInfoById(Integer id, UpdateUserAccountInfoByIdReq req) {
        UpdateUserAccountInfoByIdParams params = new UpdateUserAccountInfoByIdParams(id, req);
        return userAccountInfoMapper.updateUserAccountInfoById(params) > 0;
    }

    @Override
    public UserAccountInfo getUserAccountInfoById(Integer id) {
        return userAccountInfoMapper.getUserAccountInfoById(id);
    }

    @Override
    public PageInfo<UserAccountInfo> getUserAccountInfoList(GetUserAccountInfoListReq req) {
        return PageHelperUtils.paging(req, () -> userAccountInfoMapper.getUserAccountInfoList(req));
    }

}

