package com.authority.service.impl;

import com.authority.mapper.UserInfoMapper;
import com.authority.pojo.entity.UserInfo;
import com.authority.pojo.entity.UserInfo;
import com.authority.pojo.req.AddUserInfoReq;
import com.authority.pojo.req.GetUserInfoListReq;
import com.authority.pojo.req.UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq;
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
    public boolean addUserInfo(AddUserInfoReq req, String user) {
        params params = new AddUserInfoParams(req, user)
        return userInfoMapper.addUserInfo(params) > 0;
    }

    @Override
    public boolean deleteUserInfoByUserAndUserAndUserAndUserAndAccount(String account) {
        return userInfoMapper.deleteUserInfoByUserAndUserAndUserAndUserAndAccount(account) > 0;
    }

    @Override
    public boolean updateUserInfoByUserAndUserAndUserAndUserAndAccount(String account, UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq req) {
        params params = new UpdateUserInfoByUserAndUserAndUserAndUserAndAccountParams(account, req)
        return userInfoMapper.updateUserInfoByUserAndUserAndUserAndUserAndAccount(params) > 0;
    }

    @Override
    public UserInfo getUserInfoByUserAndUserAndUserAndUserAndAccount(String account) {
        return userInfoMapper.getUserInfoByUserAndUserAndUserAndUserAndAccount(account);
    }

    @Override
    public PageInfo<UserInfo> getUserInfoList(GetUserInfoListReq req) {
        return PageHelperUtils.page(()=> userInfoMapper.getUserInfoList(req));
    }

}
