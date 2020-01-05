package com.authority.service.impl;

import com.authority.mapper.UserInfoMapper;
import com.authority.pojo.entity.UserInfo;
import com.authority.pojo.entity.UserInfo;
import com.authority.pojo.req.AddUserInfoReq;
import com.authority.pojo.req.GetUserInfoListReq;
import com.authority.pojo.req.UpdateUserInfoByAccountReq;
import com.authority.service.UserInfoService;
import com.authority.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserInfoServiceImpl implements UserInfoService {

    @Autowired
    private UserInfoMapper userInfoMapper;

    @Override
    public boolean addUserInfo(AddUserInfoReq req) {
        return userInfoMapper.addUserInfo(req) > 0;
    }

    @Override
    public boolean deleteUserInfoByAccount(Integer account) {
        return userInfoMapper.deleteUserInfoByAccount(account) > 0;
    }

    @Override
    public boolean updateUserInfoByAccount(Integer account, UpdateUserInfoByAccountReq req) {
        return userInfoMapper.updateUserInfoByAccount(account, req) > 0;
    }

    @Override
    public UserInfo getUserInfoByAccount(Integer account) {
        return userInfoMapper.getUserInfoByAccount(account);
    }

    @Override
    public PageInfo<UserInfo> getUserInfoList(GetUserInfoListReq req) {
        return userInfoMapper.getUserInfoList(req);
    }

}
