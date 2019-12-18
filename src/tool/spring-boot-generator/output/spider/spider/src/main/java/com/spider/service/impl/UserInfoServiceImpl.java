package com.undefined.service.impl;

import com.undefined.mapper.UserInfoMapper;
import com.undefined.pojo.entity.UserInfo;
import com.spider.service.UserInfoService;
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
    public boolean deleteUserInfoById(Integer id) {
        return userInfoMapper.deleteUserInfoById(id) > 0;
    }


    @Override
    public boolean updateUserInfoById(Integer id, UpdateUserInfoByIdReq req) {
        return userInfoMapper.updateUserInfoById(id, req) > 0;
    }


    @Override
    public UserInfo getUserInfoById(Integer id) {
        return userInfoMapper.getUserInfoById(id);
    }


    @Override
    public PageInfo<UserInfo> getUserInfoList(GetUserInfoListReq req) {
        return userInfoMapper.getUserInfoList(req);
    }
}
